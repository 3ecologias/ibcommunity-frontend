import React from 'react';
import {Redirect} from 'react-router-dom';

var extraFunctions = {
    checklogin: function(token){
        if(token){
            return true;
        }
        else{
            return false;
        }
    },
    redirectNotLoged: function(token){
        if(token){
        }
        else{
            return <Redirect to="/" />;
        }
    }
}

export default extraFunctions;
