import React, { Component } from 'react';
import Header from "../mainComponents/Header.jsx";
import requests from "../functions/requests.js";
import extraFunctions from "../functions/extraFunctions";


export default class ProjectPage extends Component {
  constructor(props){
    super(props);
    this.state = {
        project: "",
    }
  }

  render() {
    return (
      <div>
        <Header logado={extraFunctions.checklogin(this.state.token)}/>
		    {extraFunctions.redirectNotLoged(this.state.token)}
        <div className="wrapper">
			    <div className="page-header">
            <h1>{this.state.project.community}</h1>
			    </div>
		    </div>
      </div>
    );
  }
}


