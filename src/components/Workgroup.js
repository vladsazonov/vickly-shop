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
            <div style={{backgroundColor: 'rgb(245, 245, 245)', borderBottom: '1px solid #ebebeb'}}>
                <ListItem button onClick={this.handleClick} style={{paddingTop: 6, paddingBottom: 6}}>
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

export default withStyles(styles, {withTheme: true})(Workgroup);