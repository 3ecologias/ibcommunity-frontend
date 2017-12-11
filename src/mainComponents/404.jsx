import React , {Component}  from 'react';
import Header from './Header';

export default class Page404 extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Header/>
                <div className="page-header">
                    <div className="filter"></div>
                    <div className="container z-1">
                        <div className="row div-404">
                            <div className="col-12 center-text">
                                <h1>404</h1>
                                <h2>Page not found</h2>
                                <h4 className="mt-30">For Some Reason The Page You Requested Could Not Be Found On Our Server</h4>
                                <h5 className="mt-30">Go <a href="login">Back to the Home page</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}