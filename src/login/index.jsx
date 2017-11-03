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
        <div className="container mt-200">
          <div className="row">
            <div className="col-md-12">
              <form className="text-center" onSubmit={(event) => {this._login(event,this.state.login,this.state.password)}}>
                <div className="form-group">
                  <label>
                    Login:
                    <input type="text" className="form-control" onChange={(event) => {this.setState({login: event.target.value})}} id=""/>
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    Password:
                    <input type="password" className="form-control" onChange={(event) => {this.setState({password: event.target.value})}} />
                  </label>
                </div>
                <div>
                  <button type="submit" className="btn btn-info">Logar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


