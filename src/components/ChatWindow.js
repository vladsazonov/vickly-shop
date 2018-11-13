import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import '../css/Dialog.css'
import ListItem from "@material-ui/core/ListItem/ListItem";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import Icon from "@material-ui/core/Icon/Icon";
import SendIcon from '@material-ui/icons/Send'

const message = 'Опять на работу сука блять';
const image = 'https://pp.userapi.com/c604521/v604521198/21993/7DxyyX7M-YY.jpg';
const name = 'Константин Константинович Константинопольский';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
});

class ChatWindow extends React.Component {

    render() {
        const {classes} = this.props;
        return (
                <Grid container wrap="nowrap" spacing={16} style={{padding: 0}}>
                    <Grid item>
                    <TextField
                        id="outlined-bare"
                        fullWidth
                        defaultValue="Bare"
                        margin="normal"
                        variant="outlined"
                    />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" className={classes.button}>
                            Send
                            <SendIcon/>
                        </Button>
                    </Grid>
                </Grid>

        );
    }
}

export default withStyles(styles, {withTheme: true})(ChatWindow);
