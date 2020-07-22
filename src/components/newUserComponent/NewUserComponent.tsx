import React, { FunctionComponent, useState, SyntheticEvent } from 'react'
import TextField from '@material-ui/core/TextField';
import { newUser } from '../remote api/newUser';
import Button from '@material-ui/core/Button'

interface LoginProps{
    changeCurrentUser:(newUser:any)=>void
}

export const NewUserComponent:FunctionComponent<any> = (props) => {
    const [username, changeUsername] = useState('')
    const [password, changePassword] = useState('')
    const [firstName, changeFirstName] = useState('')
    const [lastName, changeLastName] = useState('')
    const [email, changeEmail] = useState('')

    const updatePassword = (event:any) => {
        event.preventDefault()
        changePassword(event.currentTarget.value)
    }
    const updateUsername = (event:any) => {
        event.preventDefault()
        changeUsername(event.currentTarget.value)
    }
    const updateFirstName = (event:any) => {
        event.preventDefault()
        changeFirstName(event.currentTarget.value)
    }
    const updateLastName = (event:any) => {
        event.preventDefault()
        changeLastName(event.currentTarget.value)
    }
    const updateEmail = (event:any) => {
        event.preventDefault()
        changeEmail(event.currentTarget.value)
    }
    const loginSubmit = async (e:SyntheticEvent) => {//sythentic events are react interface for converting between the many different types of browser events
        e.preventDefault()
        let res = await newUser(username, password, firstName, lastName, email)
        console.log(res)
        props.changeCurrentUser(res)
        changePassword('')
    }


    
    return(
        <div>
            <form onSubmit={loginSubmit}>
            <TextField id="standard-basic" label="Username" value= {username} onChange={updateUsername}/>
            <TextField id="standard-basic" type='password' label="Password" value= {password} onChange={updatePassword}/>
            <TextField id="standard-basic" label="First Name" value= {firstName} onChange={updateFirstName}/>
            <TextField id="standard-basic" label="Last Name" value= {lastName} onChange={updateLastName}/>
            <TextField id="standard-basic" label="Email" value= {email} onChange={updateEmail}/>
            <Button type='submit' variant="contained" color="primary">Create New User</Button>
            </form>
        </div>
    )
}