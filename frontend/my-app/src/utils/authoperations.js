function getToken(){
    if(window.localStorage){
        return localStorage.getItem('token')
    }
    return "";
}

function isAuthenticated(){
    if(window.localStorage){
        const token = localStorage.getItem('token')
        return Boolean(token)
    }
    return false;
}

function setToken(token){
    if (window.localStorage){
        const settoken=localStorage.setItem("token",token)
        return settoken
    }
    
}
export {getToken,isAuthenticated,setToken}