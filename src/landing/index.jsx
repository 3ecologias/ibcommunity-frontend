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
      password: "",
      chkbox: false
    }
  }

  //ajustar handler dos checkbox
  checkhandler(){
    this.setState({chkbox: !this.state.chkbox});
  }

  render() {
    return (
      <div>
        <Header logado={false}/>
        <div className="page-header sm-video-reparte" data-parallax="true">
          <div className="filter"></div>
          <div className="container">
            <div className="motto text-center">
              <h1>Encontre comunidades para repartir benefícios</h1>
              <h3>Tenha acesso a projetos de alto impacto socioambiental</h3>
              <br />
              <a href="/register"><button type="button" className="btn btn-outline-neutral btn-round disabled mr-3" data-placement="bottom">Cadastre-se</button></a>
              <a className="btn btn-outline-danger btn-round smooth-scroll scroll-down-anim" href="#detail">Saiba mais</a>
            </div>
          </div>
        </div>
        
        <div className="main">
        <div id="detail" className="section">
          <div className="container">
            <div className="row justify-center">
              <div className="col-xs-12 col-sm-8 mt-4">
                <div className="s01 text-center img-scene">
                  <span className="title title-yellow"> REPARTIR BENEFÍCIOS </span>
                  <p className="resume"> garante o acesso legal a biodiversidade brasileira através da conexão entre</p>
                </div>
                <div className="s02 mt-4 img-scene">
                  <div className="text-center">
                    <img src="assets/img/infographic-svg/topic-carmine.svg" alt=""/>
                  </div>
                  <div className="text-center">
                    <span className="title title-pink"> EMPRESAS </span>
                    <p className="resume"> que realizam pesquisas e desenvolvem produtos acabados com patrimônio genético brasileiro e</p>
                  </div>
                </div>
                <div className="s03 mt-4 img-scene">
                  <div className="text-center">
                    <img src="assets/img/infographic-svg/topic-blue.svg" alt=""/>
                  </div>
                  <div className="text-center">
                    <span className="title title-blue"> COMUNIDADES </span>
                    <p className="resume"> que detem o conhecimento tradicional associado ao patrimônio genético.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main bg-repartebr mt-110">
            <div className="container-fluid">
              <div className="scene-city img-scene">
                <img src="assets/img/infographic-svg/city.svg" alt=""/>
              </div>
              <div className="row justify-center">
                <div className="col-xs-12 col-sm-12 col-lg-6 mt-6-em text-center">
                  <div className="scene-entrepreneur img-scene">
                    <img src="assets/img/infographic-svg/entrepreneur3.svg" alt=""/>
                    <img src="assets/img/infographic-svg/entrepreneur4.svg" alt=""/>
                    <img src="assets/img/infographic-svg/entrepreneur2.svg" alt=""/>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-8 col-lg-6 mt-6-em text-center">
                  <div className="scene-text-reparte-1 img-scene">
                    <span className="title txt-white text-center">ReparteBR localiza projetos de alto impacto socioambiental </span>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-8 col-lg-6 col-xl-6 mt-6-em">
                  <div className="scene-world img-scene">
                    <img src="assets/img/infographic-svg/world.svg" alt=""/>
                  </div>
                  <div className="scene-world-trace-1 img-scene">
                    <img src="assets/img/infographic-svg/world-trace-1.svg" alt=""/>
                  </div>
                  <div className="scene-world-trace-2 img-scene">
                    <img src="assets/img/infographic-svg/world-trace-2.svg" alt=""/>
                  </div>
                  <div className="scene-world-trace-3 img-scene">
                    <img src="assets/img/infographic-svg/world-trace-3.svg" alt=""/>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-8 col-lg-6 mt-6-em scene-text-reparte-2 text-center">
                  <div className="img-scene"/>
                    <span className="title txt-white text-center">Através de planejamento participativo em comunidades com conhecimento tradicional associado. </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        
        <div id="ibcommunity-sytem" className="section">
          <div className="container-fluid">
            <div className="row justify-center">
              <div className="scene-background-purple">
                  <img src="assets/img/infographic-svg/bg-part-5.svg"/>
              </div>
              <div className="scene-genetic img-scene" id="genetic">
                <img src="assets/img/infographic-svg/genetic.svg"/>
              </div>
              <div className="col-xs-12 col-sm-8 col-lg-10 text-center inner-ibcommunity-sytem">
                <div className="scene-text-reparte-3 img-scene">
                  <span className="title text-center">Está conectado ao IBCommunity, um banco de projetos e comunidades do Instituto Beraca com informações sobre a sociobiodiversidade brasileira.</span>
                </div>
                <div className="scene-ibcommunity-states img-scene">
                  <span className="subtitle"> 12 Estados </span>
                  <img src="assets/img/infographic-svg/ib-community-states.svg"/>
                </div>
                <div className="scene-ibcommunity-communities img-scene">
                  <span className="subtitle"> 105 Comunidades </span>
                  <img src="assets/img/infographic-svg/ibcommunity-communities.svg"/>
                </div>
                <div className="scene-ibcommunity-families img-scene">
                  <span className="subtitle"> 2500 Famílias </span>
                  <img src="assets/img/infographic-svg/ibcommunity-families.svg"/>
                </div>
              </div>
            </div>  
          </div>
        </div>

        <div id="ibcommunity-groups" className="section bg-groups">
          <div className="main">
            <div className="scene-background-blue">
              <img src="assets/img/infographic-svg/bg-part-3.svg"/>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12">
                  <div className="col-xs-3 avatar-people">
                    <img className="img-responsive" src="assets/img/infographic-svg/people-1.svg"/>
                    <img className="img-responsive avatar-big" src="assets/img/infographic-svg/people13.svg"/>
                    <img className="img-responsive" src="assets/img/infographic-svg/people3.svg"/>
                  </div>
                  <div className="scene-text-reparte-4 text-center">
                    <span className="title txt-white text-center">Dialoga com diferentes comunidades tradicionais/CTAs</span>
                  </div>
                  <div className="col-xs-3 avatar-people">
                    <img className="img-responsive avatar-big" src="assets/img/infographic-svg/people4.svg"/>
                    <img className="img-responsive" src="assets/img/infographic-svg/people5.svg"/>
                    <img className="img-responsive" src="assets/img/infographic-svg/people6.svg"/>
                  </div>
                  <div className="scene-text-reparte-4 text-center">
                    <span className="title txt-white text-center">composta por indígenas, ribeirinhos</span>
                  </div>
                  <div className="col-xs-3 avatar-people">
                    <img className="img-responsive" src="assets/img/infographic-svg/people7.svg"/>
                    <img className="img-responsive" src="assets/img/infographic-svg/people8.svg"/>
                    <img className="img-responsive avatar-big" src="assets/img/infographic-svg/people9.svg"/>
                  </div>
                  <div className="scene-text-reparte-4 text-center">
                    <span className="title txt-white text-center">quilombolas e agricultores assentados.</span>
                  </div>
                  <div className="col-xs-3 avatar-people last-avatar-people">
                    <img className="img-responsive" src="assets/img/infographic-svg/people10.svg"/>
                    <img className="img-responsive avatar-big" src="assets/img/infographic-svg/people11.svg"/>
                    <img className="img-responsive" src="assets/img/infographic-svg/people12.svg"/>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div id="ibcommunity-projects" className="section bg-projects">
          <div className="main">
          <div className="scene-eolic img-scene">
              <img src="assets/img/infographic-svg/eolic.svg"/>
            </div>
            <div className="scene-background-violet">
              <img src="assets/img/infographic-svg/bg-part-4.svg"/>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-12 p-0">
                <div className="col-xs-3 scene-cloud">
                  <img className="img-responsive" src="assets/img/infographic-svg/cloud1.svg"/>
                  <img className="img-responsive" src="assets/img/infographic-svg/cloud1.svg"/>
                </div>
                <div className="col-xs-12 col-sm-8 col-lg-6 scene-text-reparte-5 text-center">
                  <span className="title txt-white text-center">Possibilita a repartição de benefícios em áreas estratégicas</span>
                </div>
                <div className="col-xs-3 scene-itens" >
                  <img className="scene-ground-tree" src="assets/img/infographic-svg/tree2.svg"/>
                  <img className="scene-ground-solar" src="assets/img/infographic-svg/solar-panel.svg"/>
                </div>
                <div className="col-xs-3 scene-windmill-an">
                  <img src="assets/img/infographic-svg/windmill-animate.svg"/>
                </div>
                <div className="col-xs-3 scene-windmill">
                  <img src="assets/img/infographic-svg/windmill-base.svg"/>
                </div>
                <div className="scene-ground-top">
                  <img className="img-fluid" src="assets/img/infographic-svg/drawing.svg"/>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div id="ibcommunity-howto" className="section bg-howto">
          <div className="main">
            <div className="scene-background-rose">
              <img className="img-fluid" src="assets/img/infographic-svg/bg-part-5.svg"/>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12">
                <div className="scene-text-reparte-6 text-center">
                  <span className="title-big text-center">Como funciona?</span>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12">
                <div className="scene-how-it-works">
                  <img src="assets/img/infographic-svg/how-it-works.svg"/>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="scene-text-reparte-7 text-center mt-4">
                  <div className="text-center">
                    <img src="assets/img/infographic-svg/topic-blue.svg" alt=""/>
                  </div>
                  <span className="subtitle"> Auxilia no Conhecimento Prévio Fundamentado (PIC) e no Termo de Acordo Mútuo (MAT).</span>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="scene-text-reparte-8 text-center mt-4">
                  <div className="text-center">
                    <img src="assets/img/infographic-svg/topic-yellow.svg" alt=""/>
                  </div>
                  <span className="subtitle"> Localiza projetos em comunidades com Conhecimento Tradicional Associado (CTA).</span>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="scene-text-reparte-9 text-center mt-4">
                  <div className="text-center">
                    <img src="assets/img/infographic-svg/topic-orange.svg" alt=""/>
                  </div>
                  <span className="subtitle"> Organiza o escopo do projeto e o seu plano de ação.</span>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="scene-text-reparte-10 text-center mt-4">
                  <div className="text-center">
                    <img src="assets/img/infographic-svg/topic-gray.svg" alt=""/>
                  </div>
                  <span className="subtitle"> Executa o plano de ação e participa do projeto na comunidade.</span>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="scene-text-reparte-11 text-center mt-4">
                  <div className="text-center">
                    <img src="assets/img/infographic-svg/topic-carmine.svg" alt=""/>
                  </div>
                  <span className="subtitle"> Monitora os projetos na comunidade através de relatórios analíticos.</span>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="scene-text-reparte-12 text-center mt-4">
                  <div className="text-center">
                    <img src="assets/img/infographic-svg/topic-light-blue.svg" alt=""/>
                  </div>
                  <span className="subtitle"> Avalia a execução do projeto e realiza apresentação de resultados</span>
                </div>
              </div>
              </div>
            </div>
          </div>

        <div id="ibcommunity-invest" className="section bg-invest">
          <div className="main">
            <div className="scene-background-darkblue">
              <img src="assets/img/infographic-svg/bg-part-6.svg"/>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 mb-40">
                <div className="scene-invest-title text-center">
                    <span className="title-big text-center text-white">Investimento</span>
                </div>
              </div>
              <div className="col-xs-12 col-sm-7 scene-invest">
                <div className="scene-investment text-center mt-4">
                  <img src="assets/img/infographic-svg/investment.svg"/>
                </div>
              </div>
              <div className="col-xs-12 col-sm-5 investment-topics">
                <div className="scene-text-reparte-13 text-center mt-4">
                  <div className="text-center">
                    <img src="assets/img/infographic-svg/topic-dark-orange.svg" alt=""/>
                  </div>
                  <span className="subtitle text-white"> Acordo de repartição de benefícios para projetos não-monetários.</span>
                </div>
                <div className="scene-text-reparte-14 text-center mt-4">
                  <div className="text-center">
                    <img src="assets/img/infographic-svg/topic-yellow.svg" alt=""/>
                  </div>
                  <span className="subtitle text-white"> Conhecimento tradicional associado de origem identificável.</span>
                </div>
                <div className="scene-text-reparte-15 text-center mt-4">
                  <div className="text-center">
                    <img src="assets/img/infographic-svg/topic-orange.svg" alt=""/>
                  </div>
                  <span className="subtitle text-white"> Custos administrativos da repartição de benefícios.</span>
                </div>
              </div>
                <div className="scene-sign-in text-center">
                <a href="/register"><button type="button" className="btn btn-outline-neutral btn-round disabled mr-3" data-placement="bottom">Cadastre-se</button></a>
                </div>
            </div>
          </div>
        </div>

        <div className="section landing-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto">
                <h2 id="txt-gray" className="text-center">Quer conhecer mais? <br/>Vamos conversar!</h2>
                <form className="contact-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-group mb-2">
                        <span className="input-group-addon">
                          <i className="nc-icon nc-single-02"></i>
                        </span>
                        <input type="text" className="form-control" placeholder="Seu nome"/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group mb-2">
                        <span className="input-group-addon">
                          <i className="nc-icon nc-briefcase-24"></i>
                        </span>
                        <input type="text" className="form-control" placeholder="Instituição que representa"/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group mb-2">
                        <span className="input-group-addon">
                          <i className="nc-icon nc-email-85"></i>
                        </span>
                        <input type="text" className="form-control" placeholder="Seu email"/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group mb-2">
                        <span className="input-group-addon">
                          <i className="nc-icon nc-mobile"></i>
                        </span>
                        <input type="text" className="form-control" placeholder="Seu telefone"/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <textarea className="form-control mb-2" rows="4" placeholder="Escreva aqui seus pensamentos, sentimentos e questões ..."></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <div className="form-check">
                        <label id="txt-gray" className="form-check-label">
                          <input className="form-check-input" type="checkbox" value=""/>
                          Possui PIC
                          <span className="form-check-sign"></span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="form-check">
                        <label id="txt-gray" className="form-check-label">
                          <input className="form-check-input" type="checkbox" value="" defaultChecked={this.state.chkbox}/>
                          Possui MAT
                          <span className="form-check-sign"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 ml-auto mr-auto text-center">
                      <button className="btn btn-danger btn-lg btn-fill">Enviar mensagem</button>
                    </div>
                  </div>
                </form>
                <div className="row mt-5">
                  <div className="col-md-6 ml-auto mr-auto text-center">
                    <a href="http://www.facebook.com/institutoberaca" target="_blank" className="btn btn-link btn-danger"><i className="fa fa-2x fa-facebook"></i></a>
                    <a href="http://www.instagram.com/institutoberaca" target="_blank" className="btn btn-link btn-danger"><i className="fa fa-2x fa-instagram"></i></a>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-6 ml-auto mr-auto text-center">
                    <a href="http://www.institutoberaca.org" target="_blank" className="btn btn-link btn-danger"><img src="assets/img/logo-beraca.svg" width="78" height="36" alt="Instituto Beraca"/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
        <footer className="footer section-dark">
          <div className="container">
            <div className="credits ml-auto text-center">
              <span className="copyright">
                © {new Date().getFullYear()} made with <i className="fa fa-heart heart"></i> by <a href="http://3ecologias.net" target="blank">3Ecologias</a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}


