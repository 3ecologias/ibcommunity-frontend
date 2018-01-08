import axios from "axios";

var ip_server = "http://admin.repartebr.com"
//var ip_server = "http://127.0.0.1:8000"

axios.interceptors.response.use(function(response){
    return response;
}, function(error){
    if(error.response.status === 401 && error.response.statusText === "Unauthorized"){
        localStorage.removeItem("tokenib");
    }
})

var requests = {
    register: function(firstName,lastName,login,email,phone,cnpj,password){
        var response = axios({
            method: "post",
            url: ip_server + "/auth/users/create/",
            data: {
                firstName: firstName,
                lastName: lastName,
                login: login,
                email: email,
                phone: phone,
                cnpj: cnpj,
                password: password
            },
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(function(res, data){return res;}).catch((err)=> {console.log(err); return err.response;});
        return response;
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
