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
    this._login = this._login.bind(this);
  }

  _login(event,login,password){
    this.props.history.push({pathname: "/welcome" , state:{name: "logado"}})
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Header logado={false}/>
        <div className="page-header landing-background" data-parallax="true">
		<div className="filter"></div>
		<div className="container">
			<div className="motto text-center">
				<h1>Maximize rendimentos para o seu ecossistema</h1>
				<h3>Facilite o acesso a recursos genéticos e otimize a repartição de benefícios</h3>
				<br />
				<button type="button" className="btn btn-outline-neutral btn-round disabled mr-3" data-toggle="tooltip" data-placement="bottom" title="Aguarde, em breve... :)">Cadastre-se</button>
				<a className="btn btn-outline-danger btn-round smooth-scroll scroll-down-anim" href="#detail">Saiba mais</a>

			</div>
		</div>
	</div>
	<div className="main">
		<div id="detail" className="section text-center">
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<div className="info mt-5">
							<div className="icon icon-danger">
								<i className="nc-icon nc-chart-pie-36"></i>
							</div>
							<div className="description">
								<h4 className="info-title">O que é?</h4>
								<p className="mt-3">O IBCommunity acelera a repartição justa e equitativa de benefícios entre comunidades,
									provedores e usuários através de projetos comunitários que ajudam a manter a floresta ambientalmente saudável.
									A repartição de benefícios é primordial para garantir o acesso a recursos genéticos da diversidade brasileira.</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="info mt-5">
								<div className="icon icon-danger">
									<i className="nc-icon nc-compass-05"></i>
								</div>
								<div className="description">
									<h4 className="info-title">Como funciona?</h4>
									<p className="mt-3">Cadastre-se e selecione entre projetos para a repartição em comunidades provedoras.
										Receba auxílio do Instituto Beraca para a obtenção de consentimento prévio fundamentado e para a construção dos termos de acordo mútuo entre provedores e usuários.</p>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="info mt-5">
									<div className="icon icon-danger">
										<i className="nc-icon nc-chart-bar-32"></i>
									</div>
									<div className="description">
										<h4 className="info-title">Qual o investimento?</h4>
										<p className="mt-3">Na modalidade não monetária, o valor a ser repartido é de 0.75% do faturamento líquido obtido com o uso do produto genético.
											Acrescenta-se 15% do valor do projeto para a administração, monitoramento e avaliação pelo Instituto Beraca.</p>
										</div>
									</div>
								</div>
								<div className="col-md-12">
									<a href="#paper-kit" className="btn btn-danger btn-round mt-5">Faça parte</a>
								</div>
							</div>
						</div>
					</div>
					<div className="section section-dark-blue text-center">
						<div className="container">
							<div className="row justify-content-md-center">
								<div className="col-md-6">
									<h2 className="title text-white mb-5">Porque repartir benefícios não monetários através do IBCommunity?</h2>
								</div>
							</div>

							<div className="row">
								<div className="col-md-4 mt-4">
									<div className="card card-profile card-plain mt-5">
										<div className="card-avatar">
											<a href="#avatar"><img src={florestas} alt="..."/></a>
										</div>
										<div className="card-body">
											<a href="#paper-kit">
												<div className="author">
													<h4 className="card-title">Manutenção de florestas e comunidades</h4>
													<h6 className="card-category">Investimento na preservação</h6>
												</div>
											</a>
											<p className="card-description text-center">
												O IBCommunity garante que benefícios não monetários repartidos sejam usados para a conservação e o uso sustentável do patrimônio ambiental,
												o que contribui significativamente com a redução da pobreza e com o desenvolvimento sustentável.
											</p>
										</div>
									</div>
								</div>
								<div className="col-md-4 mt-4">
									<div className="card card-profile card-plain mt-5">
										<div className="card-avatar">
											<a href="#avatar"><img src={devlocal} alt="..."/></a>
										</div>
										<div className="card-body">
											<a href="#paper-kit">
												<div className="author">
													<h4 className="card-title">Parceria para o desenvolvimento local</h4>
													<h6 className="card-category">Investimento na eficácia</h6>
												</div>
											</a>
											<p className="card-description text-center">
												O IBCommunity mantém um banco de projetos relevantes para comunidades
												elaborados a partir de planejamento participativo em diversos territórios,
												o que garante maior adesão local e propicia um investimento que atinja
												seu impacto socioambiental desejado.
											</p>
										</div>
									</div>
								</div>

								<div className="col-md-4 mt-4">
									<div className="card card-profile card-plain mt-5">
										<div className="card-avatar">
											<a href="#avatar"><img src={resultados} alt="..."/></a>
										</div>
										<div className="card-body">
											<a href="#paper-kit">
												<div className="author">
													<h4 className="card-title">Amplificação dos resultados no território</h4>
													<h6 className="card-category">Investimento no futuro</h6>
												</div>
											</a>
											<p className="card-description text-center">
												O Instituto Beraca garante o retorno do investimento em repartição não monetária através de metodologias de monitoramento e avaliação dos projetos
												e suas comunidades para que você possa compartilhar os resultados de seus compromissos com a responsabilidade socioambiental.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="section landing-section">
						<div className="container">
							<div className="row">
								<div className="col-md-8 ml-auto mr-auto">
									<h2 className="text-center">Quer conhecer mais? <br/>Vamos conversar!</h2>
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
													<label className="form-check-label">
														<input className="form-check-input" type="checkbox" value=""/>
														Possui PIC
														<span className="form-check-sign"></span>
													</label>
												</div>
											</div>
											<div className="col-md-6 col-sm-6">
												<div className="form-check">
													<label className="form-check-label">
														<input className="form-check-input" type="checkbox" value="" checked/>
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
										<a href="http://www.facebook.com/institutoberaca" target="_blank" rel="noopener noreferrer" className="btn btn-link btn-danger"><i className="fa fa-2x fa-facebook"></i></a>
										<a href="http://www.instagram.com/institutoberaca" target="_blank" rel="noopener noreferrer" className="btn btn-link btn-danger"><i className="fa fa-2x fa-instagram"></i></a>
									</div>
							</div>
							<div className="row mt-5">
								<div className="col-md-6 ml-auto mr-auto text-center">
									<a href="http://www.institutoberaca.org" target="_blank" rel="noopener noreferrer" className="btn btn-link btn-danger"><img src="assets/img/logo-beraca.svg" width="78" height="36" alt="Instituto Beraca"/></a>
								</div>
						</div>
						</div>
					</div>
				</div>
			</div>
			<footer className="footer section-dark">
				<div className="container">
						<div className="credits ml-auto">
							<span className="copyright">
								© <script>document.write(new Date().getFullYear())</script>, made with <i className="fa fa-heart heart"></i> by <a href="http://3ecologias.net" target="blank">3Ecologias</a>
							</span>
						</div>
					</div>
                    </footer>
			</div>
      </div>
    );
  }
}


