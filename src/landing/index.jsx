import React, { Component } from 'react';
import Header from "../mainComponents/Header.jsx";
import florestas from "./landingAssets/florestas.png";
import devlocal from "./landingAssets/devlocal.jpg";
import resultados from "./landingAssets/resultados.jpg";

export default class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      login: "",
      password: ""
    }
  }


  render() {
    return (
      <div>
        <Header logado={false}/>
        <div class="page-header sm-video-reparte" data-parallax="true">
          <div class="filter"></div>
          <div class="container">
            <div class="motto text-center">
              <h1>Encontre comunidades para repartir benefícios</h1>
              <h3>Tenha acesso a projetos de alto impacto socioambiental</h3>
              <br />
              <button type="button" class="btn btn-outline-neutral btn-round disabled mr-3" data-toggle="tooltip" data-placement="bottom" title="Aguarde, em breve... :)">Cadastre-se</button>
              <a class="btn btn-outline-danger btn-round smooth-scroll scroll-down-anim" href="#detail">Saiba mais</a>
            </div>
          </div>
        </div>
        <div class="main">
        <div id="detail" class="section">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-8 mt-4">
                <div class="s01 text-center img-scene">
                  <span class="title title-yellow"> REPARTIR BENEFÍCIOS </span>
                  <p class="resume"> garante o acesso legal a biodiversidade brasileira através da conexão entre</p>
                </div>
                <div class="s02 mt-4 img-scene">
                  <div class="text-center">
                    <img src="assets/img/infographic-svg/topic-carmine.svg" alt=""/>
                  </div>
                  <div class="text-center">
                    <span class="title title-pink"> EMPRESAS </span>
                    <p class="resume"> que realizam pesquisas e desenvolvem produtos acabados com patrimônio genético brasileiro e</p>
                  </div>
                </div>
                <div class="s03 mt-4 img-scene">
                  <div class="text-center">
                    <img src="assets/img/infographic-svg/topic-blue.svg" alt=""/>
                  </div>
                  <div class="text-center">
                    <span class="title title-blue"> COMUNIDADES </span>
                    <p class="resume"> que detem o conhecimento tradicional associado ao patrimônio genético.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="main bg-repartebr mt-110">
            <div class="container">
              <div class="row mt-20-em">
                <div class="col-xs-12 col-sm-3">
                  <div class="scene-city img-scene">
                    <img src="assets/img/infographic-svg/city.svg" alt=""/>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 text-center">
                  <div class="scene-entrepreneur img-scene">
                    <img src="assets/img/infographic-svg/entrepreneur3.svg" alt=""/>
                    <img src="assets/img/infographic-svg/entrepreneur4.svg" alt=""/>
                    <img src="assets/img/infographic-svg/entrepreneur2.svg" alt=""/>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 text-center">
                  <div class="scene-text-reparte-1 img-scene">
                    <span class="title txt-white text-center">ReparteBR localiza projetos de alto impacto socioambiental </span>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6">
                  <div class="scene-world img-scene">
                    <img src="assets/img/infographic-svg/world.svg" alt=""/>
                  </div>
                  <div class="scene-world-trace-1 img-scene">
                    <img src="assets/img/infographic-svg/world-trace-1.svg" alt=""/>
                  </div>
                  <div class="scene-world-trace-2 img-scene">
                    <img src="assets/img/infographic-svg/world-trace-2.svg" alt=""/>
                  </div>
                  <div class="scene-world-trace-3 img-scene">
                    <img src="assets/img/infographic-svg/world-trace-3.svg" alt=""/>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 text-center">
                  <div class="scene-text-reparte-2 img-scene"/>
                    <span class="title txt-white text-center">através de planejamento participativo em comunidades com conhecimento tradicional associado. </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="scene-background-purple">
              <img src="assets/img/infographic-svg/bg-part-5.svg"/>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 text-center">
            <div class="scene-genetic img-scene">
              <img src="assets/img/infographic-svg/genetic.svg"/>
            </div>
          </div>
        </div>
        <footer class="footer section-dark">
          <div class="container">
            <div class="credits ml-auto text-center">
              <span class="copyright">
                © {new Date().getFullYear()} made with <i class="fa fa-heart heart"></i> by <a href="http://3ecologias.net" target="blank">3Ecologias</a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}


