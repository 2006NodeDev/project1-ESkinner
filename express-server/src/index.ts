import {loginRouter} from "./Routers/login-router"
import { findUsers } from "./Routers/user-router"
import express, { Request, Response } from 'express'
import { sessionMiddleware } from "./middleware/session-middleware"
import { corsFilter } from "./middleware/cors-filter"



    const app = express()
    app.use(express.json())
    app.use(corsFilter)
    app.use(sessionMiddleware)
    app.get('/health', (req:Request, res:Response)=>{
        res.sendStatus(200)
    })
    app.use("/login", loginRouter)
    app.use("/users", findUsers)
    
    app.listen(2005, () => {
        console.log("Server has started!")
    })
