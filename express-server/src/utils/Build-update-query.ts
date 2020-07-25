import { UserDTO } from "../dtos/user-dto";

export function buildUpdateQuery(dataToChange:UserDTO){
    let userStr:string = ''
    let passwordStr:string = ''
    let firstNameStr:string = ''
    let lastNameStr:string = ''
    let emailStr:string = ''
    let pictureIdStr:string = ''

    if(dataToChange.username!==undefined){
        userStr = `, "username"='${dataToChange.username}' `
    }
    if(dataToChange.password!==undefined){
        passwordStr = `, "password"='${dataToChange.password}'`
    }
    if(dataToChange.first_name!==undefined){
        firstNameStr = `, "first_name"='${dataToChange.first_name}'`
    }
    if(dataToChange.last_name!==undefined){
        lastNameStr = `, "last_name"='${dataToChange.last_name}'`
    }
    if(dataToChange.email!==undefined){
        emailStr = `, "email"='${dataToChange.email}'`
    }
    if(dataToChange.picture_path!==undefined){
        pictureIdStr = `, "picture_id"=${dataToChange.picture_path}`
    }

    let sqlScript:string = `update project1.users u set "user_id" = 
    ${dataToChange.user_id}${userStr}${passwordStr}${firstNameStr}${lastNameStr}${emailStr}${pictureIdStr} 
     where "user_id"=${dataToChange.user_id};`
     return sqlScript
}