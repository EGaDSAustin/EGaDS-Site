import React from 'react';
import { Link } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'

import { Tabs, Tab } from '@material-ui/core';
import styled from 'styled-components'
import icon from '../assets/jamlogo.png'


const StyledTabs = styled(Tabs)`
    font-family: Roboto Condensed, Arial, Helvetica, sans-serif;
    background: transparent;
    color: black;
    font-weight: bold;
`

function ScrollToTop() {
    window.scrollTo({top: 0, behavior:'smooth'});
}

export class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    //NONCRITICAL TODO: Don't jump to home and scroll from register
    render() {
        return (
            <React.Fragment>
                <a href="/gamejam"><img src={icon} alt='navbar icon' style={{marginTop: '20px', width:'70px', height: 'auto'}}/></a>
                    <StyledTabs centered style={{marginTop: '0'}} className="navbar">
                        <Tab value={0} label="Home" to="/gamejam" onClick={ScrollToTop} component={Link} />
                        <Tab value={1} label="About" to="/gamejam#about" smooth component={NavHashLink}/>
                        {/* <Tab value={2} label="Register" to="/#register" smooth component={NavHashLink}/> */}
                        <Tab value={2} label="Schedule" to="/gamejam#schedule" smooth component={NavHashLink}/>
                        <Tab value={3} label="Games" to="/gamejam#games" smooth component={NavHashLink}/>
                        <Tab value={4} label="Sponsors" to="/gamejam#sponsors" smooth component={NavHashLink}/>
                        <Tab value={5} label="Theme" to="/theme" smooth onClick={ScrollToTop} component={Link} />
                        <Tab value={6} label="Submit" to="/submit" smooth onClick={ScrollToTop} component={Link} />
                    </StyledTabs>
            </React.Fragment>
            
        );
    }
}