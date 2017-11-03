import React, { Component } from 'react';
import Header from "../mainComponents/Header.jsx";

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      login: "",
      password: ""
    }
    this._login = this._login.bind(this);
  }

  _login(event,login,password){
    console.log("teste" , login, password);
    this.props.history.push({pathname: "/welcome" , state:{name: "logado"}})
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
                           <h1><i className="fa fa-check fa-3x"></i></h1>
                           
                           <form className="register-form">
                            <div className="input-group mb-2">
                                <span className="input-group-addon"><i className="mr-1 fa fa-envelope-o"></i></span>
                                <input type="text" className="form-control pull-right" placeholder="Email"/>
                            </div>
                            <div className="input-group mb-2">
                                <span className="input-group-addon"><i className="mr-1 fa fa-lock"></i></span>
                                <input type="text" className="form-control pull-right" placeholder="Password"/>
                            </div>
                            <button className="btn btn-danger btn-block btn-round">Sign-in</button>
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


