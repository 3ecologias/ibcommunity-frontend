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
  }

  async submitHandle(event, id){
    event.preventDefault();
    var token = localStorage.getItem("tokenib");
    var res = await requests.searchCommunity(token,id);
    var communities = res.data;
    this.props.history.push({pathname: '/valuesearch', state: {communities: communities} });
  }

  async componentWillMount(){
      var token = localStorage.getItem("tokenib");
      this.state.token = token;
      var product_communities = this.props.location.state.communities;
      var communities_list = await requests.communityList(this.state.token,product_communities.id);
      console.log("moabe", communities_list);

    //   for (var index = 0; index < product_communities.length; index++) {
    //       var element = product_communities[index];
    //       communities[i] = requests.searchCommunity(this.state.token, )
    //   }
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


