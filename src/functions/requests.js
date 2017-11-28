import axios from "axios";

var ip_server = "http://192.168.15.17:8000"


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
    searchProductList: async function(token){
        var response = await axios({
            method: "GET",
            url: ip_server + "/product/list/",
            params: {
                names: "true",
            },
            headers: {
                'Authorization': ' JWT '+ token,
                'Content-Type': 'application/json',
            },
            withCredentials: false
        }).catch(err => console.log(err));

        return response
    },
    searchProduct: async function(token,id){
        var response = await axios({
            method: "GET",
            url: ip_server + "/product/detail/" + id,
            params: {
            },
            headers: {
                'Authorization': ' JWT '+ token,
                'Content-Type': 'application/json',
            },
            withCredentials: false
        }).catch(err => console.log(err));
        return response
    },
    projectList: async function(token, product_id){
        var response = await axios({
            method: "GET",
            url: ip_server + "/project/list/",
            params: {
                product_id: product_id
            },
            headers: {
                'Authorization': ' JWT '+ token,
                'Content-Type': 'application/json',
            },
            withCredentials: false
        }).catch(err => console.log(err));
        return response
    }
}

export default requests;