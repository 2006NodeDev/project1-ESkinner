import { User } from "../Models/User";
import { userToUserDTO } from "../utils/User-to-UserDTO-converter";
import { UserDTO } from "../dtos/user-dto";
import { PoolClient, QueryResult } from "pg";
import { connectionPool } from ".";


export async function createNewUser(newUserInfo:User){
    let infoToUpdateDTO:UserDTO = userToUserDTO(newUserInfo)
    let client:PoolClient;
    try{
        client = await connectionPool.connect()
        
        let result:QueryResult = await client.query( `insert into project1.users("username", "password", "first_name", "last_name","email", "picture_path") 
        values ( '${infoToUpdateDTO.username}', '${infoToUpdateDTO.password}', '${infoToUpdateDTO.first_name}', '${infoToUpdateDTO.last_name}', '${infoToUpdateDTO.email}', null);`)
        result = await client.query(`select * from project1.users u order by u."user_id" desc limit(1);`)
        return result.rows
    }catch(e){
        console.log(e)
        throw new Error('unimplemented error handling')
    }finally{
        client && client.release()
    }
}