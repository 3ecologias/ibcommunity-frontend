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
              <a href="/register"><button type="button" class="btn btn-outline-neutral btn-round disabled mr-3" data-placement="bottom">Cadastre-se</button></a>
              <a class="btn btn-outline-danger btn-round smooth-scroll scroll-down-anim" href="#detail">Saiba mais</a>
            </div>
          </div>
        </div>
        
        <div class="main">
        <div id="detail" class="section">
          <div class="container">
            <div class="row justify-center">
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
            <div class="container-fluid">
              <div class="scene-city img-scene">
                <img src="assets/img/infographic-svg/city.svg" alt=""/>
              </div>
              <div class="row justify-center">
                <div class="col-xs-12 col-sm-12 col-lg-6 mt-6-em text-center">
                  <div class="scene-entrepreneur img-scene">
                    <img src="assets/img/infographic-svg/entrepreneur3.svg" alt=""/>
                    <img src="assets/img/infographic-svg/entrepreneur4.svg" alt=""/>
                    <img src="assets/img/infographic-svg/entrepreneur2.svg" alt=""/>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-8 col-lg-6 mt-6-em text-center">
                  <div class="scene-text-reparte-1 img-scene">
                    <span class="title txt-white text-center">ReparteBR localiza projetos de alto impacto socioambiental </span>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-8 col-lg-6 col-xl-6 mt-6-em">
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
                <div class="col-xs-12 col-sm-8 col-lg-6 mt-6-em scene-text-reparte-2 text-center">
                  <div class="img-scene"/>
                    <span class="title txt-white text-center">Através de planejamento participativo em comunidades com conhecimento tradicional associado. </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        
        <div id="ibcommunity-sytem" class="section">
          <div class="container-fluid">
            <div class="row justify-center">
              <div class="scene-background-purple">
                  <img src="assets/img/infographic-svg/bg-part-5.svg"/>
              </div>
              <div class="scene-genetic img-scene" id="genetic">
                <img src="assets/img/infographic-svg/genetic.svg"/>
              </div>
              <div class="col-xs-12 col-sm-8 col-lg-10 text-center inner-ibcommunity-sytem">
                <div class="scene-text-reparte-3 img-scene">
                  <span class="title text-center">Está conectado ao IBCommunity, um banco de projetos e comunidades do Instituto Beraca com informações sobre a sociobiodiversidade brasileira.</span>
                </div>
                <div class="scene-ibcommunity-states img-scene">
                  <span class="subtitle"> 12 Estados </span>
                  <img src="assets/img/infographic-svg/ib-community-states.svg"/>
                </div>
                <div class="scene-ibcommunity-communities img-scene">
                  <span class="subtitle"> 105 Comunidades </span>
                  <img src="assets/img/infographic-svg/ibcommunity-communities.svg"/>
                </div>
                <div class="scene-ibcommunity-families img-scene">
                  <span class="subtitle"> 2500 Famílias </span>
                  <img src="assets/img/infographic-svg/ibcommunity-families.svg"/>
                </div>
              </div>
            </div>  
          </div>
        </div>

        <div id="ibcommunity-groups" class="section bg-groups">
          <div class="main">
            <div class="scene-background-blue">
              <img src="assets/img/infographic-svg/bg-part-3.svg"/>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-xs-12 col-sm-12">
                  <div class="col-xs-3 avatar-people">
                    <img class="img-responsive" src="assets/img/infographic-svg/people-1.svg"/>
                    <img class="img-responsive avatar-big" src="assets/img/infographic-svg/people13.svg"/>
                    <img class="img-responsive" src="assets/img/infographic-svg/people3.svg"/>
                  </div>
                  <div class="scene-text-reparte-4 text-center">
                    <span class="title txt-white text-center">Dialoga com diferentes comunidades tradicionais/CTAs</span>
                  </div>
                  <div class="col-xs-3 avatar-people">
                    <img class="img-responsive avatar-big" src="assets/img/infographic-svg/people4.svg"/>
                    <img class="img-responsive" src="assets/img/infographic-svg/people5.svg"/>
                    <img class="img-responsive" src="assets/img/infographic-svg/people6.svg"/>
                  </div>
                  <div class="scene-text-reparte-4 text-center">
                    <span class="title txt-white text-center">composta por indígenas, ribeirinhos</span>
                  </div>
                  <div class="col-xs-3 avatar-people">
                    <img class="img-responsive" src="assets/img/infographic-svg/people7.svg"/>
                    <img class="img-responsive" src="assets/img/infographic-svg/people8.svg"/>
                    <img class="img-responsive avatar-big" src="assets/img/infographic-svg/people9.svg"/>
                  </div>
                  <div class="scene-text-reparte-4 text-center">
                    <span class="title txt-white text-center">quilombolas e agricultores assentados.</span>
                  </div>
                  <div class="col-xs-3 avatar-people last-avatar-people">
                    <img class="img-responsive" src="assets/img/infographic-svg/people10.svg"/>
                    <img class="img-responsive avatar-big" src="assets/img/infographic-svg/people11.svg"/>
                    <img class="img-responsive" src="assets/img/infographic-svg/people12.svg"/>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div id="ibcommunity-projects" class="section bg-projects">
          <div class="main">
          <div class="scene-eolic img-scene">
              <img src="assets/img/infographic-svg/eolic.svg"/>
            </div>
            <div class="scene-background-violet">
              <img src="assets/img/infographic-svg/bg-part-4.svg"/>
            </div>
          </div>
          <div class="container-fluid">
            <div class="row">
              <div class="col-xs-12 col-sm-12 p-0">
                <div class="col-xs-3 scene-cloud">
                  <img class="img-responsive" src="assets/img/infographic-svg/cloud1.svg"/>
                  <img class="img-responsive" src="assets/img/infographic-svg/cloud1.svg"/>
                </div>
                <div class="col-xs-12 col-sm-8 col-lg-6 scene-text-reparte-5 text-center">
                  <span class="title txt-white text-center">Possibilita a repartição de benefícios em áreas estratégicas</span>
                </div>
                <div class="col-xs-3 scene-itens" >
                  <img class="scene-ground-tree" src="assets/img/infographic-svg/tree2.svg"/>
                  <img class="scene-ground-solar" src="assets/img/infographic-svg/solar-panel.svg"/>
                </div>
                <div class="col-xs-3 scene-windmill-an">
                  <img src="assets/img/infographic-svg/windmill-animate.svg"/>
                </div>
                <div class="col-xs-3 scene-windmill">
                  <img src="assets/img/infographic-svg/windmill-base.svg"/>
                </div>
                <div class="scene-ground-top">
                  <img className="img-fluid" src="assets/img/infographic-svg/drawing.svg"/>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div id="ibcommunity-howto" class="section bg-howto">
          <div class="main">
            <div class="scene-background-rose">
              <img className="img-fluid" src="assets/img/infographic-svg/bg-part-5.svg"/>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-12">
                <div class="scene-text-reparte-6 text-center">
                  <span class="title-big text-center">Como funciona?</span>
                </div>
              </div>
              <div class="col-xs-12 col-sm-12">
                <div class="scene-how-it-works">
                  <img src="assets/img/infographic-svg/how-it-works.svg"/>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6">
                <div class="scene-text-reparte-7 text-center mt-4">
                  <div class="text-center">
                    <img src="assets/img/infographic-svg/topic-blue.svg" alt=""/>
                  </div>
                  <span class="subtitle"> Auxilia no Conhecimento Prévio Fundamentado (PIC) e no Termo de Acordo Mútuo (MAT).</span>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6">
                <div class="scene-text-reparte-8 text-center mt-4">
                  <div class="text-center">
                    <img src="assets/img/infographic-svg/topic-yellow.svg" alt=""/>
                  </div>
                  <span class="subtitle"> Localiza projetos em comunidades com Conhecimento Tradicional Associado (CTA).</span>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6">
                <div class="scene-text-reparte-9 text-center mt-4">
                  <div class="text-center">
                    <img src="assets/img/infographic-svg/topic-orange.svg" alt=""/>
                  </div>
                  <span class="subtitle"> Organiza o escopo do projeto e o seu plano de ação.</span>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6">
                <div class="scene-text-reparte-10 text-center mt-4">
                  <div class="text-center">
                    <img src="assets/img/infographic-svg/topic-gray.svg" alt=""/>
                  </div>
                  <span class="subtitle"> Executa o plano de ação e participa do projeto na comunidade.</span>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6">
                <div class="scene-text-reparte-11 text-center mt-4">
                  <div class="text-center">
                    <img src="assets/img/infographic-svg/topic-carmine.svg" alt=""/>
                  </div>
                  <span class="subtitle"> Monitora os projetos na comunidade através de relatórios analíticos.</span>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6">
                <div class="scene-text-reparte-12 text-center mt-4">
                  <div class="text-center">
                    <img src="assets/img/infographic-svg/topic-light-blue.svg" alt=""/>
                  </div>
                  <span class="subtitle"> Avalia a execução do projeto e realiza apresentação de resultados</span>
                </div>
              </div>
              </div>
            </div>
          </div>

        <div id="ibcommunity-invest" class="section bg-invest">
          <div class="main">
            <div class="scene-background-darkblue">
              <img src="assets/img/infographic-svg/bg-part-6.svg"/>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-12 mb-40">
                <div class="scene-invest-title text-center">
                    <span class="title-big text-center text-white">Investimento</span>
                </div>
              </div>
              <div class="col-xs-12 col-sm-7 scene-invest">
                <div class="scene-investment text-center mt-4">
                  <img src="assets/img/infographic-svg/investment.svg"/>
                </div>
              </div>
              <div class="col-xs-12 col-sm-5 investment-topics">
                <div class="scene-text-reparte-13 text-center mt-4">
                  <div class="text-center">
                    <img src="assets/img/infographic-svg/topic-dark-orange.svg" alt=""/>
                  </div>
                  <span class="subtitle text-white"> Acordo de repartição de benefícios para projetos não-monetários.</span>
                </div>
                <div class="scene-text-reparte-14 text-center mt-4">
                  <div class="text-center">
                    <img src="assets/img/infographic-svg/topic-yellow.svg" alt=""/>
                  </div>
                  <span class="subtitle text-white"> Conhecimento tradicional associado de origem identificável.</span>
                </div>
                <div class="scene-text-reparte-15 text-center mt-4">
                  <div class="text-center">
                    <img src="assets/img/infographic-svg/topic-orange.svg" alt=""/>
                  </div>
                  <span class="subtitle text-white"> Custos administrativos da repartição de benefícios.</span>
                </div>
              </div>
                <div class="scene-sign-in text-center">
                <a href="/register"><button type="button" class="btn btn-outline-neutral btn-round disabled mr-3" data-placement="bottom">Cadastre-se</button></a>
                </div>
            </div>
          </div>
        </div>

        <div class="section landing-section">
          <div class="container">
            <div class="row">
              <div class="col-md-8 ml-auto mr-auto">
                <h2 id="txt-gray" class="text-center">Quer conhecer mais? <br/>Vamos conversar!</h2>
                <form class="contact-form">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="input-group mb-2">
                        <span class="input-group-addon">
                          <i class="nc-icon nc-single-02"></i>
                        </span>
                        <input type="text" class="form-control" placeholder="Seu nome"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-group mb-2">
                        <span class="input-group-addon">
                          <i class="nc-icon nc-briefcase-24"></i>
                        </span>
                        <input type="text" class="form-control" placeholder="Instituição que representa"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-group mb-2">
                        <span class="input-group-addon">
                          <i class="nc-icon nc-email-85"></i>
                        </span>
                        <input type="text" class="form-control" placeholder="Seu email"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-group mb-2">
                        <span class="input-group-addon">
                          <i class="nc-icon nc-mobile"></i>
                        </span>
                        <input type="text" class="form-control" placeholder="Seu telefone"/>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <textarea class="form-control mb-2" rows="4" placeholder="Escreva aqui seus pensamentos, sentimentos e questões ..."></textarea>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 col-sm-6">
                      <div class="form-check">
                        <label id="txt-gray" class="form-check-label">
                          <input class="form-check-input" type="checkbox" value=""/>
                          Possui PIC
                          <span class="form-check-sign"></span>
                        </label>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <div class="form-check">
                        <label id="txt-gray" class="form-check-label">
                          <input class="form-check-input" type="checkbox" value="" checked/>
                          Possui MAT
                          <span class="form-check-sign"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 ml-auto mr-auto text-center">
                      <button class="btn btn-danger btn-lg btn-fill">Enviar mensagem</button>
                    </div>
                  </div>
                </form>
                <div class="row mt-5">
                  <div class="col-md-6 ml-auto mr-auto text-center">
                    <a href="http://www.facebook.com/institutoberaca" target="_blank" class="btn btn-link btn-danger"><i class="fa fa-2x fa-facebook"></i></a>
                    <a href="http://www.instagram.com/institutoberaca" target="_blank" class="btn btn-link btn-danger"><i class="fa fa-2x fa-instagram"></i></a>
                  </div>
                </div>
                <div class="row mt-5">
                  <div class="col-md-6 ml-auto mr-auto text-center">
                    <a href="http://www.institutoberaca.org" target="_blank" class="btn btn-link btn-danger"><img src="assets/img/logo-beraca.svg" width="78" height="36" alt="Instituto Beraca"/></a>
                  </div>
                </div>
              </div>
            </div>
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


