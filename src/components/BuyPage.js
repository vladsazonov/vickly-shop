import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import SaleCard from "./SalesIncomes";
import {Input} from "semantic-ui-react";
import {Typography} from "@material-ui/core";
import Form from "semantic-ui-react/dist/commonjs/collections/Form";
import Radio from "@material-ui/core/Radio";

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

class BuyPage extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        val: 1,
    };

    handleChange = event => {
        this.setState({sum: event.target.value * 2})
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
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default withStyles(styles)(BuyPage);