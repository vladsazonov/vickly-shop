import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Dialog from "./Dialog";
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {MenuProvider} from "react-contexify";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/es/Divider/Divider";


const styles = theme => ({
    groupName: {
        paddingTop: 0,
        paddingBottom: 0,
    },
});

/*const MyAwesomeMenu = () => (
    <Menu id='menu_id'>
        <Item onClick={() => alert("ТЫ ХУЙ")}>ХУЙ</Item>
        <Item onClick={() => alert("ТЫ ХУЙ")}>ХУЙ</Item>
        <Item onClick={() => alert("ТЫ МОЧА")}>МОЧА</Item>
    </Menu>
);*/

class Workgroup extends React.Component {
    state = {
        open: true,
    };

    handleClick = () => {
        this.setState(state => ({open: !state.open}));
    };

    render() {
        const {classes, theme, workgroup, chats} = this.props;

        return (
            <div>
                <MenuProvider id="menu_id">
                    <ListItem button onClick={this.handleClick} className={classes.groupName}>
                        <ListItem>
                            <Typography variant='h6'>
                                {workgroup.name}
                            </Typography>
                        </ListItem>
                        {this.state.open ? <ExpandLess/> : <ExpandMore/>}
                    </ListItem>
                </MenuProvider>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding className={classes.active}>
                        {
                            chats.map(
                                userChat =>
                                    <Dialog chatId={userChat.user.id} unread={userChat.unread}
                                            lastMsg={userChat.last}
                                            dialog={userChat.user}/>
                            )

                        }
                    </List>
                </Collapse>
                <Divider/>
            </div>

        )
    }
}

export default withStyles(styles, {withTheme: true})(Workgroup);