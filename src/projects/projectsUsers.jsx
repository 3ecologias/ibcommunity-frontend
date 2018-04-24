import React, { Component } from 'react';
import Header from "../mainComponents/Header.jsx";
import { Link } from "react-router-dom";
import extraFunctions from "../functions/extraFunctions";
import requests from "../functions/requests.js";

export default class ProjectUser extends Component {
  constructor(props){
    super(props);
    this.state = {
        projectsList: [],
        token: ""
    }
  }

  async componentWillMount(){
    var token = localStorage.getItem("tokenib");
    var id = localStorage.getItem("userid");
    this.state.token = token;
    this.state.id = id;
    //fazer requisição para pegar a lista de projetos por usuario
    //setar no state this.state.projectsList a lista retornada
    var projects_list = await requests.userInfos(token,id);
    this.setState({projectsList: projects_list.data.projects});

  }

  //Passando todas as categorias, ele vai concatenar numa string e retornar
  categoriesRender(categories){
    var categoriesString = ""
    categories.forEach(function(category) {
      categoriesString = categoriesString + " " + category.name;
    });
    return categoriesString;
  }

  renderProjects(){
    var renderedProjectList = this.state.projectsList.map((element) => {
        return (
        <div className="row">
            <div className="col-md-12">
                <div className="outer_product pt-20">
                    <div className="product_div">
                        <Link className="product_name" to={{pathname: "/community" , state: {project: element}}} >{element.name}</Link>
                        <p className="product_value">R$ {element.project_totals} - {this.categoriesRender(element.category)}</p>
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
            <h2 className="title_text mb-10">Projetos disponiveis</h2>
            <h5 className="mt-10">Selecione um projeto para repartir benefícios</h5>
          </div>
          )
      }
      else{
       var content = (
        <div className="col-md-12">
            <h2 className="mt-10">Nossa base de dados não contem nenhum projeto cadastrado</h2>
            <button className="btn btn-danger btn-block btn-round btn-interest mt-10" onClick={() => {this.props.history.push({pathname: "/login"})}}>Voltar</button>
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
                        <a onClick={() => {this.props.history.push({pathname: "/projects"})}} href="">
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
