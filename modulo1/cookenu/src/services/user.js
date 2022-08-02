import axios from "axios";
import {BASE_URL} from "../constants/urls"

export const login = (body, clear) => {
    axios.post(`${BASE_URL}/user/login`, body).then((response) => {
        localStorage.setItem("token", response.data.token)
        clear() 
    })
    .catch((error) => alert(error.response.data.message)   )
}

export const cadastro = (body, clear) => {
    axios.post(`${BASE_URL}/user/signup`, body).then((response) => {
        localStorage.setItem("token", response.data.token)
        clear() 
    
    })
    .catch((error) => {alert(error.response.data.message)})
}