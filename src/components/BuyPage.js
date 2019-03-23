import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import SaleCard from "./SalesIncomes";
import {Input} from "semantic-ui-react";
import {List, Typography} from "@material-ui/core";
import Form from "semantic-ui-react/dist/commonjs/collections/Form";
import Radio from "@material-ui/core/Radio";
import Lot from "./Lot";
import LotStore from "../store/LotsStore"
import {observer} from "mobx-react";

const styles = theme => ({
    root: {
        top: 0,
        position: 'fixed',
        backgroundColor: '#fff',
        left: 300,
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

    state = {
        val: 1,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!this.LotStore.lots.length && !this.LotStore.lotsFetched) {
            this.LotStore.fetchLots();
        }
        if (!this.LotStore.games.length && !this.LotStore.gamesFetched) {
            this.LotStore.fetchGames();
        }
    }

    handleChange = event => {
        this.setState({sum: event.target.value * 2})
    };

    handleBuyProccess = (stateOfProccess) => () => {
        if (stateOfProccess) {
            // TODO
            // approve buy
            // this.LotStore.postBuy(12);
        }else{
            //TODO JUST EXIT
        }
    };

    render() {
        const {classes, theme} = this.props;

        return (
            <div>
                <div className={classes.root}>
                    <div>
                        <div>
                            <Typography>Цена</Typography>
                            <Input placeholder='От' style={{marginRight: 7}}/>
                            <Input placeholder='До'/>
                        </div>
                        <div>
                            <Form>
                                <Form.Field>
                                    Selected value: <b>{this.state.value}</b>
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        label='Choose this'
                                        name='radioGroup'
                                        value="1"
                                        checked={this.state.value === '1'}
                                        onChange={this.handleChange}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        label='Or that'
                                        name='radioGroup'
                                        value="2"
                                        checked={this.state.value === '2'}
                                        onChange={this.handleChange}
                                    />
                                </Form.Field>
                            </Form>
                            <List>
                                {
                                    this.LotStore.lots.map(elem => <Lot/>)
                                }
                            </List>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default withStyles(styles)(BuyPage);