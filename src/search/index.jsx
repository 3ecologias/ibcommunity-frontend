import React, { Component } from 'react';
import Header from "../mainComponents/Header";
import Autosuggest from 'react-autosuggest';
import requests from "../functions/requests";

var products = [];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  
  return inputLength === 0 ? [] : products.filter(lang =>
	  lang.common_name.toLowerCase().slice(0, inputLength) === inputValue || lang.scientific_name.toLowerCase().slice(0, inputLength) === inputValue
	);
  };
  
  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  const getSuggestionValue = suggestion => suggestion.common_name+", "+suggestion.scientific_name;
  
  // Use your imagination to render suggestions.
  const renderSuggestion = suggestion => (
	<div>
	  {suggestion.common_name}, {suggestion.scientific_name}
	</div>
  );

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
			value: '',
			suggestions: [],
			id: '',
        }
	}

	onChange = (event, { newValue }) => {
		this.setState({
			value: newValue
		});
	};

	// Autosuggest will call this function every time you need to update suggestions.
	// You already implemented this logic above, so just use it.
	onSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			suggestions: getSuggestions(value)
		});
	};

	// Autosuggest will call this function every time you need to clear suggestions.
	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: []
		});
	};

	async componentWillMount(){
		var token = localStorage.getItem("tokenib");
		var res = await requests.searchProduct(token);
		products = res.data;
	}

    render() {
		const { value, suggestions } = this.state;
		
		// Autosuggest will pass through all these props to the input.
		const inputProps = {
			placeholder: 'Digite o produto',
			value,
			onChange: this.onChange,
			'data-product-id': '',
		};
        return (
            <div>
            <Header logado={true}/>
            <div class="wrapper">
			<div id="search-div" class="page-header search-background">
				<div class="filter"></div>
				<div class="container mt-5">
					<div class="row mt-5">
						<div class="col-lg-5 ml-auto mr-auto ">
							<div class="card card-plain card-search ">
								<h3>Busca produto:</h3>
								<form class="register-form">
									<div class="input-group mt-3 mb-2">
										<span class="input-group-addon"><i class="mr-1 fa fa-search"></i></span>
										<Autosuggest
											suggestions={suggestions}
											onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
											onSuggestionsClearRequested={this.onSuggestionsClearRequested}
											getSuggestionValue={getSuggestionValue}
											renderSuggestion={renderSuggestion}
											inputProps={inputProps}
										/>
									</div>
									<div class="form-check">
										<label class="form-check-label">
											<input class="form-check-input" type="checkbox" value=""/>
											Patrimônio genético
											<span class="form-check-sign"></span>
										</label>
									</div>
									<div class="form-check">
										<label class="form-check-label">
											<input class="form-check-input" type="checkbox" value=""/>
											Conhecimento tradicional não identificável
											<span class="form-check-sign"></span>
										</label>
									</div>
									<div class="form-check">
										<label class="form-check-label">
											<input class="form-check-input" type="checkbox" value=""/>
											Conhecimento tradicional identificável
											<span class="form-check-sign"></span>
										</label>
									</div>
								</form>
							</div>
						</div>
						<div class="col-lg-5 ml-auto mr-auto">
							<div class="card card-plain card-search">
								<h3>Busca projeto:</h3>
								<form class="register-form">
									<div class="input-group mt-3 mb-2">
										<span class="input-group-addon"><i class="mr-1 fa fa-search"></i></span>
										<input type="text" class="form-control pull-right" placeholder="Valor do projeto"/>
									</div>
									<div class="dropdown">
										<a href="#" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
											Área de atuação
											<b class="caret"></b>
										</a>
										<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
											<li class="dropdown-header">Escolha da lista abaixo</li>
											<a class="dropdown-item" href="#pk">Energia renovável</a>
											<a class="dropdown-item" href="#pk">Empoderamento feminino</a>
											<a class="dropdown-item" href="#pk">Reflorestamento</a>
										</ul>
									</div>
								</form>
							</div>
						</div>
						<div class="col-xs-4 ml-auto mr-auto">
							<div class="card card-plain card-search">
								<button class="btn btn-danger btn-block btn-round">Buscar</button>
							</div>
						</div>
					</div>
				</div>
			</div>
            </div>
            </div>
        );
    }
}