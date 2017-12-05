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
    console.log(this.props.location.state.project);
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
      var imageTag = (<div class={active}>
                        <a href={imagem.image} target="_blank"><img class="d-block img-fluid" src={imagem.image} alt="First slide"/></a>
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
                <div className="descriptions_block" id="style-1">
                  <div className="col-12 objective_div">
                    <h3 className="ft-w-500 mt-0">1</h3>
                    <div className="ml-30">	
                      <h4>Área de atuação</h4>
                      <p className="desciption_text">{this.state.project.target_area}</p>
                    </div>
                  </div>
                  <div className="col-12 objective_div">
                    <h3 className="ft-w-500 mt-0">2</h3>
                    <div className="ml-30">	
                      <h4>Tema</h4>
                      <p className="desciption_text">{this.state.project.theme_description}</p>
                    </div>
                  </div>
                  <div className="col-12 objective_div">
                    <h3 className="ft-w-500 mt-0">3</h3>
                    <div className="ml-30">	
                      <h4>Objetivos</h4>
                      <p className="desciption_text">{this.state.project.goals}</p>
                    </div>
                  </div>
                  <div className="col-12 objective_div">
                    <h3 className="ft-w-500 mt-0">4</h3>
                    <div className="ml-30">	
                      <h4>Objetivos especificos</h4>
                      <p className="desciption_text">{this.state.project.specific_goals}</p>
                    </div>
                  </div>
                  <div className="col-12 objective_div">
                    <h3 className="ft-w-500 mt-0">5</h3>
                    <div className="ml-30">	
                      <h4>Atividades a serem desenvolvidas</h4>
                      <p className="desciption_text">{this.state.project.activities}</p>
                    </div>
                  </div>
                  <div className="col-12 objective_div">
                    <h3 className="ft-w-500 mt-0">6</h3>
                    <div className="ml-30">	
                      <h4>Resultados esperados</h4>
                      <p className="desciption_text">{this.state.project.results}</p>
                    </div>
                  </div>
                  <div className="col-12 objective_div">
                    <h3 className="ft-w-500 mt-0">7</h3>
                    <div className="ml-30">	
                      <h4>Cronograma</h4>
                      <a className="desciption_text" href={this.state.project.schedule}>Baixar PDF</a>
                    </div>
                  </div>
                  <div className="col-12 objective_div">
                    <h3 className="ft-w-500 mt-0">8</h3>
                    <div className="ml-30">	
                      <h4>Valores</h4>
                      <p className="desciption_text">Valor do projeto: <br/> US$ {this.state.project.project_totals} <br/><br/> Custos administrativos: <br/> {this.state.project.taxes}%</p>
                    </div>
                  </div>
                  <div className="col-12 objective_div">
                    <h3 className="ft-w-500 mt-0">9</h3>
                    <div className="ml-30">	
                      <h4>Visão de futuro</h4>
                      <p className="desciption_text">{this.state.project.future_vision}</p>
                    </div>
                  </div>
                  <div className="col-12 objective_div">
                    <h3 className="ft-w-500 mt-0">10</h3>
                    <div className="ml-30">	
                      <h4>Categorias</h4>
                      <p className="desciption_text">{this.categoriesRender(this.state.project.category)}</p>
                    </div>
                  </div>
                  <div className="col-12 objective_div">
                    <h3 className="ft-w-500 mt-0">11</h3>
                    <div className="ml-30">	
                      <h4>Imagens</h4>
                      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel" data-interval="1000">
                        <div class="carousel-inner" role="listbox">
                          {this.imagesRender(this.state.project.images)}
                          <a class="carousel-control-prev" href="#carouselExampleSlidesOnly" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                          </a>
                          <a class="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                          </a>
                        </div>
                      </div>
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


