import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Switch , Route } from 'react-router-dom'
import  registerServiceWorker  from "./registerServiceWorker";
import './App.css';
import Login from "./login";
import Landing from "./landing";
import Register from "./register";
import Profile from "./profile";
import Search from "./search";
import Result from "./search/result"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount(){
    let script = document.createElement("script");
    script.src = "./assets/js/mapbox.js"
    document.body.appendChild(script);
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
        <Route exact path= "/" component={Landing} />
        <Route path= "/welcome" component={Welcome} />
        <Route exact path= "/login" component={Login} />
        <Route exact path= "/register" component={Register} />
        <Route exact path= "/profile" component={Profile} />
        <Route exact path= "/search" component={Search} />
        <Route exact path= "/result" component={Result} />
    </Switch>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
