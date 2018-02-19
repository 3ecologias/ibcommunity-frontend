import axios from "axios";

//var ip_server = "http://admin.repartebr.com"
//var ip_server = "http://127.0.0.1:8000"
var ip_server = "http://45.55.202.61:8000"

axios.interceptors.response.use(function(response){
    return response;
}, function(error){
    if(error.response.status === 401 && error.response.statusText === "Unauthorized"){
        localStorage.removeItem("tokenib");
    }
})

var requests = {
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
