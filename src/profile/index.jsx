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
        <div class="wrapper">
        <div class="page-header page-header-xs profile-upper-background" data-parallax="true">
            <h1 class="title moto">Meu Perfil</h1>
            <div class="filter"></div>
        </div>
        <div class="section profile-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 ml-auto mr-auto">
                        <div class="card card-profile pl-0 pb-4 pr-0">
                            <div class="nav-tabs-navigation">
                                <div class="nav-tabs-wrapper">
                                    <ul class="ft-size-13 nav nav-tabs" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" data-toggle="tab" href="#account" role="tab">Pessoal</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" data-toggle="tab" href="#company" role="tab">Empresa</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" data-toggle="tab" href="#projects" role="tab">Repartições</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="tab-content following plr-17">
                                <div class="tab-pane active" id="account" role="tabpanel">
                                    <div class="row">
                                        <div class="col-md-6 ml-auto mr-auto">
                                                <div class="input-group mb-4">
                                                    <i class="icon_profile fa fa-user-o"></i>
                                                    <p>Stuart Hall</p>
                                                </div>
                                                <div class="input-group mb-4">
                                                    <i class="icon_profile fa fa-envelope-o"></i>
                                                    <p>stuarthall@gmail.com</p>
                                                </div>
                                                <div class="input-group mb-4">
                                                    <i class="icon_profile fa fa-gift"></i>
                                                    <p> 05/09/1967 </p>
                                                </div>
                                                <div class="input-group">
                                                    <i class="icon_profile fa fa-map-o"></i>
                                                    <p>Rua Avelar, 42 </p>
                                                </div>
                                                <div class="input-group mb-4">
                                                    <i class="mr-1 fa mt-1 icon_profile"></i>
                                                    <p>Recife - PE</p>
                                                </div>
                                                <button class="btn btn-danger btn-block btn-round mt-5">Editar</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="company" role="tabpanel">
                                    <div class="row">
                                        <div class="col-md-6 ml-auto mr-auto">
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="projects" role="tabpanel">
                                    <div class="row">
                                        <div class="col-md-6 ml-auto mr-auto">
                                            <div class="input-group">
                                                <i class="fa fa-map-marker mark_icon" aria-hidden="true"></i>
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


