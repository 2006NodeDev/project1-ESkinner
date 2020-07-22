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

export const FloridaVotingComponent: FunctionComponent<any> = (props) => {
    const classes = useStyles();
    const [clicks, changeClicks] = React.useState(0)

    return(
<Card className={classes.root}>
      <CardActionArea>
        <CardMedia className ={classes.media}
        component="img"
        alt="image of florida"
        image="https://cdn.discordapp.com/attachments/438959227302576131/734996620311265310/3cbd668dea2cd3821ffae2a0ac52b75c.png"
        title="Florida"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Florida
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Florida delivered razor thin election margins for the past two decades. 
          Winning Florida would mean Democrats would only need to flip one more battleground state.
          Florida currently has {clicks} votes
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