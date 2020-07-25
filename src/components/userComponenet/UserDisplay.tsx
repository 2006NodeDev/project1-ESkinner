import React, { FunctionComponent } from 'react'
import { User } from '../../models/User'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
//this user display was copied directly from Alec's UserDisplay element in lightlyBurning
interface IUserDisplayProps{
    user:User|null
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(25),
        height: theme.spacing(25),
      },
    },
    paper:{
        backgroundColor:'blue' 
    }
  }),
);




export const UserDisplayComponent:FunctionComponent<IUserDisplayProps> = (props)=>{
    let classes = useStyles()
    console.log(props.user, props.user?.username)
    return(
        <div className={classes.root}>
            <Paper className={classes.paper}elevation={4}>
            <Typography variant='body1'>
                   Username : {props.user?.username}
                </Typography>
                <Typography variant='body1'>
                   Email : {props.user?.email}
                </Typography>
                <Typography variant='body1'>
                   Role : {props.user?.role}
                </Typography>
            </Paper>
        </div>
    )
}