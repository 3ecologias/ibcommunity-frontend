import React, { Component } from 'react';
import Header from "../mainComponents/Header.jsx";
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
      if(this.state.projectsList.length > 0){
          var content = (
          <div className="col-md-12">
            <h2 className="title_text mb-10">{this.props.location.state.productName}</h2>
            <small className="value_text pt-10">Exibindo resultados menor ou igual a </small>
            <h5 className="main_value mb-0">US$ {this.props.location.state.valor}</h5>
          </div>
          )
      }
      else{
       var content = (
        <div className="col-md-12">
            <h3 className="mt-10">Nenhum projeto relacionado ao produto <strong>{this.props.location.state.productName}</strong> existe abaixo de <strong>US$ {this.props.location.state.valor}</strong></h3>
            <h5 className="mt-10">Por favor tente valores maiores para obter resultados.</h5>
            <button className="btn btn-danger btn-block btn-round btn-interest mt-300" onClick={() => {this.props.history.push({pathname: "/productsearch"})}}>Voltar</button>
        </div>)
      }
    return (
      <div>
        <Header logado={extraFunctions.checklogin(this.state.token)} history={this.props.history}/>
		{extraFunctions.redirectNotLoged(this.state.token)}
        <div className="wrapper">
			<div className="page-header search-background items-inherit">
            <div className="filter"></div>
				<div className="container ph-30 pt-70 z-1">
                    <div className="row fab_row">
                        <a onClick={() => {this.props.history.push({pathname: "/productsearch"})}} >
                        <div className="fab_div">
                            <p className="fab_text">X</p>
                        </div>
                        </a>
                    </div>
					<div className="row">
                        {content}
					</div>
                    {this.renderProjects()}			
				</div>
			</div>
		</div>
      </div>
    );
  }
}


