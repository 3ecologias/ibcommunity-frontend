import React from 'react';
import {Redirect} from 'react-router-dom';

var extraFunctions = {
    //checa se está logado para o header
    checklogin: function(token){
        if(token){
            return true;
        }
        else{
            return false;
        }
    },
    //Se não existir token redireciona
    redirectNotLoged: function(token){
        if(token){
        }
        else{
            return <Redirect to="/" />;
        }
    }
}

export default extraFunctions;
