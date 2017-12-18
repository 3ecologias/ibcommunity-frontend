import React, { Component } from 'react';
import Header from "../mainComponents/Header.jsx";
import requests from "../functions/requests.js";
import extraFunctions from "../functions/extraFunctions";

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      login: "",
      password: "",
      token: "",
      value: "",
      communities: [],
      message: {class: "d-none" , data: ""}
    }
    this.projectsList = [];
    this.filteredProjectsList = [];
    this.productName = "";
  }

  async submitHandle(event){
    event.preventDefault();
    var moneyRegex = new RegExp(/^[0-9]([0-9]*\.*)+(,)*([0-9]*)+/,"g");
    if(moneyRegex.test(this.state.value)){
    var max = parseFloat(this.state.value);
    console.log(max);
    this.filteredProjectsList = this.projectsList.filter((project) => {
      if (parseFloat(project.project_totals) <= max) {
        return project;
      }
    });
    this.props.history.push({pathname: '/result', state: {projectsList: this.filteredProjectsList, productName: this.productName , valor: this.state.value} });
    }
    else{this.setState({message: {class: "d-block text-danger ml-2" ,data:"Campo em branco ou numero inválido"}})}
  }

  async componentWillMount(){
      var token = localStorage.getItem("tokenib");
      this.state.token = token;
      this.productName = this.props.location.state.product.common_name;
      var product_id = this.props.location.state.product.id;
      var projects_list = await requests.projectList(this.state.token, product_id);
      this.projectsList = projects_list.data;
  }

  render() {
    return (
      <div>
        <Header logado={extraFunctions.checklogin(this.state.token)} history={this.props.history}/>
			  {extraFunctions.redirectNotLoged(this.state.token)}
        <div className="wrapper">
			  <div id="search-div" className="page-header value-search-background">
				<div className="filter"></div>
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-6 ml-auto mr-auto">
							<div className="card card-plain card-search ml-auto mr-auto p-0">
								<h3>Valor a ser repartido:</h3>
								<form className="register-form">
									<div className="input-group mt-3 mb-2">
										<span className="input-group-addon"><i className="mr-1 fa fa-search"></i></span>
                    <input type="number" placeholder="US$ 810.000,00" className="form-control pull-right" onChange={(event) => {this.setState({value: event.target.value})}} required/>
                  </div>
                  <small className={this.state.message.class}>{this.state.message.data}</small>
                  <small className="ml-2">Digite apenas numeros*</small>
                  <div className="col-6 col-sm-6 col-md-6 ml-auto mr-auto z-1">
                    <div className="ard card-plain card-search p-0 ml-auto mr-auto search-btn">
                      <button onClick={(event) => {this.submitHandle(event)}} className="btn btn-danger btn-block btn-round">Buscar</button>
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


