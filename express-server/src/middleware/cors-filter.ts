import { Request, Response, NextFunction } from "express";

export function corsFilter(req:Request, res:Response, next:NextFunction){
    //we should always, on every request, we have to set the Access-Control-Allow-Origin header
    res.header('Access-Control-Allow-Origin', String(req.originalUrl)) //this is bad. don't do this
    res.header('Access-Control-Allow-Origin', 'Origin, Content-Type, Accept')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE')
    if(req.method ==='OPTIONS'){
        res.sendStatus(200)
        //will send by the options pre-flight requests
    }else{
        next()
        //allows real requests to move towards endpoint
    }
}