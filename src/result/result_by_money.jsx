import React, { Component } from 'react';
import Header from "../mainComponents/Header.jsx";
import requests from "../functions/requests.js";
import { Link } from "react-router-dom";

export default class Resultbymoney extends Component {
  constructor(props){
    super(props);
    this.state = {
        projectsList: [],
    }
  }

  componentWillMount(){
    this.setState({projectsList: this.props.location.state.projectsList});
  }

  renderProjects(){
    var renderedProjectList = this.state.projectsList.map((element) => {
        return (
        <div class="row">
            <div class="col-md-12">
                <div class="outer_product pt-20">
                    <div class="product_div">
                        <Link class="product_name" to={{pathname: "/community" , state: {project: element}}} >{element.name}</Link>
                        <p class="product_value">US$ {element.project_totals} - {element.community}</p>
                    </div>
                    <div class="plus_div">
                        <i class="fa fa-plus" aria-hidden="true"></i>
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
        <Header/>
        <div class="wrapper">
			<div class="page-header">
				<div class="container ph-30">
					<div class="row first_row">
                        <div class="col-md-12">
							<h2 class="title_text">Euterpe oleracea</h2>
							<h5 class="main_value">US$ 70.000,00</h5>
							<p class="comunity_text">Comunidade <span class="comunity_name">Bela Aurora</span></p>
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


