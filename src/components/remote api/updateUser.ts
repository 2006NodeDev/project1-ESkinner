import { project1Client } from '.'

export const updateUser= async (username:string, password:string, firstName:string, lastName:string, email:string) => {
    let credentials = {
        "userId":1,
        username,
        password,
        firstName,
        lastName,
        email
    }
    try{
        let response = await project1Client.patch('/users', credentials)
        console.log(response)
        return(response.data)
    }catch(e){

    }
}