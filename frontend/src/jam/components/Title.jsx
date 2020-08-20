import React from 'react';
import { Container, Typography } from '@material-ui/core'
import heroImage from '../assets/fruitbanner.png';
import InfoCard from './InfoCard.jsx';
import Grid from '@material-ui/core/Grid';
import whoImage from '../assets/infoGrid/orange.png';
import whatImage from '../assets/infoGrid/pear.png';
import whereImage from '../assets/infoGrid/strawberry.png';
import whyImage from '../assets/infoGrid/grape.png';
import RegisterImage from '../assets/infoGrid/apricot.png';
import jamLogo from '../assets/jamlogo.png';


export class Title extends React.Component {
    render() {
        return (
            <Container>
                {/* zIndex shows stack position, must have position set to work */}
                <div className="title" style={{ marginBottom: '20px', zIndex: '6', position: 'relative' }}>
                    <Typography variant="h1" >ut game jam 2020</Typography>
                </div>

                {/* zIndex shows stack position, must have position set to work */}
                <div className="title_description" style={{ zIndex: '6', position: 'relative' }}>
                    <Typography variant="subtitle1">September 17th - 20th // 64 hours</Typography>
                </div>

                <img src={heroImage} height="100%" width="100%" position="relative" style={{ marginTop: '50px', zIndex: '0' }} />

                <Typography variant="h3" style={{ paddingTop: '40px' }} id="about">Come join us in making games,</Typography>
                <Typography variant="h3">friends, and memories!</Typography>
                <Grid container spacing={9}>
                    <Grid item xs={6}>
                        <InfoCard
                            category='Who?'
                            photo={whoImage} alt_text='who_image'
                            description={
                                <div>
                                    <Typography variant="subtitle1">This event is hosted by <a href="https://www.facebook.com/groups/egadsaustin/">EGaDS!</a>, a student
                                    organization dedicated to fostering game development on UT campus. It's open to all skill levels and is free to attend!</Typography>
                                </div>
                            } /></Grid>
                    <Grid item xs={6}>
                        <InfoCard
                            category='What?'
                            photo={whatImage} alt_text='what_image'
                            description="UT Game Jam is a 64 hour event where participants make a game in teams mentored by professional game developers from studios like Niantic, EA, and Magic Leap!" />
                    </Grid></Grid>

                <Grid container spacing={4} justify="center" id="register">
                    <Grid item xs={5}>
                        <InfoCard
                            category='Where?'
                            photo={whereImage} alt_text='where_image'
                            description={
                            <div>
                            <Typography variant="subtitle1">
                                On the <a href="https://www.facebook.com/groups/egadsaustin/">UT Game Jam 2020 Discord server!</a> We're all about practicing social distancing and staying safe.
                            </Typography>
                        </div>
                        }/>
                    </Grid>
                    <Grid item xs={5}>
                        <InfoCard
                            category='Why?'
                            photo={whyImage} alt_text='why_image'
                            description="Better your game development skills add to or begin your portfolio, and connect with your student team and industry mentor." />
                    </Grid></Grid>
                <img src={RegisterImage} alt='register image' style={{ maxWidth: '100%', width: 'auto', height: '250px', position: 'relative', top: '-80px', marginBottom: '-80px' }} />
            </Container>
        );
    }
}