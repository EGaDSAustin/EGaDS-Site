import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import { browserHistory } from 'react-router';
import "./app.css";
import GlobalStyle from './components/styles.js';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import imageMapResize from 'image-map-resizer'
// import { TestForm } from "/forms"

import { Navbar } from './components/Navbar';
import { Title } from './components/Title';
import { Register } from './components/Register';
import { SignUp } from './components/SignUp';
import { Schedule } from './components/Schedule';
import { Games } from './components/Games';
import { Sponsors } from './components/Sponsors';
import { Footer } from './components/Footer';
import { Theme } from './components/Theme';
import jellyLong from './assets/jellylong4.png';

import { Link as RouterLink } from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import { Typography } from '@material-ui/core';
// import MobileNavbar from './components/mobile/MobileNavbar.jsx';


const formUrl = "https://forms.gle/gDWmRyD17iM6np3f9"

class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 0);
      imageMapResize();
    }
  
    render() {     
      return null;
    }
}

function ScrollToTop() {
  window.scrollTo({top: 0, behavior:'smooth'});
}

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
            <Router 
            // history={browserHistory}
            onUpdate={hashLinkScroll}
            >
            <GlobalStyle/>
            <Navbar/>
            <Switch>
              <Route exact path="/gamejam" render={routeProps => (
                  <div>
                    <ScrollToTopOnMount/>
                    <br/>
                      <div id='title'><Title/></div>
                      {/* <div id='register'><Register/></div> */}
                      <Fab disabled = "true" variant="extended" aria-label="add" color="primary" to="/theme" onClick={ScrollToTop} component={RouterLink}>
                        Theme TBA!
                      </Fab>
                      <img src={jellyLong} style={{ width: '100%', marginBottom: '-10px'}} />
                      <div style={{backgroundColor: '#ecb6ff'}}>
                        <div id='signup'><SignUp/></div>
                        <div id='schedule'><Schedule/></div>
                        <div id='games'><Games/></div>
                        <div id='sponsors'><Sponsors/></div>
                        <Footer/>
                      </div>
                    </div>
              )}/>
              <Route path="/theme" component={Theme}/>
              <Route path='/submit' component={() => { 
                window.location.href = "https://itch.io/jam/ut-game-jam-2019"; 
                return null;
                }}/>
            </Switch>
            </Router>
            </MuiThemeProvider>
        );
    }
}


function hashLinkScroll() {
    const { hash } = window.location;
        if (hash !== '') {
        // Push onto callback queue so it runs after the DOM is updated,
        // this is required when navigating from a different page so that
        // the element is rendered on the page before trying to getElementById.
        setTimeout(() => {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) element.scrollIntoView();
        }, 0);
    }
}



let dark_color = '#5D5116';
let darker_color = '#302F0C';
let light_green = '#968326'
let caption_color = '#494B4E';
let accent_color = '#E4C400';
let white = '#FFFFFF';
let orange = '#DC7F23';
let yellow = "#F6B637";

let purple      = '#d36bff';
let dark_purple = '#9441ec';
let blue        = '#20b4ff';
let dark_blue   = '#1579d5';

// global style
const theme = createMuiTheme({
    typography: {
      h1: {
        fontFamily: 'Roboto Condensed, sans-serif',
        color: 'black',
        fontSize: '62px',
        lineHeight: '1.1em',
        letterSpacing: 'normal',
        fontWeight: '600'
      },
      h2: {
        fontFamily: 'Roboto Condensed, sans-serif',
        color: 'black',
        fontSize: '40px',
        lineHeight: '1.1em',
        letterSpacing: 'normal',
        fontWeight: '600'
      },
      h3: {
        fontFamily: 'Roboto Condensed, sans-serif',
        color: 'black',
        fontSize: '28px',
        fontWeight: '600',
        letterSpacing: 'normal',
        lineHeight: '1.4em',
      },
      h4: {
        fontFamily: 'Gill Sans / Gill Sans MT, sans-serif',
        color: dark_purple,
        fontSize: '30px',
        fontWeight: 'bold',
        letterSpacing: 'normal',
        lineHeight: '1.4em',
      },
      body1: {
        fontFamily: 'Gill Sans / Gill Sans MT, sans-serif',
        color: 'black',
        fontSize: '14px',
        letterSpacing: 'normal',
        lineHeight: '1.8em',
      },
      subtitle1: {
        fontFamily: 'Gill Sans / Gill Sans MT, sans-serif',
        color: 'black',
        fontSize: '18px',
        fontWeight: '600',
        letterSpacing: 'normal',
        lineHeight: '1.5em',
      },
    },

    palette: {
        primary: {
          main: blue,
          light: blue,
          dark: dark_blue
        },
        secondary: {
          main: white
        },
        text: {
          primary: blue,
          secondary: white
        }
    },
    overrides: {
        // Register button
        MuiFab: {
            label: {
                width: '130px'
            },
            primary: {
                backgroundColor: blue,
                color: 'white'
            },
            root: {
                
                textTransform: 'normal',
                fontFamily: 'Gill Sans / Gill Sans MT, sans-serif',
                color: 'white',
                fontSize: '16px',
                lineHeight: '1.4em',
                letterSpacing: 'normal',
                fontWeight: '600',
                boxShadow: 'none'
            },
      },
      // Navbar button
      MuiTab: {
        root: {
          fontFamily: 'Roboto Condensed, sans-serif',
          fontWeight: '600',
          letterSpacing: 'normal',
          lineHeight: '1em',
          textTransform: 'none',
          minHeight: '0px'
        },
        textColorInherit: {
          color: 'black',
          opacity: 1
        }
      },
    },
});


export default App;