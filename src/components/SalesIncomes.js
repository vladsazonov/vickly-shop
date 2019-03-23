import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import SaleCard from "./SaleCard";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import BuyCard from "./BuyCard";
import IncomesStore from "../store/IncomesStore"
import LotsStore from "../store/LotsStore"
import {observer} from "mobx-react";

const styles = theme => ({
    root: {

      top: 55,
      left: 300,
      right: 0,
        [theme.breakpoints.down('xs')]: {
            left: 0,
        },
        width: '100%',
    },
    tabs: {
        top: 55,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    appbar: {
        backgroundColor: theme.palette.primary.dark,
        boxShadow: theme.shadows[0],
        left: 300,
        right: 0,
        top: 55,
        position: 'fixed',
    },
});

@observer
class SalesIncomes extends React.Component {

    constructor(props) {
        super(props);
        this.IncomesStore = IncomesStore;
    }

    state = {
        value: 0,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!this.IncomesStore.buyLots.length && !this.IncomesStore.lotsFetched) {
            this.IncomesStore.fetchLots();
        }
        // if (!this.LotStore.games.length && !this.LotStore.gamesFetched) {
        //     this.LotStore.fetchGames();
        // }
    }

    handleChange = (event, newValue) => {
      this.setState(state => ({value: newValue}))
    };

    render() {
        const {classes, theme} = this.props;

        return (

            <div className={classes.root}>
                <AppBar position="static" className={classes.appbar}>
                    <Tabs value={this.state.value} onChange={this.handleChange} className={classes.tabs}>
                        <Tab label="Лоты на продажу"/>
                        <Tab label="Лоты на покупку"/>
                    </Tabs>
                </AppBar>
                <div style={{margin: '150px 30px 30px 30px'}}>
                    {this.state.value === 0 ?
                        this.IncomesStore.saleLots.map(elem => <SaleCard name={elem.name} price={elem.price} summary={elem.summary} text={elem.text} />)
                        :
                        this.IncomesStore.buyLots.map(elem => <BuyCard name={elem.name} price={elem.price} summary={elem.summary} text={elem.text}/>)
                    }
                </div>
            </div>


        );
    }
}

export default withStyles(styles)(SalesIncomes);