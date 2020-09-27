import React from "react";
import { Typography, Container, Box, Link } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import cn from "classnames";

import splash from "./assets/photos/carmen.jpg";

import torus from "./assets/blueshape1.png";
import twisty from "./assets/blueshape3.png";
import sheets from "./assets/blueshape2.png";
import hole from "./assets/blueshape5.png";
import ball from "./assets/blueshape4.png";

import Bork from './components/Bork';

const styles = (theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        backgroundImage: `linear-gradient(${theme.palette.gradient.primary} 0%, ${theme.palette.gradient.secondary} 75%, ${theme.palette.gradient.tertiary} 100%)`,
    },
    splash: {
        height: "100vh",
        textAlign: "center",
        backgroundImage: `url(${splash})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    splashText: {
        color: "white",
        position: "relative",
        zIndex: "2",
        fontFamily: "inherit",
        fontWeight: "bold",
        letterSpacing: "0.069em",
        paddingLeft: "0.069em",
    },
    splashTextBox: {
        position: "absolute",
        top: "80%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "16px",
        backgroundColor: "rgba(0,0,0,0.420)",
        borderRadius: "8px",
    },
    textBox: {
        padding: "16px",
        backgroundColor: "rgba(0,0,0,0.420)",
        borderRadius: "8px",
    },
    splashImg: {
        height: "100%",
        verticalAlign: "top",
    },
    footer: {
        backgroundColor: theme.palette.primary,
        color: "#1296da",
    },
    box0: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        width: "69%",
        padding: "32px",
        margin: "16px auto",
        position: "relative",
    },
    box1: {
        padding: "32px",
        color: theme.palette.text.primary,
        width: "50%",
        minWidth: "300px",
        position: "relative",
        zIndex: "2",
        boxSizing: "border-box",
        fontFamily: "inherit",
    },
    goodBoye: {
        width: "100%",
        position: "relative",
    },
    bestBoye: {
        width: "100%",
        verticalAlign: "top",
        borderRadius: "6.90px",
    },
    bestBoyeBox: {
        border: "4px solid white",
        borderRadius: "6.90px",
        padding: "0",
        width: "100%",
        display: "inline-block",
        margin: "auto",
        position: "relative",
    },
    boxShadowLeft: {
        boxShadow: "-8px 8px 4px rgba(0,0,0,0.3)",
    },
    boxShadowRight: {
        boxShadow: "8px 8px 4px rgba(0,0,0,0.3)",
    },
    bestBoyeBorderRight: {
        position: "absolute",
        border: `4px solid ${theme.palette.text.title}`,
        width: "100%",
        height: "100%",
        top: "2.5px",
        left: "4px",
        borderRadius: "6.90px",
    },
    bestBoyeBorderLeft: {
        position: "absolute",
        border: `4px solid ${theme.palette.text.title}`,
        width: "100%",
        height: "100%",
        top: "2.5px",
        left: "-12px",
        borderRadius: "6.90px",
    },
    titleLeft: {
        color: theme.palette.text.title,
        padding: "8px",
        paddingRight: "0",
        fontFamily: "inherit",
        fontWeight: "bold",
        textShadow: "-1px 2px 1px rgba(0,0,0,0.3)",
    },
    titleRight: {
        color: theme.palette.text.title,
        padding: "8px",
        paddingLeft: "0",
        fontFamily: "inherit",
        fontWeight: "bold",
        textShadow: "1px 2px 1px rgba(0,0,0,0.3)",
    },
    titleMiddle: {
        color: theme.palette.text.title,
        padding: "8px",
        fontFamily: "inherit",
        fontWeight: "bold",
        textAlign: "center",
        textShadow: "0px 2px 1px rgba(0,0,0,0.3)",
    },
    paragraph: {
        fontFamily: "inherit",
    },
    link: {
        fontFamily: "inherit",
        color: theme.palette.text.title,
        underline: "hover",
        fontWeight: "bold",
    },
    body: {
        backgroundColor: theme.palette.background.default,
        maxWidth: "100vw",
        position: "relative",
        overflow: "hidden",
        top: "100%",
    },
    leftBox: {
        textAlign: "right",
        textShadow: "-1px 2px 1px rgba(0,0,0,0.3)",
    },
    rightBox: {
        textAlign: "left",
        textShadow: "1px 2px 1px rgba(0,0,0,0.3)",
    },
    centerBox: {
        textAlign: "center",
        textShadow: "0px 2px 1px rgba(0,0,0,0.3)",
    },
    shape: {
        position: "absolute",
        height: "auto",
        minWidth: "500px",
    },
    torus: {
        top: "10%",
        left: "-33%",
        width: "60%",
    },
    twisty: {
        top: "-17%",
        right: "-27%",
        width: "60%",
    },
    sheets: {
        top: "60%",
        left: "-30%",
        width: "60%",
    },
    hole: {
        top: "35%",
        right: "-25%",
        width: "60%",
    },
    ball: {
        top: "85%",
        right: "-30%",
        width: "60%",
    },
    blurBox: {
        position: "absolute",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.069420)",
        zIndex: "1",
        borderRadius: "8px",
        backdropFilter: "blur(4.20px)",
    },
    social: {
        paddingLeft: "20px",
        paddingRight: "20px",
        color: "inherit",
    },
    connectBox: {
        alignItems: "normal",
    },
    transparentBox: {
        backgroundColor: "rgba(0,0,0,0.2)",
        borderRadius: "32px",
        padding: "16px",
        "&:hover": {
            backgroundColor: "rgba(0,0,0,0.30)",
        },
    },
    inlineBlock: {
        display: "inline-block",
    },
    lessTopPadding: {
        paddingTop: "20px",
    },
    gameText: {
        paddingTop: "15px",
        fontSize: "18px",
    },
    gameTextRight: {
        textAlign: "right",
        paddingBottom: "12px",
        fontSize: "18px",
    },
    quoteText: {
        fontSize: "20px",
        vairant: "h4",
    },
});


const games = [
    {
        type: "game",
        props: {
            name: "MY MINI MUSHROOM",
            img: "./assets/games/mushroom.png",
            ref: "http://google.com",
            alt: "good game",
        },

    },
    {
        type: "game",
        props: {
            name: "THE FALL",
            img: "./assets/games/fall.png",
            ref: "http://google.com",
            alt: "good game",
        },

    },
    {
        type: "game",
        props: {
            name: "REALM OF THE LOST SOCK",
            img: "./assets/games/sock.png",
            ref: "http://google.com",
            alt: "good game",
        },

    },
    {
        type: "quote",
        props: {
            text: "socks ahahahah",
        },

    },
    {
        type: "game",
        props: {
            name: "CHARMER",
            img: "./assets/games/charmer.png",
            ref: "http://google.com",
            alt: "good game",
        },

    },
    {
        type: "game",
        props: {
            name: "MY MINI MUSHROOM",
            img: "./assets/games/mushroom.png",
            ref: "http://google.com",
            alt: "good game",
        },

    },
    {
        type: "game",
        props: {
            name: "REALM OF THE LOST SOCK",
            img: "./assets/games/sock.png",
            ref: "http://google.com",
            alt: "good game",
        },

    },
    {
        type: "quote",
        props: {
            text: "socks hooray",
        },

    },
];

// generic row for showcase items
const ShowcaseRow = ({ classes, left, right, ...props }) => {
    return (
        <Box className={cn(classes.box0)}>
            <Box className={cn(classes.blurBox)}></Box>
            {left}
            {right}
        </Box>
    );
};

const QuoteLeft = ({ classes, quote, ...props}) => {
    return (
        <Box className={cn(classes.box1, classes.leftbox)}>
                <Typography className={cn(classes.quoteText)}>
                    {quote.text}
                </Typography>
            </Box>
    );
};

const QuoteRight = ({ classes, quote, ...props}) => {
    return (
        <Box className={cn(classes.box1, classes.rightBox)}>
                <Typography className={cn(classes.quoteText)}>
                    {quote.text}
                </Typography>
            </Box>
    );
};

// title on the bottom (will show up on left)
const GameLeft = ({ classes, game, ...props }) => {
    return (
        <Box className={cn(classes.box1)}>
            <a href={game.ref}>
                <Box
                    className={cn(
                        classes.bestBoyeBox,
                        classes.boxShadowLeft
                    )}
                >
                    <img
                        src={require(game.img + "")}
                        alt={game.alt}
                        className={cn(classes.bestBoye)}
                    />

                    <div className={cn(classes.bestBoyeBorderLeft)}> </div>
                </Box>
            </a>
            <Typography className={cn(classes.gameText)}>
                {game.name}
            </Typography>
        </Box>
    );
};

// title on the top (will show up on the right)
const GameRight = ({ classes, game, ...props }) => {
    return(
        <Box className={cn(classes.box1)}>
            <Typography className={cn(classes.gameTextRight)}>
                {game.name}
            </Typography>
            <a href={game.ref}>
                <Box
                    className={cn(
                        classes.bestBoyeBox,
                        classes.boxShadowLeft
                    )}
                >
                    <img
                        src={require(game.img + "")}
                        alt={game.alt}
                        className={cn(classes.bestBoye)}
                    />

                    <div className={cn(classes.bestBoyeBorderLeft)}> </div>
                </Box>
            </a>
                
            </Box>
    );
};

const GameShowcase = ({ classes, rootClassName, className, ...props }) => {
    // generate components for each game object
    let objs = [];
    games.map((game, idx) => {
        let obj;
        if (idx % 2 === 0) {
            if(game.type === "quote") {
                obj = 
                    <QuoteLeft 
                        quote={game.props}
                        classes={classes}
                    />;
            } else {
                obj = 
                    <GameLeft
                        game={game.props}
                        classes={classes}
                    />
            }
        } else {
            if(game.type === "quote") {
                obj = 
                    <QuoteRight 
                        quote={game.props}
                        classes={classes}
                    />;
            } else {
                obj = 
                    <GameRight
                        game={game.props}
                        classes={classes}
                    />
            }
        }
        objs[idx] = obj;
        return idx;
    });
    // group game objects into rows with two items each
    let rows = [];
    for(var i = 0; i < objs.length/2 + objs.length % 2; i ++) {
        rows[i] = [];
        rows[i][0] = objs[i * 2];
        if(i * 2 + 1 < objs.length) {
            rows[i][1] = objs[i * 2 + 1];
        }
    }
    
    return (
        <div className={cn(classes.root, rootClassName, className)}>
            {/* <Container className={cn(classes.splash)}>
                <Box className={cn(classes.splashTextBox)}>
                    <Box className={cn(classes.blurBox)}></Box>
                    <Typography className={cn(classes.splashText)}>
                        EGaDS! Game Showcase
                    </Typography>
                </Box>
            </Container> */}

            <Container className={cn(classes.body)} id="info">
                <Box className={cn(classes.box0)}>
                    <Box className={cn(classes.blurBox)}></Box>
                    <Box className={cn(classes.box1)}>
                        <Typography
                            variant="h4"
                            className={cn(classes.titleMiddle)}
                        >
                            GAMES
                        </Typography>
                        <Typography className={cn(classes.paragraph)}>
                            EGaDS! members make some omega cute video games blah
                            blah blah blah blah blahblah blah blahblah blah
                            blahblah blah blahblah blah blah EGaDS! members make
                            some omega cute video games blah blah blah blah blah
                            blahblah blah blahblah blah blahblah blah blahblah
                            blah blah EGaDS! members make some omega cute video
                            games blah blah blah blah blah blahblah blah
                            blahblah blah blahblah blah blahblah blah blah
                        </Typography>
                        <Box className={cn(classes.transparentBox)}>
                            <Typography
                                className={cn(
                                    classes.paragraph,
                                    classes.titleMiddle
                                )}
                            >
                                <Link
                                    href="https://itch.io/c/737435/games-by-egads-members"
                                    target="_blank"
                                    rel="noopener"
                                    className={cn(classes.link)}
                                >
                                    Check out all the games here!
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                
                {/* render showcase rows */}
                {rows.map((row, idx) => {
                    return (
                        <ShowcaseRow
                            left={row[0]}
                            right={row[1]}
                            classes={classes}
                            key={idx}
                        />
                    );
                })}
                
                <img
                    src={torus}
                    alt="torus"
                    className={cn(classes.shape, classes.torus)}
                />
                <img
                    src={twisty}
                    alt="twisty"
                    className={cn(classes.shape, classes.twisty)}
                />
                <img
                    src={sheets}
                    alt="sheets"
                    className={cn(classes.shape, classes.sheets)}
                />
                <img
                    src={hole}
                    alt="hole"
                    className={cn(classes.shape, classes.hole)}
                />
                <img
                    src={ball}
                    alt="ball"
                    className={cn(classes.shape, classes.ball)}
                />
            </Container>

            {/* footer */}
            <Bork socials="yes" woof="bork"/>
        </div>
    );
};

export default withStyles(styles)(GameShowcase);
