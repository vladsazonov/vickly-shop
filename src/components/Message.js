import React from 'react';
import Avatar from "@material-ui/core/Avatar/Avatar";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography/Typography";
import div from "@material-ui/core/Grid/Grid";
import loginService from "../services/loginService"

const styles = theme => ({
    root: {
        display: 'flex',
        marginLeft: 25,
        maxWidth: '30%',
        marginBottom: 15,
    },
    avatar: {
        alignSelf: 'flex-end',
        marginRight: 9,
    },
    fromMe: {
        backgroundColor: '#eef2ff',
        borderRadius: 9,
        padding: 6,

    },
    toMe: {
        backgroundColor: '#eef2ff',
        borderRadius: 19,
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        display: 'inline-flex',
    },
    messageBlock: {
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
    },
});

function handleDelete() {
    alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

function handleClick() {
    alert('You clicked the Chip.'); // eslint-disable-line no-alert
}

class Message extends React.Component {

    getRandomColor = (letter) => {
        let col = this.colorMap[letter];
        if (col) return col;
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    colorMap = {
        "Р": "#2ab49b",
        "А": "#d15c17",
        "И": "#9e72cf"

    };

    formatDate = (timestamp) => {
        const now = new Date(Date.now());
        let date = new Date(timestamp);
        const today = now.toDateString() == date.toDateString();
        const mins = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        if (today) {
            return date.getHours() + ":" + mins;
        } else {
            return date.getHours() + ":" + mins + " " + date.getDay() + "/" + date.getMonth() + "/" + (date.getFullYear() - 2000);
        }
    };

    returnName(fromMe) {
        return fromMe ?
            loginService.getCreds().first_name[0].toUpperCase() + loginService.getCreds().last_name[0].toUpperCase()
            :
            this.props.userInfo.first_name[0].toUpperCase() + this.props.userInfo.last_name[0].toUpperCase();
    }

    render() {
        // Was the message sent by the current user. If so, add a css class
        const fromMe = this.props.fromMe ? 'from-me' : '';
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.avatar}>
                    <Avatar style={{width: 35, height: 35,}}>
                        {
                            fromMe ?
                                loginService.getCreds().first_name[0].toUpperCase() + loginService.getCreds().last_name[0].toUpperCase()
                                :
                                this.props.userInfo.first_name[0].toUpperCase() + this.props.userInfo.last_name[0].toUpperCase()
                        }
                    </Avatar>
                </div>

                <div className={classes.messageBlock}>
                    <Typography
                        variant="body2"> {fromMe ? loginService.getCreds().first_name : this.props.userInfo.first_name} </Typography>
                    <div className={fromMe ? classes.fromMe : classes.toMe}>
                        <Typography variant="body1" style={{padding: 8}}>{this.props.message} </Typography>
                        <Typography variant="caption" style={{
                            margin: 10,
                            color: '#bbb'
                        }}>{this.formatDate(this.props.messageInfo.timestamp_post.timestamp)}</Typography>
                    </div>
                </div>
            </div>
        );
    }
}

Message.defaultProps = {
    message: '',
    username: '',
    fromMe: false
};

Message.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Message);