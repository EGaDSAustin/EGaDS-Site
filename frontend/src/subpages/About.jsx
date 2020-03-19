import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const mediaList = [
    {
        name: 'Facebook',
        img: 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png',
        ref: 'https://www.facebook.com/groups/egadsaustin/',
        altText: 'facebook'
    },
    {
        name: 'Discord',
        img: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-512.png',
        ref: 'https://discord.gg/4ShtMPx',
        altText: 'discord'
    },
    {
        name: 'Youtube',
        img: 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-512.png',
        ref: 'https://www.youtube.com/user/egadsaustin',
        altText: 'youtube'
    },
    {
        name: 'Twitter',
        img: 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-512.png',
        ref: 'https://twitter.com/EGaDSAustin',
        altText: 'twitter'
    }, 
]

const officerList = [
    {
        name:'',
        position:'',
        email:'',
        phone:'',
        height:'',
        width:''
    }




]

const About = (props) => {
    return (
        <div id='about'>
            <Container>
                <Row>
                    <Col>
                            //We can insert the blurb here     
                    </Col>
                </Row>
            </Container>
        </div>



    );
}

export default About;