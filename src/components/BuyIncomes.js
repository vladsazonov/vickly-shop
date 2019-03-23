import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import BuyCard from "./BuyCard";

const styles = theme => ({});

class BuyIncomes extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {classes, theme} = this.props;

        return (
            <div>
                <BuyCard/><BuyCard/><BuyCard/><BuyCard/><BuyCard/><BuyCard/><BuyCard/><BuyCard/><BuyCard/><BuyCard/><BuyCard/><BuyCard/><BuyCard/><BuyCard/><BuyCard/><BuyCard/>}
            </div>
        );
    }
}

export default withStyles(styles)(BuyIncomes);