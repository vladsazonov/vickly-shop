import React from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import withStyles from "@material-ui/core/es/styles/withStyles";
import SendOutlined from '@material-ui/icons/SendOutlined';
import AttachFile from '@material-ui/icons/AttachFile';
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import IconButton from "@material-ui/core/IconButton/IconButton";

const styles = theme => ({
    textField: {
        width: 'calc(100% - 48px)',
        margin: 6,
        marginRight: 0,
        height: 41,
        backgroundColor: '#fff',
    },
    position: {
        height: 54,
        backgroundColor: theme.palette.primary.light,
        bottom: 0,
        display: 'inline-flex',
        position: 'fixed',
        right: 0,
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            left: 0,
        },
            left: '30%',
        borderTop: '1px solid #e2e2e2',
        borderLeft: '1px solid #e2e2e2',
    },
    iconButton: {
        width: 48,
        height: 48,
        alignSelf: 'center',
        color: theme.palette.secondary.dark
    }
});

class SendMessageBar extends React.Component {
    state = {
        messageText: ""
    };

    handleSendButton = () => {
        if (!this.state.messageText.trim())
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

                    type="text"
                    value={this.state.messageText}
                    onChange={this.handleOnTextChange}
                    className={classes.textField}
                    placeholder="Введите сообщение..."
                    variant="outlined"
                    onKeyDown={this.onEnterDown}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end" color="secondary">
                                <IconButton disabled={!this.state.messageText.trim()}
                                            onClick={this.handleSendButton.bind(this)}>
                                    <SendOutlined/>
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <IconButton className={classes.iconButton}>
                    <AttachFile/>
                </IconButton>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(SendMessageBar);