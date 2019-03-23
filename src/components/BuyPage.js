import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import SaleCard from "./SalesIncomes";
import {Card, Icon, Input} from "semantic-ui-react";
import {List, Typography} from "@material-ui/core";
import {Form, Radio} from 'semantic-ui-react'
import Lot from "./Lot";
import LotStore from "../store/LotsStore"
import {observer} from "mobx-react";
import Image from "semantic-ui-react/dist/commonjs/elements/Image";
import Emp from '../images/epm.jpg'
import UserBuyCard from './UserBuyCard'

const styles = theme => ({
    root: {
        top: 55,
        position: 'fixed',
        backgroundColor: '#61c9d8',
        left: 300,
        display: 'inline-flex',
        alignItems: 'center',
        right: 0,
        height: 100,

    }
});

@observer
class BuyPage extends React.Component {

    constructor(props) {
        super(props);
        this.LotStore = LotStore;
    }

    state = {};
    handleChange = (e, {value}) => this.setState({value});


    componentDidUpdate(prevProps, prevState, snapshot) {
        let a = 5;
        if (!this.LotStore.lots.length && !this.LotStore.lotsFetched) {
            this.LotStore.fetchLots();
        }
        if (!this.LotStore.games.length && !this.LotStore.gamesFetched) {
            this.LotStore.fetchGames();
        }
    }


    handleBuyProccess = (stateOfProccess) => () => {
        if (stateOfProccess) {
            // TODO
            // approve buy
            // this.LotStore.postBuy(12);
        } else {
            //TODO JUST EXIT
        }
    };

    render() {
        const {classes, theme} = this.props;

        return (
            <div>
                <div className={classes.root}>

                    <div style={{marginRight: 30, marginLeft: 20}}>
                        <Typography variant="h5" color="secondary">Цена</Typography>
                        <Input placeholder='От' style={{marginRight: 7}}/>
                        <Input placeholder='До'/>
                    </div>

                    <Form>
                        <Form.Field>
                            <Typography variant="h6" color="secondary"> Тип продажи: </Typography>
                            <b>{this.state.value}</b>
                        </Form.Field>

                        <div style={{display: 'flex'}}>
                            <Form.Field>
                                <Radio
                                    label='Обычная продажа'
                                    name='radioGroup'
                                    value='this'
                                    checked={this.state.value === 'this'}
                                    onChange={this.handleChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Radio
                                    style={{color: '#fff', marginLeft: 10}}
                                    label='Аукцион'
                                    name='radioGroup'
                                    value='that'
                                    checked={this.state.value === 'that'}
                                    onChange={this.handleChange}
                                />
                            </Form.Field>
                        </div>
                    </Form>
                    <div style={{display: 'flex',}}>
                        {
                            this.LotStore.lots.map(elem => <UserBuyCard/>)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(BuyPage);