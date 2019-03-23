import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import SaleCard from "./SalesIncomes";
import {Card, Icon, Input} from "semantic-ui-react";
import {List, Typography} from "@material-ui/core";
import { Form, Radio } from 'semantic-ui-react'
import Lot from "./Lot";
import LotStore from "../store/LotsStore"
import {observer} from "mobx-react";
import Image from "semantic-ui-react/dist/commonjs/elements/Image";
import Emp from '../images/epm.jpg'
import Button from "semantic-ui-react/dist/commonjs/elements/Button";

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
class userBuyCard extends React.Component {

    constructor(props) {
        super(props);
        this.LotStore = LotStore;
    }

    state = {

    };
    handleChange = (e, { value }) => this.setState({ value })


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
            <div style={{margin: '0px 10px 20px 10px'}}>
                <Card>
                    <Image src={Emp} />
                    <Card.Content>
                        <Card.Header>{this.props.summary}</Card.Header>
                        <Card.Meta>
                            <span className='date'>{this.props.summary}</span>
                        </Card.Meta>
                        <Card.Description>{this.props.text}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                           10000р
                        </a>
                    </Card.Content>
                    <Card.Content extra style={{display: 'flex', justifyContent: 'center'}}>
                    <a>
                        <Button color="primary">Купить</Button>
                    </a>
                </Card.Content>

                </Card>
                </div>
        );
    }
}

export default withStyles(styles)(userBuyCard);