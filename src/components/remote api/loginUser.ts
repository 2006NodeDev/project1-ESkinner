import { project1Client } from '.'

export const loginUser= async (username:string, password:string) => {
    let credentials = {
        "username":username,
        "password":password
    }
    try{
        let response = await project1Client.post('/login', credentials)
        return(response.data)
    }catch(e){

    }
}