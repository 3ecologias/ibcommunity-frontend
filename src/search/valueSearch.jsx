import React, { Component } from 'react';
import Header from "../mainComponents/Header.jsx";
import requests from "../functions/requests.js";

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
  }

  async submitHandle(event){
    event.preventDefault();
    var max = parseInt(this.state.value);
    this.filteredProjectsList = this.projectsList.filter((project) => {
      if (parseInt(project.project_totals) <= max) {
        return project;
      }
    });
    this.props.history.push({pathname: '/result', state: {projectsList: this.filteredProjectsList} });
  }

  async componentWillMount(){
      var token = localStorage.getItem("tokenib");
      this.state.token = token;
      var product_id = this.props.location.state.product.id;
      var projects_list = await requests.projectList(this.state.token, product_id);
      this.projectsList = projects_list.data;
  }

  render() {
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
								<h3>Valor global para cálculo:</h3>
								<form class="register-form">
									<div class="input-group mt-3 mb-2">
										<span class="input-group-addon"><i class="mr-1 fa fa-search"></i></span>
                    <input type="text" placeholder="US$ 810.000,00" className="form-control pull-right" onChange={(event) => {this.setState({value: event.target.value})}}/>
									</div>
								</form>
							</div>
						</div>
						<div class="col-xs-4 ml-auto mr-auto">
							<div class="card card-plain card-search">
								<button onClick={(event) => {this.submitHandle(event)}} class="btn btn-danger btn-block btn-round">Buscar</button>
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


