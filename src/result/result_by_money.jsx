import React, { Component } from 'react';
import Header from "../mainComponents/Header.jsx";
import requests from "../functions/requests.js";
import { Link } from "react-router-dom";
import extraFunctions from "../functions/extraFunctions";

export default class Resultbymoney extends Component {
  constructor(props){
    super(props);
    this.state = {
        projectsList: [],
        token: ""
    }
  }

  componentWillMount(){
    var token = localStorage.getItem("tokenib");
    this.state.token = token;
    this.setState({projectsList: this.props.location.state.projectsList});
  }

  renderProjects(){
    var renderedProjectList = this.state.projectsList.map((element) => {
        return (
        <div className="row">
            <div className="col-md-12">
                <div className="outer_product pt-20">
                    <div className="product_div">
                        <Link className="product_name" to={{pathname: "/community" , state: {project: element}}} >{element.name}</Link>
                        <p className="product_value">US$ {element.project_totals} - {element.community.name}</p>
                    </div>
                    <div className="plus_div">
                    <Link className="product_name" to={{pathname: "/community" , state: {project: element}}} ><i className="fa fa-plus" aria-hidden="true"></i></Link>
                    </div>
                </div>
            </div>
        </div>);
    })
    return renderedProjectList;
  }

  render() {
    return (
      <div>
        <Header logado={extraFunctions.checklogin(this.state.token)}/>
		{extraFunctions.redirectNotLoged(this.state.token)}
        <div className="wrapper">
			<div className="page-header search-background">
            <div className="filter"></div>
				<div className="container ph-30 z-1">
					<div className="row first_row">
                        <div className="col-md-12">
							<h2 className="title_text mb-10">{this.props.location.state.productName}</h2>
                            <small className="value_text pt-10">Exibindo resultados menor ou igual a </small>
							<h5 className="main_value mb-0">US$ {this.props.location.state.valor}</h5>
						</div>
					</div>
                    {this.renderProjects()}			
				</div>
			</div>
		</div>
      </div>
    );
  }
}


