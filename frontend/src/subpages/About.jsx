import React from 'react';


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
/*
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
*/

const SocialMedias = ({logo}) => {
    return (
            <a href = {logo.ref}><img style = {{
                height:40,
                width:40,
                }} 
                src={logo.img}
                 alt={logo.altText}
                /></a>
    )
}


const Media = (props) => {
    return(
        <h1>
            {mediaList.map((m, idx) => <SocialMedias logo ={m} key ={idx}/>)}
        </h1>
    );
}

const About = (props) => {
    return (
        <div id='about' style  ={{backgroundColor : '#60666C', padding : '2vw'}}>
            <h1 style = {{
                color : "lightBlue",
                fontSize : '50px'
            }}>
                About Us:
            </h1>
            We can insert information about our organization here
        
         <Media />
        
        
        </div>
    );
}

export default About;