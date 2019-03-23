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
import Lot from './Lot'
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
    root: {
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #ececec',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
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
        overflow: 'hidden',
        whiteSpace: 'nowrap', /* Отменяем перенос текста */
padding: 5,
textOverflow: 'ellipsis',
alignItems: 'center',
    },
    captionMod: {
        marginRight: 50,
    },

    buttonOk: {
        borderColor: theme.palette.primary.confim,
        color: theme.palette.primary.confim,
        marginRight: 10,
    },
    buttonNo: {
        borderColor: theme.palette.primary.decline,
        color: theme.palette.primary.decline,
        marginRight: 10,
    },
    paper: {
        maxWidth: '50%',
    },
    butt: {
        cursor: 'pointer',
        display: 'flex',
        '&:hover': {
            backgroundColor: '#cacaca',
        },
    },
    progress: {
        margin: theme.spacing.unit * 2,
    },
});

const lotName = 'Меч арзула';
const description = 'Супер крутой мечь который я дропнул с Варизла 88 лвл с дополнительным бафом на +37 к друиду нахуй';
const price = '3000p';
const game = 'Linage 2';
const user = 'PapAlkash';
const type = 'Обычная продажа';

class BuyCard extends React.Component {

    constructor(props) {
        super(props);

    }

    state = {
        setOpen: false,
        setOpenProcessing: false
    };

    handleClickOpen = () => {
        this.setState(state => ({setOpen: !state.setOpen}))
    };

    handleClose = () => {
        this.setState(state => ({setOpen: !state.setOpen}))
    };

    handleClickOpenProcessing = () => {
        this.setState(state => ({setOpenProcessing: !state.setOpenProcessing}))
    };

    handleCloseProcessing = () => {
        this.setState(state => ({setOpenProcessing: !state.setOpenProcessing}))
    };


    render() {
        const {classes, theme} = this.props;

        return (
            <div>
                <div className={classes.root}>
                    <div style={{marginRight: 10, display: 'flex', alignItems: 'center'}}>
                        <Avatar style={{marginRight: 5}}>NN</Avatar>
                        <Typography variant="button">{user}</Typography>
                    </div>
                    <div style={{marginRight: 20}}>
                        <Typography variant="button">{price}</Typography>
                        <Typography variant="overline"> {type}</Typography>
                    </div>
                    <div onClick={this.handleClickOpen} className={classes.butt}>

                        <div><img alt="Remy Sharp" src={Img} className={classes.img}/></div>
                        <div className={classes.caption}>
                            <Typography variant="title">{lotName}</Typography>
                            <Typography variant="overline" style={{marginLeft: 5}}> {game}</Typography>
                        </div>
                    </div>


                    <div>
                        <Button variant="outlined" onClick={this.handleClickOpenProcessing} className={classes.buttonOk}>Взять в работу</Button>
                    </div>
                </div>

                <Dialog onClose={this.handleClose} open={this.state.setOpen} aria-labelledby="simple-dialog-title"
                        classes={{
                            paper: classes.paper, // class name, e.g. `classes-nesting-root-x`
                        }}>
                    <DialogTitle id="simple-dialog-title">Продаваемый лот</DialogTitle>
                    <Lot/>
                </Dialog>

                <Dialog onClose={this.handleCloseProcessing} open={this.state.setOpenProcessing} aria-labelledby="simple-dialog-title"
                        classes={{
                            paper: classes.paper, // class name, e.g. `classes-nesting-root-x`
                        }}>
                    <DialogTitle id="simple-dialog-title">Обменяйте лот с игроком</DialogTitle>
                    <CircularProgress className={classes.progress} />
                    <div>
                    <Button variant="outlined" className={classes.buttonOk}>Сделка совершилась</Button>
                    <Button variant="outlined" className={classes.buttonNo}>Сделка сорвалась</Button>
                    </div>
                </Dialog>

            </div>
        );
    }
}

export default withStyles(styles)(BuyCard);