import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Dialog from "./Dialog";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';


const styles = theme => ({

});

class Workgroup extends React.Component {
    state = {
        open: true,
    };

    handleClick = () => {
        this.setState(state => ({open: !state.open}));
    };

    render() {
        const {classes, theme, workgroup} = this.props;

        return (
            <div>
                <ListItem button onClick={this.handleClick}>
                    <ListItemText inset primary={workgroup.group.name}/>
                    {this.state.open ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {
                            workgroup.users.map(
                                function (user) {
                                    return <Dialog dialog={user}/>
                                }
                            )
                        }
                    </List>
                </Collapse>
            </div>

        )
    }
}

Workgroup.propTypes = {
    classes: PropTypes.object.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Workgroup);