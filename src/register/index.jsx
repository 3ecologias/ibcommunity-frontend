import React, { Component } from 'react';
import Header from "../mainComponents/Header.jsx";

export default class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
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
                            <form className="register-form mt-5">
                                <div className="input-group mb-2">
                                    <span className="input-group-addon"><i className="mr-1 fa fa-user-o"></i></span>
                                    <input type="text" className="form-control pull-right" placeholder="Nome"/>
                                </div>
                                <div className="input-group mb-2">
                                    <span className="input-group-addon"><i className="mr-1 fa fa-envelope-o"></i></span>
                                    <input type="text" className="form-control pull-right" placeholder="Email"/>
                                </div>
                                <div className="input-group mb-2">
                                    <span className="input-group-addon"><i className="mr-1 fa fa-gift"></i></span>
                                    <input type="text" className="form-control pull-right" placeholder="Nascimento"/>
                                </div>
                                <div className="input-group mb-2">
                                    <span className="input-group-addon"><i className="mr-1 fa fa-lock"></i></span>
                                    <input type="text" className="form-control pull-right" placeholder="Nova senha"/>
                                </div>
                                <div className="input-group mb-2">
                                    <span className="input-group-addon"><i className="mr-1 fa fa-lock"></i></span>
                                    <input type="text" className="form-control pull-right" placeholder="Repetir senha"/>
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


