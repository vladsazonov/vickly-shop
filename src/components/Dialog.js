import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import ListItem from "@material-ui/core/ListItem/ListItem";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/es/styles/withStyles";

const message = 'Опять на работу сука блять';
const image = 'https://pp.userapi.com/c604521/v604521198/21993/7DxyyX7M-YY.jpg';
const name = 'Константин Константинович Константинопольский';
const date = '22/06/18';

const styles = {
    fixWidth: {
        width: '100% !important',
        margin: '0px !important',
        paddingLeft: 5,
        paddingTop: 8,
        paddingBottom: 8,
        borderBottom: '1px solid #ebebeb',
    },
    fixPadding: {
        marginRight: 6,
        marginTop: 10,
        padding: 0,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 9,
    },
    contentPadding: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 9,
    },
};

class Dialog extends React.Component {

    render() {
        const {classes, dialog} = this.props;
        return (
            <ListItem disableGutters={true} button style={{padding: 'unset'}}>
                <Grid container className={classes.fixWidth} wrap="nowrap" spacing={16}>
                    <Grid item md={16} style={{paddingRight: 1}}>
                        <Avatar style={{width: 50, height: 50}}>
                            <img
                                src={image}
                                style={{width: 55}}
                                alt="ProfilePhoto"
                            />
                            {dialog.first_name[0]}
                        </Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth style={{paddingTop: 14}}>
                        <Typography variant="body2" noWrap>{dialog.first_name+" "+dialog.last_name}</Typography>
                        <Typography variant="caption" noWrap>{"..."}</Typography>
                    </Grid>
                    <Grid item className={classes.fixPadding} style={{paddingLeft: 1, paddingTop: 15}}>
                        <Typography variant="caption">{date}</Typography>
                    </Grid>
                </Grid>
            </ListItem>

        );
    }
}

Dialog.propTypes = {
    classes: PropTypes.object.isRequired,
    dialog: PropTypes.object.isRequired
};

export default withStyles(styles)(Dialog);