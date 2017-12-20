import React, { Component } from 'react';
import Header from "../mainComponents/Header.jsx";
import requests from "../functions/requests.js";

export default class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
        name: "",
        email: "",
        nascimento: "",
        password: "",
        passwordConfirm: "",
        checkBoxStatus: false,
        error_messages: {login: "", email: "", passwordConfirm: ""}
    }
    this._register = this._register.bind(this);
  }

  async _register(event,nome,email,password,passwordConfirm,checkBoxStatus){
    event.preventDefault();
    if(!checkBoxStatus){
        console.log("moabe");
        this.setState({error_messages: {passwordConfirm: "É necessario concordar com os termos de uso"}})
    }
    else if(password && password === passwordConfirm && checkBoxStatus){
        var res = await requests.register(nome,email,password);
        if(res.status === 201){
            this.props.history.push({pathname: "/waitconfirm"});
        }
        else if(res.status === 400){
            this.setState({error_messages: {passwordConfirm: "Usuario já existe"}});
        }
    }
    else{
        this.setState({error_messages: {passwordConfirm: "Repetiu a senha errado"}})
    }
  }

  _checkBoxHandler(){
    var checkBoxStatus = this.state.checkBoxStatus;
    this.setState({checkBoxStatus: !checkBoxStatus});
  }

  render() {
    return (
        <div>
            <Header logado={false}/>
            <div className="wrapper">
                <div className="page-header login-background">
                    <div className="filter"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 ml-auto mr-auto">
                                <div className="card card-register ml-auto mr-auto pt-80-340">
                                    <h1>Nova Conta</h1>
                                    <form className="register-form mt-5" onSubmit={(event) => {this._register(event,this.state.name,this.state.email,this.state.password,this.state.passwordConfirm,this.state.checkBoxStatus);}}>
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="mr-1 fa fa-user-o"></i></span>
                                            <input type="text" className="form-control pull-right" placeholder="Login" onChange={(e)=>{this.setState({name: e.target.value})}} required/>
                                        </div>
                                            <small className="text-danger ml-2 mt-1">{this.state.error_messages.login}</small>
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="mr-1 fa fa-envelope-o"></i></span>
                                            <input type="email" className="form-control pull-right" placeholder="Email" onChange={(e)=>{this.setState({email: e.target.value})}} required/>
                                        </div>
                                            <small className="text-danger ml-2 mt-1">{this.state.error_messages.email}</small>
                                        <div className="input-group mb-3">
                                            <span className="input-group-addon"><i className="mr-1 fa fa-lock"></i></span>
                                            <input type="password" className="form-control pull-right" placeholder="Nova senha" onChange={(e)=>{this.setState({password: e.target.value})}} required/>
                                        </div>
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="mr-1 fa fa-lock"></i></span>
                                            <input type="password" className="form-control pull-right" placeholder="Repetir senha" onChange={(e)=>{this.setState({passwordConfirm: e.target.value})}} required/>
                                        </div>
                                            <small className="text-danger ml-2 mt-1">{this.state.error_messages.passwordConfirm}</small>
                                        <button className="btn btn-danger btn-block btn-round mt-10">Criar</button>
                                    </form>
                                    <div className="terms_div">
                                        <div className="checkboxFive">
                                            <input type="checkbox" name="" id="checkboxFiveInput" onClick={() => this._checkBoxHandler()}/>
                                            <label htmlFor="checkboxFiveInput"></label>
                                        </div>
                                        <a href="#" className="btn btn-link btn-neutral terms-text">Concordo com os termos de uso!</a>
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


