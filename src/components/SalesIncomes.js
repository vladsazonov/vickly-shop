import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import SaleCard from "./SaleCard";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import BuyCard from "./BuyCard";

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

class SalesIncomes extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        value: 0,
    };

    handleChange = (event, newValue) => {
      this.setState(state => ({value: newValue}))
    };

    render() {
        const {classes, theme} = this.props;

        return (

                <div className={classes.root}>
                    <AppBar position="static" className={classes.appbar}>
                        <Tabs value={this.state.value} onChange={this.handleChange} className={classes.tabs}>
                            <Tab label="Лоты на продажу" />
                            <Tab label="Лоты на покупку" />
                        </Tabs>
                    </AppBar>
                    {this.state.value === 0 &&  <div style={{margin: '150px 30px 30px 30px'}}><SaleCard/><SaleCard/><SaleCard/><SaleCard/><SaleCard/><SaleCard/><SaleCard/><SaleCard/><SaleCard/><SaleCard/><SaleCard/><SaleCard/><SaleCard/><SaleCard/><SaleCard/><SaleCard/><SaleCard/><SaleCard/><SaleCard/><SaleCard/><SaleCard/></div>}
                    {this.state.value === 1 && <div style={{margin: '150px 30px 30px 30px'}}><BuyCard /><BuyCard /><BuyCard /><BuyCard /><BuyCard /><BuyCard /><BuyCard /><BuyCard /><BuyCard /><BuyCard /><BuyCard /><BuyCard /><BuyCard /><BuyCard /><BuyCard /><BuyCard /></div>}
                </div>


        );
    }
}

export default withStyles(styles)(SalesIncomes);