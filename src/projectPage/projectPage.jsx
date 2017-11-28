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

  componentWillMount(){
    this.setState({project: this.props.location.state.project});
  }

  async submitHandle(event){
    event.preventDefault();
    var token = localStorage.getItem("tokenib");    
    var res = requests.projectRequestSupport(token, this.props.location.state.project.id) 

  }

  render() {
    return (
      <div>
        <Header/>
        <div class="wrapper">
			    <div class="page-header">
            <h1>{this.state.project.community}</h1>
            <button onClick={(event) => {this.submitHandle(event)}}>Apoiar</button>
			    </div>
		    </div>
      </div>
    );
  }
}


