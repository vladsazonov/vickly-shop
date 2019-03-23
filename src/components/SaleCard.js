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
import Stepper from "@material-ui/core/Stepper";
import StepLabel from "@material-ui/core/StepLabel";
import Step from "@material-ui/core/Step";

const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'start',
        borderBottom: '1px solid #ececec',
        padding: '5px 10px 5px 10px',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    img: {
        width: 55,
        height: 55,
        marginRight: 10,
    },
    imgMod: {
        width: 200,
        height: 200,
        marginRight: 10,
    },
    caption: {
        marginRight: 50,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
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
    listItem: {
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: '#7183dc',
        },

    }
});

const lotName = 'Меч арзула';
const description = 'Супер крутой мечь который я дропнул с Варизла 88 лвл с дополнительным бафом на +37 к друиду';
const price = '3000p';
const game = 'Linage 2';
const user = 'Nagibator322';
const type = 'Обычная продажа';

class SaleCard extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        setOpen: false,
        activeStep: 0
    };

    handleClickOpen = () => {
        this.setState(state => ({setOpen: !state.setOpen}))
    };

    handleClose = () => {
        this.setState(state => ({setOpen: !state.setOpen}))
    };

    handleFirstStep = (isSuccess) => () => {
        if (isSuccess) {
            this.setState({
                activeStep: 1
            })
        } else {
            this.setState({
                setOpen: false
            })
        }
    };

    handleSecondStep = (isSuccess) => () => {
        if (isSuccess) {
            // TODO BL
            this.setState({
                setOpen: false
            });
        } else {
            // TODO BL
            this.setState({
                setOpen: false
            })
        }
    };

    firstStepForm() {
        const {classes, theme} = this.props;
        return (
            <div>
                <DialogTitle id="simple-dialog-title">Лот на продажу</DialogTitle>
                <div>
                    <div className={classes.root}>
                        <img alt="Remy Sharp" src={Img} className={classes.imgMod}/>
                        <div className={classes.captionMod}>
                            <Typography variant="h4">{lotName}</Typography>
                            <Typography variant="Subheading">{description}</Typography>
                            <div style={{marginRight: 10, width: '50%', marginTop: 10,}}>
                                <Typography variant="h6"  style={{color: 'red'}} >{price}</Typography>
                                <Typography variant="overline"> {game}</Typography>
                            </div>
                        </div>

                    </div>
                    <div style={{margin: 10}}>
                        <Button  onClick={this.handleFirstStep(true)}
                                className={classes.buttonOk}>Принять</Button>
                        <Button onClick={this.handleFirstStep(false)}
                                className={classes.buttonNo}>Отклонить</Button>
                    </div>
                </div>
            </div>
        )
    }

    secondStepForm() {
        const {classes, theme} = this.props;
        return (
            <div>
                <DialogTitle id="simple-dialog-title">Подтвердите успешность сделки</DialogTitle>
                <div>
                    <div className={classes.root}>
                        Ожидание подтверждения

                    </div>
                    <div style={{margin: 10}}>
                        <Button variant="outlined" onClick={this.handleSecondStep(true)}
                                className={classes.buttonOk}>Принять</Button>
                        <Button variant="outlined" onClick={this.handleSecondStep(false)}
                                className={classes.buttonNo}>Отклонить</Button>
                    </div>
                </div>
            </div>
        )
    }

    getStepContent(step) {
        switch (step) {
            case 0:
                return this.firstStepForm();
            case 1:
                return this.secondStepForm();
            default:
                return "";
        }
    }


    render() {
        const {classes, theme} = this.props;
        const steps = ["Согласование", "Обработка"];
        return (
            <div>
                <ListItem className={classes.listItem} button onClick={this.handleClickOpen}>
                    <div className={classes.root}>
                        <div><img alt="Remy Sharp" src={Img} className={classes.img}/></div>
                        <div className={classes.caption}>
                            <Typography variant="title">{lotName}</Typography>
                            <Typography variant="Subheading" className={classes.caption}>{description}</Typography>
                        </div>
                        <div style={{marginRight: 20}}>
                            <Typography variant="button">{price}</Typography>
                            <Typography variant="overline"> {type}</Typography>
                        </div>
                        <div style={{marginRight: 10, display: 'flex', alignItems: 'center'}}>
                            <Avatar style={{marginRight: 5}}>NN</Avatar>
                            <Typography variant="button">{user}</Typography>
                            <Typography variant="overline" style={{marginLeft: 5}}> {game}</Typography>
                        </div>
                        {/*<div>*/}
                        {/*<Button variant="outlined" className={classes.buttonOk}>Принять</Button>*/}
                        {/*<Button variant="outlined" className={classes.buttonNo}>Отклонить</Button>*/}
                        {/*</div>*/}
                    </div>
                </ListItem>

                <Dialog onClose={this.handleClose} open={this.state.setOpen} aria-labelledby="simple-dialog-title"
                        classes={{
                            paper: classes.paper, // class name, e.g. `classes-nesting-root-x`
                        }}>
                    <Stepper activeStep={this.state.activeStep}>
                        {
                            steps.map((label, index) => {
                                const labelProps = {};
                                return (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                );
                            })
                        }
                    </Stepper>
                    {
                        this.getStepContent(this.state.activeStep)
                    }
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(SaleCard);