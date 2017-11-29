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
      communities: []
    }
    this.projectsList = [];
    this.filteredProjectsList = [];
    this.productName = "";
  }

  async submitHandle(event){
    event.preventDefault();
    var max = parseInt(this.state.value);
    this.filteredProjectsList = this.projectsList.filter((project) => {
      if (parseInt(project.project_totals) <= max) {
        return project;
      }
    });
    this.props.history.push({pathname: '/result', state: {projectsList: this.filteredProjectsList, productName: this.productName , valor: this.state.value} });
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
        <Header logado={extraFunctions.checklogin(this.state.token)}/>
			  {extraFunctions.redirectNotLoged(this.state.token)}
        <div className="wrapper">
			  <div id="search-div" className="page-header search-background">
				<div className="filter"></div>
				<div className="container">
					<div className="row">
						<div className="col col-md ml-auto mr-auto ">
							<div className="card card-plain card-search p-0">
								<h3>Valor global para cálculo:</h3>
								<form className="register-form">
									<div className="input-group mt-3 mb-2">
										<span className="input-group-addon"><i className="mr-1 fa fa-search"></i></span>
                    <input type="text" placeholder="US$ 810.000,00" className="form-control pull-right" onChange={(event) => {this.setState({value: event.target.value})}}/>
									</div>
								</form>
							</div>
						</div>
						<div className="col-8 col-md-3 ml-auto mr-auto">
							<div className="card card-plain card-search p-0">
								<button onClick={(event) => {this.submitHandle(event)}} className="btn btn-danger btn-block btn-round">Buscar</button>
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


