import axios from 'axios'

export const project1Client = axios.create({
    baseURL:'http://localhost:2005',
    headers:{
        'Content-Type': 'application/json'
    },
    withCredentials:true
})