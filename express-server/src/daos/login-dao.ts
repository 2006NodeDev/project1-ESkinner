import { PoolClient, QueryResult } from "pg";
import { connectionPool } from ".";

export async function loginWithUsernamePassword(username:String, password:String){
    let client:PoolClient;
    try{
        client = await connectionPool.connect()
        let result:QueryResult = await client.query(`select "user_id", "username", "password", "first_name", "last_name", "email", "picture_path" from project1.users u where u."username"='${username}' and u."password"='${password}';`)
        return result.rows
    }catch(e){
        console.log(e)
        throw new Error('un-implemented error handling')
    }finally{
        client && client.release()
    }
    //in progress- come back plz!
}