import React, { Component } from 'react';
import Header from "../mainComponents/Header";
import Autosuggest from 'react-autosuggest';
import requests from "../functions/requests";
import extraFunctions from "../functions/extraFunctions";

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
			value: "",
			suggestions: [],
			id: "",
			token: "",
			message: {class: "d-none" , data: ""}
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
		if (id) {
			var res = await requests.searchProduct(this.state.token,id);
			var product = res.data;
			this.setState({message: {class: "d-none" ,data:""}})
			this.props.history.push({pathname: '/valuesearch', state: {product: product} });
		}
		else{this.setState({message: {class: "d-block text-danger ml-2" ,data:"Campo em branco ou nome inválido"}})}
	}

	async componentWillMount(){
		var token = localStorage.getItem("tokenib");
		this.state.token = token;
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
            <Header logado={extraFunctions.checklogin(this.state.token)}/>
			{extraFunctions.redirectNotLoged(this.state.token)}
            <div className="wrapper">
			<div id="search-div" className="page-header search-background">
				<div className="filter"></div>
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-6 ml-auto mr-auto z-2">
							<div className="card card-plain card-search ml-auto mr-auto p-0">
								<h3>Buscar produto:</h3>
								<form className="register-form">
									<div className="input-group mt-3 mb-2">
										<span className="input-group-addon"><i className="mr-1 fa fa-search"></i></span>
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
									<small className={this.state.message.class}>{this.state.message.data}</small>
									<div className="col-6 col-sm-6 col-md-6 ml-auto mr-auto z-1">
										<div className="card card-plain card-search p-0 ml-auto mr-auto search-btn">
											<button onClick={(event) => this.submitHandle(event,this.state.id)} className="btn btn-danger btn-block btn-round">Buscar</button>
										</div>
									</div>
								</form>
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