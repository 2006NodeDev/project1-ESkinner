import { project1Client } from '.'



export const newUser= async (username:string, password:string, firstName:string, lastName:string, email:string) => {
    let credentials = {
        username,
        password,
        firstName,
        lastName,
        email
    }
    try{
        console.log(credentials)
        let response = await project1Client.post('/users/newUser', credentials)
        console.log(response)
        return(response.data)
    }catch(e){

    }
}