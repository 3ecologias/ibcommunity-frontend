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
    return (
        <div className="row">
            <div className="col-md-12" style={{padding: 0}}>
                <nav className="navbar navbar-expand-md fixed-top navbar-transparent" color-on-scroll="150">
                    <div className="container">
                        <div className="navbar-translate">
                            <button className="navbar-toggler navbar-toggler-right navbar-burger" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-bar"></span>
                                <span className="navbar-toggler-bar"></span>
                                <span className="navbar-toggler-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">IB Community</a>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarToggler">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a href="#" className="nav-link"><i className="nc-icon nc-layout-11"></i>Components</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" target="_blank" className="nav-link"><i className="nc-icon nc-book-bookmark"></i>  Documentation</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" rel="tooltip" title="Follow us on Twitter" data-placement="bottom" href="#" target="_blank">
                                        <i className="fa fa-twitter"></i>
                                        <p className="d-lg-none">Twitter</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" rel="tooltip" title="Like us on Facebook" data-placement="bottom" href="#" target="_blank">
                                        <i className="fa fa-facebook-square"></i>
                                        <p className="d-lg-none">Facebook</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" rel="tooltip" title="Follow us on Instagram" data-placement="bottom" href="#" target="_blank">
                                        <i className="fa fa-instagram"></i>
                                        <p className="d-lg-none">Instagram</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" rel="tooltip" title="Star on GitHub" data-placement="bottom" href="#" target="_blank">
                                        <i className="fa fa-github"></i>
                                        <p className="d-lg-none">GitHub</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
  }
}


