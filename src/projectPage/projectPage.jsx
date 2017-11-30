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
    var res = requests.projectRequestSupport(this.state.token, this.props.location.state.project.id);
    this.props.history.push({pathname: "/confirmedInterest"});
  }

  render() {
    return (
      <div>
        <Header logado={extraFunctions.checklogin(this.state.token)}/>
		    {extraFunctions.redirectNotLoged(this.state.token)}
        <div className="wrapper">
			    <div id="search-div" className="page-header search-background">
          <div className="filter"></div>
            <div className="container mt-70 z-1">
              <div className="row ml-30">
                <div className="col-12">
                  <h1 className="mb-20">{this.state.project.name}</h1>
                </div>
                <div className="descriptions_block">
                  <div className="col-12 objective_div">
                    <h3 className="ft-w-500 mt-0">1</h3>
                    <div className="ml-30">	
                      <h4>Objetivo</h4>
                      <p className="desciption_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                  <div className="col-12 objective_div">
                    <h3 className="ft-w-500 mt-0">2</h3>
                    <div className="ml-30">	
                      <h4>Justificativa</h4>
                      <p className="desciption_text">Nunc gravida tellus non enim accumsan, a condimentum mauris dapibus. Nulla tempor dignissim sem eu pellentesque. Nulla tempor est ut luctus gravida. Cras feugiat faucibus dictum.</p>
                    </div>
                  </div>
                  <div className="col-12 objective_div">
                    <h3 className="ft-w-500 mt-0">3</h3>
                    <div className="ml-30">	
                      <h4>Custos</h4>
                      <p className="desciption_text">Cras viverra enim eget mauris efficitur viverra.</p>
                    </div>
                  </div>
                  <div className="col-12 objective_div">
                    <h3 className="ft-w-500 mt-0">4</h3>
                    <div className="ml-30">	
                      <h4>Cras</h4>
                      <p className="desciption_text">Curabitur hendrerit erat felis, sed pellentesque turpis efficitur nec. Fusce cursus blandit dui eget pulvinar. Donec sed nisi est. Ut congue dolor vel aliquam laoreet.</p>
                    </div>
                  </div>
                  <div className="col-12 objective_div">
                    <h3 className="ft-w-500 mt-0">4</h3>
                    <div className="ml-30">	
                      <h4>Cras</h4>
                      <p className="desciption_text">Curabitur hendrerit erat felis, sed pellentesque turpis efficitur nec. Fusce cursus blandit dui eget pulvinar. Donec sed nisi est. Ut congue dolor vel aliquam laoreet.</p>
                    </div>
                  </div>
                  <div className="col-12 objective_div">
                    <h3 className="ft-w-500 mt-0">6</h3>
                    <div className="ml-30">	
                      <h4>Cras</h4>
                      <p className="desciption_text">Curabitur hendrerit erat felis, sed pellentesque turpis efficitur nec. Fusce cursus blandit dui eget pulvinar. Donec sed nisi est. Ut congue dolor vel aliquam laoreet.</p>
                    </div>
                  </div>
                  <div className="col-12 objective_div">
                    <h3 className="ft-w-500 mt-0">6</h3>
                    <div className="ml-30">	
                      <h4>Cras</h4>
                      <p className="desciption_text">Curabitur hendrerit erat felis, sed pellentesque turpis efficitur nec. Fusce cursus blandit dui eget pulvinar. Donec sed nisi est. Ut congue dolor vel aliquam laoreet.</p>
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={(event) => {this.submitHandle(event)}} className="btn btn-danger btn-block btn-round btn-interest">Tenho interesse nesse projeto</button>
            </div>
			    </div>
		    </div>
      </div>
    );
  }
}


