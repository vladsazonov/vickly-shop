import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import BuyCard from "./BuyCard";
import IncomesStore from "../store/IncomesStore"
import {observer} from "mobx-react";

const styles = theme => ({});

@observer
class BuyIncomes extends React.Component {

    constructor(props) {
        super(props);
        this.IncomesStore = IncomesStore;
    }

    render() {
        const {classes, theme} = this.props;

        return (
            <div>
                {
                    this.IncomesStore.buyLots.map(elem => <BuyCard/>)
                }
            </div>
        );
    }
}

export default withStyles(styles)(BuyIncomes);