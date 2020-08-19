import React from 'react';
import { Typography } from '@material-ui/core'
import goodboye from '../assets/goodboye.png'

const styles = {
	container: {
        backgroundColor: '#ecb6ff',
        paddingBottom: '50px',
        paddingTop: '50px',
    },
	header: {
		fontSize: '22px',
		width: '350px',
		// center the text
		marginLeft: 'auto',
		marginRight: 'auto',
		padding: '10px'
    },
	description: {
		fontWeight: '400',
	},
	link: {
        color: '#a87de7',
		fontWeight: 'bold',
		textDecoration: 'none'
    }
}

export class Footer extends React.Component {
    render(){
        return(
			<div style={styles.container}>
				<Typography variant="h3" color="textSecondary" style={styles.header}>We can't wait to see you there! In the meantime...</Typography>
				<img src={goodboye} width="auto" height="130px" style={{padding: '20px'}}/>
				<Typography variant="h3" color="textSecondary" style={styles.header}>Want to join EGaDS?</Typography>
				<Typography variant="subtitle1" color="textSecondary" style={styles.description}>Check out our <a href="https://www.facebook.com/groups/egadsaustin/" style={styles.link}>Facebook</a> page! Also, feel free to</Typography>
				<Typography variant="subtitle1" color="textSecondary" style={styles.description}>join our <a href="https://discord.gg/4ShtMPx" style={styles.link}>Discord</a> server and talk to other members!</Typography>
            </div>
        );
    }
}