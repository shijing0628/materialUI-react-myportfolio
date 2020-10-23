import React from 'react';
import './App.css';
import { Container, Grid } from '@material-ui/core'
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from './pages/Resume/Resume';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div>
      <Container className={'info_container'}>
        <Grid container >
          <Grid item lg={3} md={4} sm={12} xs={12}>
            <Profile />
          </Grid>
          <Grid item xs >
            <Header />
            <Router>
              <Switch>
                <Route path='/' exact>
                  <Resume />
                </Route>
                <Route path='/portfolio'>
                  <Portfolio />
                </Route>
              </Switch>
            </Router>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
