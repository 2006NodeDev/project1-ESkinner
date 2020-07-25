import React, { FunctionComponent } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export const NavBarComponent: FunctionComponent<any> = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <nav>
            <AppBar position="static">
                <Toolbar >
                    <IconButton onClick={handleClick} edge="start" className={classes.menuButton} color="default" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}><Link to='/profile' style={{ textDecoration: 'none', color: 'black' }}>Profile</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to='/login' style={{ textDecoration: 'none', color: 'black' }}>Login</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to='/vote' style={{ textDecoration: 'none', color: 'black' }}>State List</Link> </MenuItem>
                        <MenuItem onClick={handleClose}><Link to='/newUser' style={{ textDecoration: 'none', color: 'black' }}>Create A New User</Link> </MenuItem>
                        <MenuItem onClick={handleClose}><Link to='/updateUser' style={{ textDecoration: 'none', color: 'black' }}>Update Profile</Link> </MenuItem>
                        <MenuItem onClick={handleClose}><Link to='/userInfo' style={{ textDecoration: 'none', color: 'black' }}>Check User Info</Link> </MenuItem>
                    </Menu>
                    <Typography variant="h6" className={classes.title}>
                        Info
          </Typography>
                </Toolbar>
            </AppBar>
        </nav>
    )
}