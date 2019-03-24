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
import IncomesStore from "../store/IncomesStore"

const styles = theme => ({
    root: {
        padding: 4,
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #ececec',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    img: {
        width: 40,
        height: 40,
        borderRadius: 50,
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
textOverflow: 'ellipsis',
alignItems: 'center',
    },
    captionMod: {
        marginRight: 50,
    },

    buttonOk: {
        borderColor: theme.palette.primary.confim,
        color: theme.palette.primary.confim,
        marginRight: 60,
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
        alignItems: 'center',
        borderRadius: 6,
        padding: 4,
        minWidth: '25%',
        '&:hover': {
            backgroundColor: '#dfe0ea',
        },
    },
    progress: {
        margin: theme.spacing.unit * 2,
    },
});

const description = 'Супер крутой мечь который я дропнул с Варизла 88 лвл с дополнительным бафом на +37 к друиду нахуй';
const price = '3000p';
const game = 'Linage 2';
const user = 'PapAlkash';
const type = 'Обычная продажа';

class BuyCard extends React.Component {

    constructor(props) {
        super(props);
        this.IncomesStore = IncomesStore;
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
        // BL
        this.IncomesStore.confirmBuyIncomeStatus(this.props.id);
    };

    handleCloseProcessing = () => {
        this.setState(state => ({setOpenProcessing: !state.setOpenProcessing}))
    };

    handleChangeIncomeStatus = (isSuccess) => () => {
        if (isSuccess) {
            this.IncomesStore.confirmBuyTransmissionIncomeStatus(isSuccess, this.props.id);
        } else {
            this.IncomesStore.confirmBuyTransmissionIncomeStatus(isSuccess, this.props.id);
        }
        this.setState({
            setOpenProcessing: false
        })
    };


    render() {
        const {classes, theme} = this.props;

        return (
            <div>
                <div className={classes.root}>
                    <div style={{marginRight: 10, display: 'flex', alignItems: 'center', minWidth: '25%',}}>

                        <Typography variant="button">   Покупатель: {this.props.name}</Typography>
                    </div>
                    <div style={{marginRight: 20, minWidth: '25%'}}>
                        <Typography variant="button">Цена: {this.props.price} руб.</Typography>
                        <Typography variant="overline">Вид продажи:  {type}</Typography>
                    </div>
                    <div onClick={this.handleClickOpen} className={classes.butt}>
                       <img alt="Remy Sharp" src={Img} className={classes.img}/>
                        <div className={classes.caption}>
                            <Typography variant="title">Название: {this.props.summary}</Typography>
                            <Typography variant="overline" style={{marginLeft: 5}}>ИГра:  {game}</Typography>
                        </div>
                    </div>


                    <div style={{minWidth: '25%', textAlign: 'end',}}>
                        <Button variant="outlined" onClick={this.handleClickOpenProcessing} className={classes.buttonOk}>Взять в работу</Button>
                    </div>
                </div>

                <Dialog onClose={this.handleClose} open={this.state.setOpen} aria-labelledby="simple-dialog-title"
                        classes={{
                            paper: classes.paper, // class name, e.g. `classes-nesting-root-x`
                        }}>
                    <DialogTitle id="simple-dialog-title">Продаваемый лот</DialogTitle>
                    <Lot {...this.props}/>
                </Dialog>

                <Dialog onClose={this.handleCloseProcessing} open={this.state.setOpenProcessing}
                        aria-labelledby="simple-dialog-title"
                        classes={{
                            paper: classes.paper, // class name, e.g. `classes-nesting-root-x`
                        }}>
                    <DialogTitle id="simple-dialog-title">Обменяйте лот с игроком: SuperHot228</DialogTitle>
                    <CircularProgress className={classes.progress}/>
                    <div style={{margin: 5}}>
                        <Button onClick={this.handleChangeIncomeStatus(true)}
                                className={classes.buttonOk}>Сделка совершилась</Button>
                        <Button  onClick={this.handleChangeIncomeStatus(false)} className={classes.buttonNo}>Сделка сорвалась</Button>
                    </div>
                </Dialog>

            </div>
        );
    }
}

export default withStyles(styles)(BuyCard);