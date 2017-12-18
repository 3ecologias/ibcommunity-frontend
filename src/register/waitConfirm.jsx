import React , {Component}  from 'react';
import Header from '../mainComponents/Header';
import extraFunctions from "../functions/extraFunctions";

export default class waitConfirm extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Header logado={extraFunctions.checklogin(this.state.token)} history={this.props.history}/>
                <div className="wrapper">
			        <div className="page-header confirmedInterest-background">
                    <div className="filter"></div>
                        <div className="container z-1 pt-50">
                            <div className="row text-center">
                                <div className="col-12">
                                    <h1 className="mt-20 mb-20 font-weight-normal">Obrigado!</h1>
                                    <h3>
                                        Seu cadastro foi enviado para avaliação da nossa equipe.
                                    </h3>
                                    <h4 className="mt-20">
                                        Dentro de alguns dias entraremos em contato.
                                    </h4>
                                    <h4 className="mt-20">
                                        Em caso de duvidas enviar um email para: <p className="font-weight-normal ft-size-18">contato@institutoberaca.org</p>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}