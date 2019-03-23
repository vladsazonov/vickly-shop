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
import Image from '../images/back.jpg'
import {Avatar} from "@material-ui/core";
import {Dropdown, Input, Select} from 'semantic-ui-react'
import TextArea from "semantic-ui-react/dist/commonjs/addons/TextArea";
import Form from "semantic-ui-react/dist/commonjs/collections/Form";
import Label from "semantic-ui-react/dist/commonjs/elements/Label";

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
    }

    state = {
        value: '',
        sum: 0,
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

    render() {
        const {classes, theme, options} = this.props;

        return (
            <div className={classes.root}>


                <div>
                    <Typography variant="h6" gutterBottom>
                        Продажа
                    </Typography>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={6}>
                            <Input
                                action={<Dropdown button basic floating options={this.options} defaultValue='page'/>}
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
                                <Button variant="outlined" style={{width: 200}}>Продать</Button>
                            </div>



                    </Grid>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(SalePage);