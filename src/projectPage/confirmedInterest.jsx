import React, { Component } from 'react';
import Header from "../mainComponents/Header.jsx";
import requests from "../functions/requests.js";
import extraFunctions from "../functions/extraFunctions";


export default class ProjectPage extends Component {
  constructor(props){
    super(props);
    this.state = {
        token: ""
    }
  }

  componentWillMount(){
    var token = localStorage.getItem("tokenib");
    this.state.token = token;
  }

  async submitHandle(event){
    event.preventDefault();
    this.props.history.push({pathname: "/productsearch"});
  }

  render() {
    return (
      <div>
        <Header logado={extraFunctions.checklogin(this.state.token)}/>
		    {extraFunctions.redirectNotLoged(this.state.token)}
        <div className="wrapper">
			    <div className="page-header confirmedInterest-background">
          <div className="filter"></div>
            <div className="container z-1 pt-50">
              <div className="row text-center">
                <div className="col-12">
                  <h2 className="mb-2">Obrigado!</h2>
                  <h2>Entraremos em contato</h2>
                  <h1><i className="fa fa-check fa-3x w-inherit"></i></h1>
                  <h4>ou você pode enviar<br/>uma mensagem para <br/> contato@institutoberaca.org</h4>
                  <div className="notification_div">
                    <i className="material-icons check">check</i>
                    <p>Receber notificações sobre atualizações de projetos</p>
                  </div>
                </div>
                <button onClick={(event) => {this.submitHandle(event)}} className="btn btn-danger btn-block btn-round btn-interest">Voltar</button>
              </div>
            </div>
			    </div>
		    </div>
      </div>
    );
  }
}


