import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Image from '../images/bb.jpg'
import {Avatar} from "@material-ui/core";
import {Dropdown, Input, Select} from 'semantic-ui-react'
import TextArea from "semantic-ui-react/dist/commonjs/addons/TextArea";
import Form from "semantic-ui-react/dist/commonjs/collections/Form";
import Label from "semantic-ui-react/dist/commonjs/elements/Label";
import LotsStore from "../store/LotsStore"
import DialogTitle from "./SaleCard";
import Img from "../images/mesB.jpg";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const styles = theme => ({
    root: {
        backgroundColor: '#fff',
        width: '65%',
        margin: '10px 0 0 10px',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 20,
        boxShadow: theme.shadows[10],
    },

    ard: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
        borderRadius: '50%',
        // backgroundImage: 'url(' + Image + ')',
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
});

class SalePage extends React.Component {

    constructor(props) {
        super(props);
        this.LotsStore = LotsStore;
    }

    state = {
        value: '',
        sum: 0,
        activeStep: 0
    };

    handleChange = event => {
        this.setState({sum: event.target.value * 2})
    };

    options = [
        {key: 'page', text: 'Название игры', value: 'page'},
        {key: 'org', text: 'DayZ', value: 'DayZ'},
        {key: 'site', text: 'Doka 2', value: 'Doka2'},
    ];

    sellOptions = [
        {key: 'deal', text: 'Страндартная продажа', value: '1'},
        {key: 'auction', text: 'Аукцион', value: '2'},
    ];

    handleAddLot() {
        this.LotsStore.postLot("sdfsdbfshdfs", "Меч Квазимара", 10000, "0");
        this.setState({
            activeStep:1
        });
    }

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
                <Typography variant="h6" gutterBottom>
                    Продажа
                </Typography>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <Input
                            action={
                                <Dropdown button basic floating options={this.options} defaultValue='page'/>
                            }
                            icon='search'
                            iconPosition='left'
                            placeholder='Ваш ник в игре'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Input fluid placeholder='Название предмета'/>
                    </Grid>
                    <Grid item xs={12}>
                        <Form>
                            <TextArea placeholder='Описание предмета'/>
                        </Form>
                    </Grid>

                    <Grid item xs={12}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            border: '2px dashed rgba(239, 212, 212, 0.52)',
                            justifyContent: 'center',
                            borderRadius: 10
                        }}>
                            <div style={{padding: 10, display: 'inline-flex', alignItems: 'center'}}>

                                <div><Typography variant="display1" style={{marginRight: 10}}>Загрузите изображение
                                    предмета</Typography></div>

                                <div>
                                    <Button variant="outlined" component="label">
                                        Upload File
                                        <input type="file" style={{display: "none"}}/>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Input labelPosition='right' type='text' placeholder='Цена' value={this.state.value}
                               onChange={this.handleChange}>
                            <Label basic>₽</Label>
                            <input/>
                            <Label>Вы получите: {this.state.sum} </Label>
                        </Input>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Select placeholder='Тип продажи' fluid options={this.sellOptions}/>
                    </Grid>

                    <div style={{width: '100%', display: 'flex', justifyContent: 'center', margin: 10}}>
                        <Button variant="outlined" onClick={this.handleAddLot.bind(this)}
                                style={{width: 200}}>Продать</Button>
                    </div>


                </Grid>
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
        const {classes, theme, options} = this.props;
        const steps = ["Согласование", "Обработка"];
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
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
                </Grid>
                    {
                        this.getStepContent(this.state.activeStep)
                    }


            </div>
        );
    }
}

export default withStyles(styles)(SalePage);