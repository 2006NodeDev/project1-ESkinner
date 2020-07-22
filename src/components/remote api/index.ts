import axios from 'axios'

export const project1Client = axios.create({
    baseURL:'http://34.107.179.47:80',
    headers:{
        'Content-Type': 'application/json'
    },
    withCredentials:true
})