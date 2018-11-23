import React from 'react';
import '../css/Message.css'
import Chip from "@material-ui/core/Chip/Chip";
import Avatar from "@material-ui/core/Avatar/Avatar";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import { Button, Comment, Form } from 'semantic-ui-react';
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit,
    },
    messages: {
        display: 'flex',
    },
    ava: {
        borderRadius: 50,
    },
    fixWidth: {
        paddingLeft: 2,
        paddingTop: 3,
        paddingBottom: 3,
    },
    fromMe: {
        backgroundColor: '#99ffc4',
        width: 'fit-content',
        borderRadius: 9,
        padding: 6,
        maxWidth:  '38%'
    },
    toMe: {
        backgroundColor: '#efefef',
        width: 'fit-content',
        borderRadius: 9,
        padding: 6,
        maxWidth:  '38%'
    },
});

function handleDelete() {
    alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

function handleClick() {
    alert('You clicked the Chip.'); // eslint-disable-line no-alert
}

class Message extends React.Component {
    render() {
        // Was the message sent by the current user. If so, add a css class
        const fromMe = this.props.fromMe ? 'from-me' : '';
        const { classes } = this.props;

        return (
            <Grid container spacing={16} wrap="nowrap" style={{marginBottom: 20}}>
                <Grid item style={{alignSelf: 'flex-end'}}>
                    <Avatar style={{width: 40, height: 40}}>
                        kk
                    </Avatar>
                </Grid>
                <div className={ fromMe ? "speech-bubble" : "speech-bubblet"}>
                    <Grid item style={{margin: 7}}>
                        <Typography variant="body2"> { this.props.username } </Typography>
                        <Typography variant="body1" style={{overflowWrap: 'break-word',}}> { this.props.message } </Typography>
                        <Typography variant="caption">2 days ago</Typography>
                    </Grid>
                </div>
            </Grid>


            /*<Comment.Group>
                <Comment>
                    {/!*<Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/steve.jpg'/>*!/}
                    <Avatar style={{width: 45, height: 45}}>A
                    </Avatar>
                    <Comment.Content style={{backgroundColor: '#99ffc4',     width: 'fit-content', borderRadius: 15}}>
                        <div style={{padding: 10}}>
                        <Comment.Author as='a'>{ this.props.username }</Comment.Author>
                        <Comment.Metadata>
                            <div>2 days ago</div>
                        </Comment.Metadata>
                        <Comment.Text>  { this.props.message }</Comment.Text>
                        </div>
                    </Comment.Content>
                </Comment>
            </Comment.Group>*/
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