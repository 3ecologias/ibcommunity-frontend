import React, { Component } from 'react';
import Header from "../mainComponents/Header.jsx";
import { Link } from "react-router-dom";
import extraFunctions from "../functions/extraFunctions";
import requests from "../functions/requests.js";

export default class Resultbymoney extends Component {
  constructor(props){
    super(props);
    this.state = {
        projectsList: [],
        token: ""
    }
  }

  async componentWillMount(){
    var token = localStorage.getItem("tokenib");
    this.state.token = token;
    //fazer requisição para pegar a lista de projetos
    //setar no state this.state.projectsList a lista retornada
    var projects_list = await requests.allProjects(token);
    this.setState({projectsList: projects_list.data});
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
            <h2 className="title_text mb-10">Todos os projetos disponiveis</h2>
            <h5 className="mt-10">Para filtrar melhor os projetos faça uma busca na tela inicial</h5>
          </div>
          )
      }
      else{
       var content = (
        <div className="col-md-12">
            <h2 className="mt-10">Nossa base de dados não contem nenhum projeto cadastrado</h2>
            <button className="btn btn-danger btn-block btn-round mt-10" onClick={() => {this.props.history.push({pathname: "/login"})}}>Voltar</button>
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
                        <a onClick={() => {this.props.history.push({pathname: "/productsearch"})}} href="">
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


