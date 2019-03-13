import React from 'react';
import Avatar from "@material-ui/core/Avatar/Avatar";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography/Typography";
import div from "@material-ui/core/Grid/Grid";

const styles = theme => ({
    root: {
        marginLeft: 25,
        marginBottom: 15,
    },
    avatar: {
        // alignSelf: 'flex-end',
        marginRight: 9,
        display: 'flex',
        alignItems: 'flex-end',
    },
    avatarIco: {
        width: 35,
        height: 35,
    },
    fromMe: {
        backgroundColor: '#eef2ff',
        borderRadius: 9,
        padding: 6,

    },
    toMe: {
        backgroundColor: '#eef2ff',
        borderRadius: 19,
        //   wordWrap: 'break-word',
        wordBreak: 'break-all,',
        //  overflowWrap: 'break-word',
        maxWidth: 500,
    },
    messageBlock: {
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        display: 'flex',

    },
    caption: {
        marginLeft: '8%',
        color: '#bbb',
        paddingRight: 4,
    },
    wrap: {
        maxWidth: 500,
        [theme.breakpoints.down('xs')]: {
            maxWidth: 300,
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: 300,
        },
        padding: 11,
        backgroundColor: '#efefef',
        borderRadius: 20,
    },
    mess: {},
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
        const today = now.toDateString() === date.toDateString();
        const mins = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        if (today) {
            return date.getHours() + ":" + mins;
        } else {
            //  return date.getHours() + ":" + mins + " " + date.getDay() + "/" + date.getMonth() + "/" + (date.getFullYear() - 2000);
            return date.getHours() + ":" + mins;
        }
    };

    render() {
        // Was the message sent by the current user. If so, add a css class
        const fromMe = this.props.fromMe ? 'from-me' : '';
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.messageBlock}>
                    <div className={classes.avatar}>
                        <Avatar className={classes.avatarIco}>
                            {this.props.userInfo.fullName[0].toUpperCase()}
                        </Avatar>
                    </div>
                    <div className={classes.wrap}>
                        <div style={{display: 'inline-flex', alignItems: 'center'}}>
                            <Typography
                                variant="body2">{this.props.userInfo.fullName}</Typography>
                            <Typography variant="caption"
                                        className={classes.caption}>{this.formatDate(this.props.messageInfo.timestamp_post.timestamp)}</Typography>
                        </div>
                        <Typography variant="body1" className={classes.mess}>{this.props.message}</Typography>
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