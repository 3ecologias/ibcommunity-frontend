import React, { Component } from 'react';
import Header from "../mainComponents/Header";
import Autosuggest from 'react-autosuggest';
import requests from "../functions/requests";

var products = [];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  
  return inputLength === 0 ? [] : products.filter(product =>
	  product.common_name.toLowerCase().slice(0, inputLength) === inputValue || product.scientific_name.toLowerCase().slice(0, inputLength) === inputValue
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
			suggestions: getSuggestions(value),
		});
	};

	// Autosuggest will call this function every time you need to clear suggestions.
	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: [],
		});
	};

	// When suggestion is selected
	onSuggestionSelected = (event, {suggestion}) => {
		this.setState({
			id: suggestion.id,
		});
	}

	async submitHandle(event, id){
		event.preventDefault();
		var token = localStorage.getItem("tokenib");
		var res = await requests.searchProduct(token,id);
		var product = res.data;
		this.props.history.push({pathname: '/valuesearch', state: {product: product} });
	}

	async componentWillMount(){
		var token = localStorage.getItem("tokenib");
		var res = await requests.searchProductList(token);
		products = res.data;
	}

    render() {
		const { value, suggestions } = this.state;
		// Autosuggest will pass through all these props to the input.
		const inputProps = {
			placeholder: 'Digite o produto',
			value,
			onChange: this.onChange
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
											onSuggestionSelected={this.onSuggestionSelected}
											inputProps={inputProps}
										/>
									</div>
								</form>
							</div>
						</div>
						<div class="col-xs-4 ml-auto mr-auto">
							<div class="card card-plain card-search">
								<button onClick={(event) => this.submitHandle(event,this.state.id)} class="btn btn-danger btn-block btn-round">Buscar</button>
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