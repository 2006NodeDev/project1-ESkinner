import React, { useState } from 'react';
import './App.css';
import { UpdateComponent } from './components/updateComponent/UpdateComponent';
import { LoginComponent } from './components/loginComponent/LoginComponent';
import { NavBarComponent } from './components/navBarComponenet/navBarComponent';
import { FloridaVotingComponent } from './components/votingComponent/FloridaVotingComponent';
import { NorthCarolinaVotingComponent } from './components/votingComponent/NorthCarolinaCompenent';
import { MichiganVotingComponent } from './components/votingComponent/MichiganVotingComponent';
import Grid from '@material-ui/core/Grid';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { User } from './models/User';
import { NewUserComponent } from './components/newUserComponent/NewUserComponent';
import {UserDisplayComponent} from './components/userComponenet/UserDisplay'


function App() {
  const [currentUser, changeCurrentUser] = useState<null | User>(null)
  return (

    <div className="App">
      
      <Router>
      <NavBarComponent></NavBarComponent>
        <Route path='/login' render={(props)=>(<LoginComponent changeCurrentUser={changeCurrentUser} {...props} />)} />
      <Route path='/vote'>
      <Grid container spacing={1}>
        <Grid item md={4}>
        <FloridaVotingComponent></FloridaVotingComponent>
        </Grid>
        <Grid item md={4}>
        <NorthCarolinaVotingComponent></NorthCarolinaVotingComponent>
        </Grid>
        <Grid item md={4}>
        <MichiganVotingComponent></MichiganVotingComponent>
        </Grid>
      </Grid>
      </Route>
      <Route path='/updateUser'>
      <UpdateComponent></UpdateComponent>
      </Route>
      <Route path='/newUser' render={(props)=>(<NewUserComponent changeCurrentUser={changeCurrentUser} {...props} />)} />
      <Route path='/userInfo'>
      <UserDisplayComponent user={currentUser}></UserDisplayComponent>
      </Route>
    </Router>
     
    </div>
  );
}

export default App;
