import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Avatar from "@material-ui/core/Avatar";
import Img from '../images/mesB.jpg'
import {Button, Divider, List, Typography} from "@material-ui/core";
import {ListItem} from "semantic-ui-react";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        margin: 20,
        justifyContent: 'space-between',
    },
    img: {
        width: 55,
        height: 55,
        marginRight: 10,
    },
    imgMod: {
        width: 400,
        height: 400,
        marginRight: 10,
    },
    caption: {
        marginRight: 50,

    },
    captionMod: {
        marginRight: 50,
    },

    buttonOk: {
        borderColor: theme.palette.primary.confim,
        color:  theme.palette.primary.confim,
        marginRight: 10,
    },
    buttonNo: {
        borderColor: theme.palette.primary.decline,
        color:  theme.palette.primary.decline,
        marginRight: 10,
    },
    paper: {
        maxWidth: '50%',
    }
});

const lotName = 'Меч арзула';
const description = 'Супер крутой мечь который я дропнул с Варизла 88 лвл с дополнительным бафом на +37 к друиду нахуй';
const price = '3000p';
const game = 'Linage 2';
const user = 'Nagibator322';
const type = 'Обычная продажа';

class Lot extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        setOpen: false,
    };

    handleClickOpen = () => {
      this.setState(state => ({setOpen: !state.setOpen}))
    };

    handleClose = () => {
        this.setState(state => ({setOpen: !state.setOpen}))
    };


    render() {
        const {classes, theme} = this.props;

        return (
            <div className={classes.root}>
                <div><img alt="Remy Sharp" src={Img} className={classes.img}/></div>

                <div className={classes.caption}>
                    <Typography variant="title">{lotName}</Typography>
                    <Typography variant="Subheading">{description}</Typography>
                </div>

                <div style={{marginRight: 10,}}>
                    <Typography variant="overline" style={{marginLeft: 5}}> {game}</Typography>
                </div>

                <div style={{marginRight: 20}}>
                    <Typography variant="button">{price}</Typography>
                </div>

                <div style={{marginRight: 20}}>
                    <Typography variant="button">Продавец: {user}</Typography>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Lot);