/* Esse arquivo é onde fica todas as requisições da aplicação do front,
   Os nomes de cada função é bem sugestivo ao que ela faz
   Em caso de duvidas consultar a documentação do axios, usado para fazer as requisições */

import axios from "axios";


/* Essa variavel é de nome imutavel, se quiser mudar terá que mudar em todos os lugares que ela aparece
   é a URL inicial da requisição */
//var ip_server = "http://admin.repartebr.com"
//var ip_server = "http://127.0.0.1:8000"
var ip_server = "http://45.55.202.61:8000"


//se der algum erro na requisição trabalha com o token
axios.interceptors.response.use(function(response){
    return response;
}, function(error){
    if(error.response.status === 401 && error.response.statusText === "Unauthorized"){
        localStorage.removeItem("tokenib");
    }
})

var requests = {
    //função de registro do usuario
    register: function(fullName,email,phone,company,password){
        var response = axios({
            method: "post",
            url: ip_server + "/api/user/create/",
            data: {
                full_name: fullName,
                phone: phone,
                email: email,
                password: password,
                company: company
            },
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(function(res){console.log(res);return res;}).catch((err)=> {console.log(err); return err.response;});
        return response;
    },
    //login do usuario, retorna o token
    login: function(login, senha){
        var token = axios({
            method: "post",
            url: ip_server + "/api/auth/token/",
            data: {
                email: login,
                password: senha
            },
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(function(res, data) { token = res; return token }).catch((err) => console.log(err));
        return token
    },
    //Pega lista de produtos para usar nas sugestões da pesquisa
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
        }).catch(err => console.log(err.response));

        return response
    },
    //Pega os detalhes do produto
    searchProduct: async function(token,id){
        var response = await axios({
            method: "GET",
            url: ip_server + "/product/detail/" + id + "/",
            params: {
            },
            headers: {
                'Authorization': ' JWT '+ token,
                'Content-Type': 'application/json',
            },
        }).catch(err => console.log(err));
        return response
    },
    //Lista dos projetos
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
    //Todos os projetos do banco
    allProjects: async function(token){
        var response = await axios({
            method: "GET",
            url: ip_server + "/project/list/",
            headers: {
                'Authorization': ' JWT '+ token,
                'Content-Type': 'application/json',
            },
        }).catch(err => console.log(err));
        return response
    },
    //Informações do usuario
    userInfos: async function(token){
        var response = await axios({
            method: "GET",
            //adicionar url das informações do user
            url: ip_server + "/project/list/",
            headers: {
                'Authorization': ' JWT '+ token,
                'Content-Type': 'application/json',
            },
        }).catch(err => console.log(err));
        return response
    },
    //Solicitar a repartição de beneficios
    projectRequestSupport: async function(token,user_id, project_id){
        var response = await axios({
            method: "POST",
            url: ip_server + "/api/project/support/create/",
            headers: {
                'Authorization': ' JWT ' + token,
                'Content-Type': 'application/json',
            },
            data: {
                user_id: user_id,
                project_id: project_id
            },
        }).catch(err => console.log(err));
        return response
    },
    //Lista dos projetos repartidos pelo usuario
    supportedProjectsList: async function(token,user_id){
        var response = await axios({
            method: "GET",
            url: ip_server + "/api/project/support/list/",
            headers: {
                'Authorization': ' JWT ' + token,
                'Content-Type': 'application/json',
            },
            data: {
                user_id: user_id
            },
        }).catch(err => console.log(err));
        return response
    },
    //Detalhe de um projeto repartido pelo usuario
    supportedProjectDetail: async function(token,project_id){
        var response = await axios({
            method: "GET",
            url: ip_server + "/api/project/support/detail/" + project_id,
            headers: {
                'Authorization': ' JWT ' + token,
                'Content-Type': 'application/json',
            }
        }).catch(err => console.log(err));
        return response
    },
    //Detalhes do produto
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
