import React, { Component } from 'react';
import Header from "../mainComponents/Header.jsx";

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      login: "",
      password: "",
      token:'',
    }
  }

  componentDidMount(){
    let script = document.createElement("script");
    script.src = "./assets/js/mapbox.js"
    document.body.appendChild(script);
  }


  render() {
    return (
      <div>
        <Header/>
        <div className="wrapper">
			<div className="page-header items-end">
				<div className="container-fluid">
					<div className="row mb-50">
						<div className="col-lg-5 ml-auto mr-auto mt-75">
							<div className="result_text">
								<h2>Euterpe oleracea</h2>
								<p>Valor a ser repoartido US$ 70.000,00</p>
								<h1>10</h1>
								<h4>Projetos</h4>
							</div>
						</div>
					</div>
					<div className="row">
						<div id='map'></div>
					</div>
				</div>
			</div>
		</div>
      </div>
    );
  }
}


