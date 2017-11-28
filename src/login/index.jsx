import React, { Component } from 'react';
import Header from "../mainComponents/Header.jsx";
import requests from "../functions/requests.js";

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      login: "",
      password: "",
      token:'',
    }
    this._login = this._login.bind(this);
  }

  async _login(event, login, password){
    event.preventDefault();    
    var token = await requests.login(login, password);
    localStorage.setItem('tokenib', token.data.token);
    this.props.history.push({pathname: "/productsearch" , state:{name: "logado"}})
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="row">
        <div className="page-header login-background">
            <div className="filter"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 ml-auto mr-auto">
                        <div className="card card-register">
                           <h1><i className="fa fa-check fa-3x"></i></h1>
                           
                           <form className="register-form" onSubmit={(event) => {this._login(event,this.state.login,this.state.password)}}>
                            <div className="input-group mb-2">
                                <span className="input-group-addon"><i className="mr-1 fa fa-envelope-o"></i></span>
                                <input onChange={(event) => {this.setState({login: event.target.value})}} type="text" className="form-control pull-right" placeholder="Email"/>
                            </div>
                            <div className="input-group mb-2">
                                <span className="input-group-addon"><i className="mr-1 fa fa-lock"></i></span>
                                <input onChange={(event) => {this.setState({password: event.target.value})}} type="password" className="form-control pull-right" placeholder="Password"/>
                            </div>
                            <button className="btn btn-danger btn-block btn-round">Login</button>
                        </form>
                        <div className="forgot"> 
                            <a href="#" className="btn btn-link btn-neutral">Don´t have an account? Sign up!</a>
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


