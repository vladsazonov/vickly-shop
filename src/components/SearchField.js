import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    textField: {
        width: 'calc(100% - 54px)',
        marginRight: 0,
        marginLeft: 6,
        borderRadius: 4,
        color: theme.palette.primary.light,
        height: 36,
    },
});

const source = _.times(5, () => ({
    title: faker.company.companyName(),
    description: faker.company.catchPhrase(),
    image: faker.internet.avatar(),
    price: faker.finance.amount(0, 100, 2, '$'),
}))

 class SearchExampleStandard extends Component {
    componentWillMount() {
        this.resetComponent()
    }

    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

    handleResultSelect = (e, { result }) => this.setState({ value: result.title })

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent()

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = result => re.test(result.title)

            this.setState({
                isLoading: false,
                results: _.filter(source, isMatch),
            })
        }, 300)
    };

    render() {
        const { isLoading, value, results } = this.state;
        const classes = this.props;

        return (
                    <Search
                        loading={isLoading}
                        ize='massive'
                        onResultSelect={this.handleResultSelect}
                        onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                        results={results}
                        value={value}
                        {...this.props}
                    />
        )
    }
}

export default withStyles(styles)(SearchExampleStandard)