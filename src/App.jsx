import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Switch , Route } from 'react-router-dom'
import  registerServiceWorker  from "./registerServiceWorker";
import './App.css';
import Login from "./login";
import Register from "./register";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      login: "login"
    }
  }

  _teste(){
    this.props.history.push({pathname: "/welcome", state:{name: "moabe"}});
  }

  render() {
    return (
      <div>
        <h1 onClick={() => {this._teste()}}>moabe</h1>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    return(
      <div>
        <h1>Welcome {this.props.location.state.name}</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route exact path= "/" component={App} />
        <Route path= "/welcome" component={Welcome} />
        <Route exact path= "/login" component={Login} />
        <Route exact path= "/register" component={Register} />
    </Switch>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
