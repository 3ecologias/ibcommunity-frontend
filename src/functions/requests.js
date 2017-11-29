import axios from "axios";

var ip_server = "http://162.243.24.246:8100"


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
        }).then(function(res, data) { token = res; return token }).catch((err) => console.log(err));
        console.log(token);
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
        }).catch(err => console.log(err));
        return response
    },
    projectRequestSupport: async function(token, project_id){
        var response = await axios({
            method: "POST",
            url: ip_server + "/project/detail/" + project_id+'/',
            headers: {
                'Authorization': ' JWT ' + token,
                'Content-Type': 'application/json',
            },
        }).catch(err => console.log(err));
        return response
    },
    productDetail: async function(token, product_id){
        var response = await axios({
            method: "GET",
            url: ip_server + "/product/detail/" + product_id+'/',
            headers: {
                'Authorization': ' JWT ' + token,
                'Content-Type': 'application/json',
            },
        }).catch(err => console.log(err));
        return response
    }
}

export default requests;
