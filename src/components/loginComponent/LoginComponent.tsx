import React, { FunctionComponent, useState, SyntheticEvent } from 'react'
import TextField from '@material-ui/core/TextField';
import { loginUser } from '../remote api/loginUser';
import Button from '@material-ui/core/Button'
import { User } from '../../models/User'

interface LoginProps{
    changeCurrentUser:(newUser:any)=>void
}

export const LoginComponent:FunctionComponent<any> = (props) => {
    const [username, changeUsername] = useState('')
    const [password, changePassword] = useState('')
    
    const updatePassword = (event:any) => {
        event.preventDefault()
        changePassword(event.currentTarget.value)
    }
    const updateUsername = (event:any) => {
        event.preventDefault()
        changeUsername(event.currentTarget.value)
    }
    const loginSubmit = async (e:SyntheticEvent) => {//sythentic events are react interface for converting between the many different types of browser events
        e.preventDefault()
        let response:User = await loginUser(username, password)
        props.changeCurrentUser(response)
        changePassword('')
    }


    
    return(
        <div>
            <form onSubmit={loginSubmit}>
            <TextField id="standard-basic" label="Username" value= {username} onChange={updateUsername}/>
            <TextField id="standard-basic" type='password' label="Password" value= {password} onChange={updatePassword}/>
            <Button type='submit' variant="contained" color="primary">Login</Button>
            </form>
        </div>
    )
}