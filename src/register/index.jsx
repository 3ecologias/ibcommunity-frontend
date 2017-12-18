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
        err: {msg:"Algum dos campos está invalido", title: "Falha no registro", ready: false}
    }
    this._register = this._register.bind(this);
  }

  _modalOk(){
      if(this.state.err.ready){
        this.props.history.push({pathname: "/login"});
      }
  }

  _register(event,nome,email,password,passwordConfirm){
    if(password && password === passwordConfirm){
        requests.register(nome,email,password);
        this.setState({err: {msg: "Parabens, sua conta foi criada com sucesso" , title: "Registro realizado", ready: true}})
    }
    else{
        //alert("Passwords diferentes");
    }
    event.preventDefault();
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
                            <form className="register-form mt-5" onSubmit={(event) => {this._register(event,this.state.name,this.state.email,this.state.password,this.state.passwordConfirm);}}>
                                <div className="input-group mb-2">
                                    <span className="input-group-addon"><i className="mr-1 fa fa-user-o"></i></span>
                                    <input type="text" className="form-control pull-right" placeholder="Login" onChange={(e)=>{this.setState({name: e.target.value})}}/>
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
                                <button className="btn btn-danger btn-block btn-round" data-toggle="modal" data-target=".bd-example-modal-sm">Criar</button>
                            </form>
                            <div>
                                <a href="#" className="btn btn-link btn-neutral terms-text">Concordo com os termos de uso!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
        <div className="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-sm">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{this.state.err.title}</h5>
                    </div>
                    <div className="modal-body">
                        <p>{this.state.err.msg}</p>
                    </div>
                    <div className="modal-footer ml-auto mr-auto">
                        <button type="button" className="btn btn-primary" onClick={() => {this._modalOk()}} data-dismiss="modal">Ok</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}


