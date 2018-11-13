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

const styles = {
    root: {
        overflow: 'hidden',
    },
    wrapper: {

    },
    paper: {
        boxShadow: 0,
        borderRadius: 0,
        margin: 0,
        overflow: 'hidden',
    },
};
const message = 'Опять на работу сука блять';
const image = 'https://pp.userapi.com/c604521/v604521198/21993/7DxyyX7M-YY.jpg';
const name = 'Константин Константинович Константинопольский';

class Dialog extends React.Component {

    render() {
        return (
            <ListItem disableGutters={true} button>
                <Grid container wrap="nowrap" spacing={16} style={{padding: 0}}>
                    <Grid item>
                        <Avatar>
                            <img
                                src={image}
                                style={{width: 55}}/>
                        </Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography variant="body2" noWrap>{name}</Typography>
                        <Typography variant="caption" noWrap>{message}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="caption">22/06/18</Typography>
                    </Grid>
                </Grid>
            </ListItem>

        );
    }
}
export default Dialog;