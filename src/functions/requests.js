import axios from "axios";

var ip_server = "http://192.168.15.8:8000"


var requests = {
    register: function(nome, email, senha){
        axios({
            method: "post",
            url: ip_server + "/auth/users/create/",
            data: {
                username: nome,
                email: email,
                password: senha,
            },
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: false
        }).then(function(response){}).catch((err)=>console.log(err));
    },
    login: function(login, senha){
        var token = axios({
            method: "post",
            url: ip_server + "/auth/jwt/create/",
            data: {
                username: login,
                password: senha
            },
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: false
        }).then(function(res, data) { token = res; return token }).catch((err) => console.log(err));

        return token
    },
    searchProduct: async function(token){
        console.log("JWT ", token);
        var response = await axios({
            method: "GET",
            url: ip_server + "/product/list/",
            params: {
                qs: "true",
            },
            headers: {
                'Authorization': ' JWT '+ token,
                'Content-Type': 'application/json',
            },
            withCredentials: false
        }).catch(err => console.log("RENATO" , err));

        return response
    }
}

export default requests;