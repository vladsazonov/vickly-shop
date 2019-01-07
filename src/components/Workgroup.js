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
import loginService from "../services/loginService";
import {Item, Menu, MenuProvider} from "react-contexify";


const styles = theme => ({
    white: {
        [theme.breakpoints.up('xs')]: {
            color: "white",
        },
    },
});

const MyAwesomeMenu = () => (
    <Menu id='menu_id'>
        <Item onClick={() => alert("ТЫ ХУЙ")}>ХУЙ</Item>
        <Item onClick={() => alert("ТЫ ХУЙ")}>ХУЙ</Item>
        <Item onClick={() => alert("ТЫ МОЧА")}>МОЧА</Item>
    </Menu>
);

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
            <div style={{backgroundColor: '#253340', borderBottom: '0.2px solid #1f2c39'}}>
                <MenuProvider id="menu_id">
                    <MyAwesomeMenu/>
                    <ListItem button onClick={this.handleClick} style={{paddingTop: 0, paddingBottom: 0}}>
                        <ListItem style={{textAlign: 'center'}}
                                  className={classes.white}>{workgroup.group.name}</ListItem>
                        {this.state.open ? <ExpandLess/> : <ExpandMore/>}
                    </ListItem>
                </MenuProvider>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>

                    <List component="div" disablePadding>
                        {
                            workgroup.users.map(
                                function (user) {
                                    return user.user.id != loginService.getCreds().myUserId ?
                                        <Dialog key={user.user.id} unread={user.unread} lastMsg={user.last}
                                                dialog={user.user}/>
                                        :
                                        null
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