import React, { FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 400,
    },
    media: {
      height: 400,
    },
  });

export const NorthCarolinaVotingComponent: FunctionComponent<any> = (props) => {
    const classes = useStyles();
    const [clicks, changeClicks] = React.useState(0)

    return(
<Card className={classes.root}>
      <CardActionArea>
        <CardMedia className ={classes.media}
        component="img"
        alt="image of north carolina"
        image="https://media.discordapp.net/attachments/438959227302576131/735001470612668486/snapshot-nc.png"
        title="North Carolina"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            North Carolina
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          North Carolina currently has {clicks} votes
          </Typography>        
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={ () => changeClicks(clicks+1)}>
          Vote
        </Button>
      </CardActions>
    </Card>
    )
}