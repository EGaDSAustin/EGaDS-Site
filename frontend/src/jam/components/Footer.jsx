import React from "react";
import { Typography, Link, SvgIcon } from "@material-ui/core";
import goodboye from "../assets/goodboye.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";
import YouTubeIcon from "@material-ui/icons/YouTube";

import { ReactComponent as DiscordIcon } from "../../assets/Discord-Logo-White.svg";

const styles = {
    container: {
        backgroundColor: "#ecb6ff",
        paddingBottom: "50px",
        paddingTop: "50px",
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
        fontSize: "20px",
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
        width: "25%",
    },
};

export class Footer extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <Typography variant="h3" color="textSecondary" style={styles.header}>
                    We can't wait to see you there! In the meantime...
                </Typography>
                <img
                    src={goodboye}
                    width="auto"
                    height="150px"
                    style={{ padding: "20px" }}
                />
                <Typography variant="h3" color="textSecondary" style={styles.header}>
                    Want to join EGaDS?
                </Typography>
                <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    style={styles.description}
                >
                    Check out our socials!
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
        );
    }
}
