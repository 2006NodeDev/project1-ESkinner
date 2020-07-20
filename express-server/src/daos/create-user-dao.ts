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
        
        let result:QueryResult = await client.query( `insert into project0.users("user_id","username", "password", "first_name", "last_name","email", "role_id") 
        values ( 4, '${infoToUpdateDTO.username}', '${infoToUpdateDTO.password}', '${infoToUpdateDTO.first_name}', '${infoToUpdateDTO.last_name}', '${infoToUpdateDTO.email}', 1);`)
        result = await client.query(`select * from project0.users u where u."user_id"=4;`)
        return result.rows
    }catch(e){
        console.log(e)
        throw new Error('unimplemented error handling')
    }finally{
        client && client.release()
    }
}