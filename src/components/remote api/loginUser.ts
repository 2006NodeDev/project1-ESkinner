import { project1Client } from '.'

export const loginUser= async (username:string, password:string) => {
    let credentials = {
        username,
        password
    }
    try{
        let response = await project1Client.post('/login', credentials)
        console.log(response)
        return(response.data)
    }catch(e){

    }
}