import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      login: "",
      password: ""
    }
  }

  _logout(event){
      event.preventDefault();
      localStorage.removeItem("tokenib");
      this.props.history.push({pathname: "/"});
      window.location.reload();
  }

  render() {
      let list = null;
      if(this.props.logado){
        list =  <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav ml-auto">
                        {/*<li className="nav-item">
                            <a href="/productsearch" className="nav-link"><i className="nc-icon nc-layout-11"></i>Repartir</a>
                        </li>*/}
                        <li className="nav-item">
                            <a href="/projects" target="" className="nav-link"><i className="nc-icon nc-ruler-pencil"></i>Projetos</a>
                        </li>
                        {/*<li className="nav-item">
                            <a className="nav-link" href="#" target=""><i className="nc-icon nc-shop"></i>Comunidades</a>
					    </li>
                        <li className="nav-item">
                            <a className="nav-link" rel="tooltip" title="Perfil" data-placement="bottom" href="#" target="">
                                <i className="nc-icon nc-badge"></i>
                                <p className="d-lg-none">Meu Perfil</p>
                            </a>
                        </li>*/}
                        {/*<li className="nav-item">
                            <a className="nav-link" rel="tooltip" title="Perfil" data-placement="bottom" href="http://www.institutoberaca.org" target="_blank" rel="noopener noreferrer">
                                <i className="nc-icon nc-alert-circle-i"></i>
                                <p className="d-lg-none">Saiba Mais</p>
                            </a>
                        </li>*/}
                        <li className="nav-item">
                            <a href="/" onClick={(event) => {this._logout(event)}} target="" className="nav-link"><i className="icon ion-log-out t-0"></i>Sair</a>
                        </li>
                    </ul>
                </div>
      }
      else{
        list =  <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav ml-auto">
					          {/*<li className="nav-item">
                        <a href="/login" className="nav-link"><i className="nc-icon nc-touch-id"></i>Login</a>
                    </li>*/}
                    {/*<li className="nav-item">
                        <a href="/register" target="" className="nav-link"><i className="nc-icon nc-trophy"></i>Entre em contato</a>
                    </li>*/}
                    </ul>
                </div>
      }
    return (
        <div className="row">
            <div className="col-md-12 m-h-0">
                <nav className="navbar navbar-expand-md fixed-top navbar-transparent" color-on-scroll="20">
                    <div className="container">
                        <div className="navbar-translate">
                            <button className="navbar-toggler navbar-toggler-right navbar-burger" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-bar"></span>
                                <span className="navbar-toggler-bar"></span>
                                <span className="navbar-toggler-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/"> <img className="App-logo" src="http://institutoberaca.org/static/images/logo-beraca.svg" alt=""/> </a>
                        </div>
                        {list}
                    </div>
                </nav>
            </div>
        </div>
    );
  }
}
