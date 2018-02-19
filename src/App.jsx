import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Switch , Route } from 'react-router-dom'
import  registerServiceWorker  from "./registerServiceWorker";
import './App.css';
import Login from "./login";
import Landing from "./landing";
import Register from "./register";
import waitConfirm from "./register/waitConfirm";
import Profile from "./profile";
import ProductSearch from "./search/productSearch";
import ValueSearch from "./search/valueSearch";
import EveryProject from './projects/allProjects'
import Resultbymoney from "./result/result_by_money";
import ProjectPage from "./projectPage/projectPage";
import ConfirmedInterest from "./projectPage/confirmedInterest";
import Page404 from "./mainComponents/404";

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


ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route exact path= "/" component={Landing} />
        <Route exact path= "/login" component={Login} />
        <Route exact path= "/register" component={Register} />
        <Route exact path= "/waitconfirm" component={waitConfirm} />
        <Route exact path= "/profile" component={Profile} />
        <Route exact path= "/productsearch" component={ProductSearch} />
        <Route exact path= "/valuesearch" component={ValueSearch} />
        <Route exact path= "/result" component={Resultbymoney} />
        <Route exact path= "/community" component={ProjectPage} />
        <Route exact path= "/projects" component={EveryProject} />
        <Route exact path= "/confirmedInterest" component={ConfirmedInterest} />
        <Route component={Page404} />
    </Switch>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
