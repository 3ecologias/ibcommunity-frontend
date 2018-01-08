import React, { Component } from 'react';
import Header from "../mainComponents/Header.jsx";
import requests from "../functions/requests.js";

export default class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
        firstName: "",
        lastName: "",
        login: "",
        email: "",
        phone: "",
        cnpj: "",
        password: "",
        passwordConfirm: "",
        checkBoxStatus: false,
        error_messages: {}
    }
    this._register = this._register.bind(this);
  }

  async _register(event,firstName,lastName,login,email,phone,cnpj,password,passwordConfirm,checkBoxStatus){
    event.preventDefault();
    if(!checkBoxStatus){
        console.log("moabe");
        this.setState({error_messages: {passwordConfirm: "É necessario concordar com os termos de uso"}})
    }
    else if(password && password === passwordConfirm && checkBoxStatus){
        var res = await requests.register(firstName,lastName,login,email,phone,cnpj,password);
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
                                    <form className="register-form mt-5" onSubmit={(event) => {this._register(event,this.state.firstName,this.state.lastName,this.state.login,this.state.email,this.state.phone,this.state.cnpj,this.state.password,this.state.passwordConfirm,this.state.checkBoxStatus);}}>
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="mr-1 fa fa-user-o"></i></span>
                                            <input type="text" className="form-control pull-right" placeholder="Primeiro Nome" onChange={(e)=>{this.setState({firstName: e.target.value})}} required/>
                                        </div>
                                            <small className="text-danger ml-2 mt-1">{this.state.error_messages.firstName}</small>
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="mr-1 fa fa-user-o"></i></span>
                                            <input type="text" className="form-control pull-right" placeholder="Sobrenome" onChange={(e)=>{this.setState({lastName: e.target.value})}} required/>
                                        </div>
                                            <small className="text-danger ml-2 mt-1">{this.state.error_messages.lastName}</small>
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="mr-1 fa fa-address-card-o"></i></span>
                                            <input type="text" className="form-control pull-right" placeholder="Login" onChange={(e)=>{this.setState({login: e.target.value})}} required/>
                                        </div>
                                            <small className="text-danger ml-2 mt-1">{this.state.error_messages.login}</small>
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="mr-1 fa fa-envelope-o"></i></span>
                                            <input type="email" className="form-control pull-right" placeholder="Email" onChange={(e)=>{this.setState({email: e.target.value})}} required/>
                                        </div>
                                            <small className="text-danger ml-2 mt-1">{this.state.error_messages.email}</small>
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="mr-1 fa fa-phone"></i></span>
                                            <input type="text" className="form-control pull-right" placeholder="Telefone" onChange={(e)=>{this.setState({phone: e.target.value})}} required/>
                                        </div>
                                            <small className="text-danger ml-2 mt-1">{this.state.error_messages.phone}</small>
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="mr-1 fa fa-building-o"></i></span>
                                            <input type="text" className="form-control pull-right" placeholder="CNPJ" onChange={(e)=>{this.setState({cnpj: e.target.value})}} required/>
                                        </div>
                                            <small className="text-danger ml-2 mt-1">{this.state.error_messages.cnpj}</small>
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="mr-1 fa fa-lock"></i></span>
                                            <input type="password" className="form-control pull-right" placeholder="Senha" onChange={(e)=>{this.setState({password: e.target.value})}} required/>
                                        </div>
                                            <small className="text-danger ml-2 mt-1">{this.state.error_messages.password}</small>
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


