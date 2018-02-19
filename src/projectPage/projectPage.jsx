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

  //Passando todas as categorias, ele vai concatenar numa string e retornar
  categoriesRender(categories){
    var categoriesString = ""
    categories.forEach(function(category) {
      categoriesString = categoriesString + " " + category.name;
    });
    return categoriesString;
  }

  imagesRender(images){
    var active = "carousel-item active"
    var imagesTags = images.map((imagem) => {
      var imageTag = (<div className={active}>
                        <a href={imagem.image} target="_blank"><img className="d-block img-fluid" src={imagem.image} alt="First slide"/></a>
                      </div>);
      active = "carousel-item";
      return imageTag;
    })
    return imagesTags;
  }

  async submitHandle(event){
    event.preventDefault();
    var res = requests.projectRequestSupport(this.state.token, this.props.location.state.project.id);
    this.props.history.push({pathname: "/confirmedInterest"});
  }

  render() {
    return (
      <div>
        <Header logado={extraFunctions.checklogin(this.state.token)} history={this.props.history}/>
		    {extraFunctions.redirectNotLoged(this.state.token)}
        <div className="wrapper">
			    <div id="search-div" className="page-header search-background items-inherit">
          <div className="filter"></div>
            <div className="container mt-70 z-1">
              <div className="row fab_row">
                <a onClick={() => {this.props.history.goBack()}}>
                  <div className="fab_div">
                    <p className="fab_text">X</p>
                  </div>
                </a>
              </div>
              <div className="row ml-1">
                <div className="col-12">
                  <h2 className="mb-20">{this.state.project.name}</h2>
                <div className="descriptions_block" id="style-1">
                  <div className="objective_div">
                    <h3 className="ft-w-500 mt-0">1</h3>
                    <div className="ml-30">	
                      <h4>Área de atuação</h4>
                      <p className="desciption_text ml-1">{this.state.project.target_area}</p>
                    </div>
                  </div>
                  <div className="objective_div">
                    <h3 className="ft-w-500 mt-0">2</h3>
                    <div className="ml-30">	
                      <h4>Tema</h4>
                      <p className="desciption_text ml-1">{this.state.project.theme_description}</p>
                    </div>
                  </div>
                  <div className="objective_div">
                    <h3 className="ft-w-500 mt-0">3</h3>
                    <div className="ml-30">	
                      <h4>Objetivos</h4>
                      <p className="desciption_text ml-1">{this.state.project.goals}</p>
                    </div>
                  </div>
                  <div className="objective_div">
                    <h3 className="ft-w-500 mt-0">4</h3>
                    <div className="ml-30">	
                      <h4>Objetivos especificos</h4>
                      <p className="desciption_text ml-1">{this.state.project.specific_goals}</p>
                    </div>
                  </div>
                  <div className="objective_div">
                    <h3 className="ft-w-500 mt-0">5</h3>
                    <div className="ml-30">	
                      <h4>Atividades a serem desenvolvidas</h4>
                      <p className="desciption_text ml-1">{this.state.project.activities}</p>
                    </div>
                  </div>
                  <div className="objective_div">
                    <h3 className="ft-w-500 mt-0">6</h3>
                    <div className="ml-30">	
                      <h4>Resultados esperados</h4>
                      <p className="desciption_text ml-1">{this.state.project.results}</p>
                    </div>
                  </div>
                  <div className="objective_div">
                    <h3 className="ft-w-500 mt-0">7</h3>
                    <div className="ml-30">	
                      <h4>Cronograma</h4>
                      <a className="desciption_text ml-1" href={this.state.project.schedule}>Baixar PDF</a>
                    </div>
                  </div>
                  <div className="objective_div">
                    <h3 className="ft-w-500 mt-0">8</h3>
                    <div className="ml-30">	
                      <h4>Valores</h4>
                      <p className="desciption_text ml-1">Valor do projeto: <br/> US$ {this.state.project.project_totals} <br/><br/> Custos administrativos: <br/> {this.state.project.taxes}%</p>
                    </div>
                  </div>
                  <div className="objective_div">
                    <h3 className="ft-w-500 mt-0">9</h3>
                    <div className="ml-30">	
                      <h4>Visão de futuro</h4>
                      <p className="desciption_text ml-1">{this.state.project.future_vision}</p>
                    </div>
                  </div>
                  <div className="objective_div">
                    <h3 className="ft-w-500 mt-0">10</h3>
                    <div className="ml-30">	
                      <h4>Categorias</h4>
                      <p className="desciption_text ml-1">{this.categoriesRender(this.state.project.category)}</p>
                    </div>
                  </div>
                  <div className="carousel_div">
                    <div className="d-flex">
                      <h3 className="ft-w-500 mt-0">11</h3>
                      <h4 className="ml-30">Imagens</h4>
                    </div>
                    <div className="">
                      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="3000">
                        <div className="carousel-inner" role="listbox">
                          {this.imagesRender(this.state.project.images)}
                          <a className="carousel-control-prev" href="#carouselExampleSlidesOnly" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                          </a>
                          <a className="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <button onClick={(event) => {this.submitHandle(event)}} className="btn btn-danger btn-block btn-round btn-interest mt-20 mb-10">Tenho interesse nesse projeto</button>
            </div>
			    </div>
		    </div>
      </div>
    );
  }
}


