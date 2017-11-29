import React, { Component } from 'react';
import Header from "../mainComponents/Header.jsx";

export default class Profile extends Component {
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
        <Header logado={true}/>
        <div className="wrapper">
        <div className="page-header page-header-xs profile-upper-background" data-parallax="true">
            <h1 className="title moto">Meu Perfil</h1>
            <div className="filter"></div>
        </div>
        <div className="section profile-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 ml-auto mr-auto">
                        <div className="card card-profile pl-0 pb-4 pr-0">
                            <div className="nav-tabs-navigation">
                                <div className="nav-tabs-wrapper">
                                    <ul className="ft-size-13 nav nav-tabs" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" data-toggle="tab" href="#account" role="tab">Pessoal</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#company" role="tab">Empresa</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#projects" role="tab">Repartições</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tab-content following plr-17">
                                <div className="tab-pane active" id="account" role="tabpanel">
                                    <div className="row">
                                        <div className="col-md-6 ml-auto mr-auto">
                                                <div className="input-group mb-4">
                                                    <i className="icon_profile fa fa-user-o"></i>
                                                    <p>Stuart Hall</p>
                                                </div>
                                                <div className="input-group mb-4">
                                                    <i className="icon_profile fa fa-envelope-o"></i>
                                                    <p>stuarthall@gmail.com</p>
                                                </div>
                                                <div className="input-group mb-4">
                                                    <i className="icon_profile fa fa-gift"></i>
                                                    <p> 05/09/1967 </p>
                                                </div>
                                                <div className="input-group">
                                                    <i className="icon_profile fa fa-map-o"></i>
                                                    <p>Rua Avelar, 42 </p>
                                                </div>
                                                <div className="input-group mb-4">
                                                    <i className="mr-1 fa mt-1 icon_profile"></i>
                                                    <p>Recife - PE</p>
                                                </div>
                                                <button className="btn btn-danger btn-block btn-round mt-5">Editar</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="company" role="tabpanel">
                                    <div className="row">
                                        <div className="col-md-6 ml-auto mr-auto">
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="projects" role="tabpanel">
                                    <div className="row">
                                        <div className="col-md-6 ml-auto mr-auto">
                                            <div className="input-group">
                                                <i className="fa fa-map-marker mark_icon" aria-hidden="true"></i>
                                                <p className="repart_title">Painel Solar Produtivo</p> 
                                            </div>
                                            <p className="ml-34">Euterpa oleracea</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
  }
}


