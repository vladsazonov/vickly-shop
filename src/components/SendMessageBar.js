import React from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/es/styles/withStyles";
import SendOutlined from '@material-ui/icons/SendOutlined';
import AttachFile from '@material-ui/icons/AttachFile';
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import IconButton from "@material-ui/core/IconButton/IconButton";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    position: {
        bottom: 0,
        width: '100%',
        display: 'inline-flex',
        overflow: 'hidden',
        position: 'fixed',
        right: 0,
        [theme.breakpoints.up('sm')]: {
            left: '35%',
            width: 'auto!important',
        },
        [theme.breakpoints.up('md')]: {
            left: '33%',
            width: 'auto!important',
        },
        [theme.breakpoints.up('lg')]: {
            left: '30%',
            width: 'auto!important',
        },
    },
    iconButton: {

    }
});

class SendMessageBar extends React.Component {
    state = {
        messageText: ""
    };

    handleSendButton = () => {
        if(!this.state.messageText.trim())
            return;
        this.props.handleSendMessage({
            message: this.state.messageText,
            fromMe: true
        });
        this.setState({
            messageText: ""
        })
    };

    handleOnTextChange = (e) => {
        this.setState({
            messageText: e.target.value
        });
    };

    onEnterDown = (event) => {
        // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.handleSendButton();
        }
    };

    render() {

        const {classes, theme} = this.props;

        return (
            <div className={classes.position}>
                <TextField
                    id="outlined"
                    value={this.state.messageText}
                    onChange={this.handleOnTextChange}
                    style={{width: '95%', margin: 6, marginRight: 0}}
                    placeholder="Введите сообщение..."
                    onKeyDown={this.onEnterDown}
                    //helperText="Full width!"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton disabled={!this.state.messageText.trim()} onClick={this.handleSendButton.bind(this)}>
                                    <SendOutlined/>
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <IconButton style={{width: 48, height: 48, margin: 'auto'}}>
                    <AttachFile/>
                </IconButton>
            </div>
        )
    }
}

SendMessageBar.propTypes = {
    classes: PropTypes.object.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(SendMessageBar);