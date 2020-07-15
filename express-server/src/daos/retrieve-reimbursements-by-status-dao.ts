import { connectionPool } from ".";
import { QueryResult, PoolClient } from "pg";

export async function retrieveReimbursementsByStatus(statusId:number){
    let client:PoolClient
    try{
        client = await connectionPool.connect()
        let response:QueryResult = await client.query(`set schema 'project0';`) 
        response = await client.query(`select "reimbursement_id","amount", "date_submitted","date_resolved","description","status_id","status","type_id", "type", "username" from reimbursements r natural join reimbursement_types rt natural join status s inner join users u on r."author_id" = u.user_Id where r."status_id" = ${statusId} order by r.date_submitted desc ;`)
        return response.rows
    }catch(e){
        console.log(e)
        throw new Error('unimplemented error handling')
    }
}