import React, { Component } from 'react';
import Header from "../mainComponents/Header.jsx";
import requests from "../functions/requests.js";

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
        <Header/>
        <div class="wrapper">
			    <div class="page-header">
            <h1>{this.state.project.community}</h1>
			    </div>
		    </div>
      </div>
    );
  }
}


