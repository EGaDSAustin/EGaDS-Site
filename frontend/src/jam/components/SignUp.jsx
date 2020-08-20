import React from "react";
import { Typography, Link, SvgIcon, Container, Grid } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";
import YouTubeIcon from "@material-ui/icons/YouTube";

import { ReactComponent as DiscordIcon } from "../../assets/Discord-Logo-Pure-White.svg";

const styles = {
    container: {
        backgroundColor: "#ecb6ff",
        paddingBottom: "50px",
        paddingTop: "50px",
    },
    subcontainer: {
        marginTop: '15px',
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "white",
        width: '55%',
        padding: '20px',
        zIndex: '99',
    },
    text: {
        color: 'black',
        width: '80%',
        paddingBottom: '15px',
        fontSize: '18px',
        marginLeft: '10%',
    },
    header: {
        fontSize: "22px",
        width: "350px",
        // center the text
        marginLeft: "auto",
        marginRight: "auto",
        padding: "10px",
    },
    description: {
        fontWeight: "400",
    },
    link: {
        color: "#a87de7",
        fontWeight: "bold",
        textDecoration: "none",
    },
    socials: {
        paddingLeft: "20px",
        paddingRight: "20px",
        color: "white",
    },
    box: {
        marginTop: "12px",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#a87de7",
        borderRadius: "32px",
        padding: "16px",
        width: "50%",
    },
};

export class SignUp extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <Typography variant="h2" color="textSecondary">
                    Registration
                </Typography>
                <div style={styles.subcontainer}>
                    <Typography variant = "h3" style={styles.text}>
                            All you have to do to register is fill out 
                            <Link href="https://forms.gle/DeGPcPmJc2anyRfT9"
                                target="_blank"
                                rel="noopener" 
                                style={styles.link}> this Google Form </Link> 
                                and then join the 
                                <Link href="https://discord.gg/FHs7hAN"
                                target="_blank"
                                rel="noopener" 
                                style={styles.link}> UT Game Jam 2020 Discord server! </Link> 
                    </Typography>
                    <Typography variant = "subtitle1" style={styles.text}>
                            The server will contain more information about the Game Jam, such as finding teams, participating, and the answers to any other questions you may have.
                    </Typography>
                    <Typography variant = "subtitle1" style={styles.text}>
                            Be sure to follow our other socials for updates on the Game Jam and our other events!
                    </Typography>

                    <div style={styles.box}>
                        <Typography align="center">
                            <Link
                                href="https://discord.com/invite/JnNPF6d"
                                target="_blank"
                                rel="noopener"
                                style={styles.socials}
                            >
                                <SvgIcon
                                    component={DiscordIcon}
                                    viewBox="0 0 220 220"
                                    fontSize="large"
                                />
                            </Link>
                            <Link
                                href="https://facebook.us16.list-manage.com/subscribe?u=91470f849ef822234cb47861a&id=34673605c6"
                                target="_blank"
                                rel="noopener"
                                style={styles.socials}
                            >
                                <MailIcon fontSize="large" />
                            </Link>
                            <Link
                                href="https://twitter.com/EGaDSAustin"
                                target="_blank"
                                rel="noopener"
                                style={styles.socials}
                            >
                                <TwitterIcon fontSize="large" />
                            </Link>

                            <Link
                                href="https://www.facebook.com/groups/egadsaustin"
                                target="_blank"
                                rel="noopener"
                                style={styles.socials}
                            >
                                <FacebookIcon fontSize="large" />
                            </Link>
                            <Link
                                href="https://www.youtube.com/user/egadsaustin"
                                target="_blank"
                                rel="noopener"
                                style={styles.socials}
                            >
                                <YouTubeIcon fontSize="large" />
                            </Link>
                        </Typography>
                    </div>
                </div>
            </div>
        );
    }
}
