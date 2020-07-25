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

export const MichiganVotingComponent: FunctionComponent<any> = (props) => {
    const classes = useStyles();
    const [clicks, changeClicks] = React.useState(0)

    return(
        <div>
<Card className={classes.root}>
      <CardActionArea>
        <CardMedia className ={classes.media}
        component="img"
        alt="image of Michigan"
        image="https://media.discordapp.net/attachments/438959227302576131/735002326380576849/6902204.png"
        title="Michigan"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Michigan
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Michigan currently has {clicks} votes
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={ () => changeClicks(clicks+1)}>
          Vote
        </Button>
      </CardActions>
    </Card>
    </div>
    )
}