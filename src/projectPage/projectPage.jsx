import React, { Component } from 'react';
import Header from "../mainComponents/Header.jsx";
import requests from "../functions/requests.js";
import extraFunctions from "../functions/extraFunctions";


export default class ProjectPage extends Component {
  constructor(props){
    super(props);
    this.state = {
        project: "",
        token: ""
    }
  }

  componentWillMount(){
    var token = localStorage.getItem("tokenib");
    this.state.token = token;
    this.setState({project: this.props.location.state.project});
  }

  async submitHandle(event){
    event.preventDefault();
    var res = requests.projectRequestSupport(this.state.token, this.props.location.state.project.id) 
  }

  render() {
    return (
      <div>
        <Header logado={extraFunctions.checklogin(this.state.token)}/>
		    {extraFunctions.redirectNotLoged(this.state.token)}
        <div className="wrapper">
			    <div className="page-header">
            <h1>{this.state.project.community.name}</h1>
            <button onClick={(event) => {this.submitHandle(event)}}>Apoiar</button>
			    </div>
		    </div>
      </div>
    );
  }
}


