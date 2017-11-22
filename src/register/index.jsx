import React, { Component } from 'react';
import Header from "../mainComponents/Header.jsx";
import requests from "../functions/requests.js";

export default class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
        name: "moabe",
        email: "sonic@moabe.com",
        nascimento: "",
        password: "moabe124",
        passwordConfirm: "moabe124",
    }
    this._register = this._register.bind(this);
  }

  _register(event,nome,email,password,passwordConfirm){
    if(password == passwordConfirm){
        requests.register(nome,email,password);
    }
    else{
        console.log("password nao bate");
    }
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="wrapper">
            <div className="page-header login-background">
                <div className="filter"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 ml-auto mr-auto">
                            <div className="card card-register">
                            <h1>New Account</h1>
                            <form className="register-form mt-5" onSubmit={(event) => {this._register(event,this.state.name,this.state.email,this.state.password,this.state.passwordConfirm);}}>
                                <div className="input-group mb-2">
                                    <span className="input-group-addon"><i className="mr-1 fa fa-user-o"></i></span>
                                    <input type="text" className="form-control pull-right" placeholder="Nome" onChange={(e)=>{this.setState({name: e.target.value})}}/>
                                </div>
                                <div className="input-group mb-2">
                                    <span className="input-group-addon"><i className="mr-1 fa fa-envelope-o"></i></span>
                                    <input type="email" className="form-control pull-right" placeholder="Email" onChange={(e)=>{this.setState({email: e.target.value})}}/>
                                </div>
                                <div className="input-group mb-2">
                                    <span className="input-group-addon"><i className="mr-1 fa fa-lock"></i></span>
                                    <input type="password" className="form-control pull-right" placeholder="Nova senha" onChange={(e)=>{this.setState({password: e.target.value})}}/>
                                </div>
                                <div className="input-group mb-2">
                                    <span className="input-group-addon"><i className="mr-1 fa fa-lock"></i></span>
                                    <input type="password" className="form-control pull-right" placeholder="Repetir senha" onChange={(e)=>{this.setState({passwordConfirm: e.target.value})}}/>
                                </div>
                                <button className="btn btn-danger btn-block btn-round">Creat</button>
                            </form>
                            <div className="forgot"> 
                                <a href="#" className="btn btn-link btn-neutral">Concordo com os termos de uso!</a>
                            </div>
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


