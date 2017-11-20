import React, { Component } from 'react';

export default class Header extends Component {
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
    event.preventDefault();
  }

  render() {
      let list = null;
      if(this.props.logado){
        list =  <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="#" class="nav-link"><i class="nc-icon nc-layout-11"></i>Repartir</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" target="" class="nav-link"><i class="nc-icon nc-ruler-pencil"></i>Projetos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" target=""><i class="nc-icon nc-shop"></i>Comunidades</a>
					    </li>
                        <li class="nav-item">
                            <a class="nav-link" rel="tooltip" title="Perfil" data-placement="bottom" href="#" target="">
                                <i class="nc-icon nc-badge"></i>
                                <p class="d-lg-none">Meu Perfil</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" rel="tooltip" title="Perfil" data-placement="bottom" href="http://www.institutoberaca.org" target="_blank">
                                <i class="nc-icon nc-alert-circle-i"></i>
                                <p class="d-lg-none">Saiba Mais</p>
                            </a>
                        </li>
                    </ul>
                </div>
      }
      else{
        list =  <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav ml-auto">
					<li className="nav-item">
                        <a href="/login" className="nav-link"><i className="nc-icon nc-touch-id"></i>Login</a>
                    </li>
                    <li className="nav-item">
                        <a href="register.html" target="" className="nav-link"><i className="nc-icon nc-trophy"></i>Criar conta</a>
                    </li>
                    </ul>
                </div>
      }
    return (
        <div className="row">
            <div className="col-md-12 m-h-0">
                <nav className="navbar navbar-expand-md fixed-top navbar-transparent" color-on-scroll="150">
                    <div className="container">
                        <div className="navbar-translate">
                            <button className="navbar-toggler navbar-toggler-right navbar-burger" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-bar"></span>
                                <span className="navbar-toggler-bar"></span>
                                <span className="navbar-toggler-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/landing"><i className="icon nc-icon nc-air-baloon"></i> IBCommunity</a>
                        </div>
                        {list}

                    </div>
                </nav>
            </div>
        </div>
    );
  }
}


