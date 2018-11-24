import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Dialog from "./Dialog";
import ChatWindow from "./ChatWindow"
import connect from "react-redux/es/connect/connect";
import Button from "@material-ui/core/Button/Button";
import {fetchChats} from "../store/actions/mainActions";
import Workgroup from "./Workgroup";
import {Scrollbars} from "react-custom-scrollbars";
import SearchBar from "./SearchBar";
import ChatBar from "./ChatBar";
import ProfileIco from "./ProfileIco";
import InviteIco from "./InviteIco";
import {getAllMessages, postMessage} from "../store/actions/messageActions";
import {userLogout} from "../store/actions/loginActions";

const drawerWidth = 320;

const styles = theme => ({

    root: {
        display: 'flex',
        marginLeft: 0,
        marginRight: 0,
        flexGrow: 1,
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
        backgroundColor: '#25464c',
        zIndex: 1500, //TODO: ui bug
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: '100%',
        },
        zIndex: 1501,
        height: 64,
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        borderRight: 0,
    },
    content: {
        flexGrow: 1,
        /*padding: theme.spacing.unit * 3,*/
    },
});

class Home extends React.Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({mobileOpen: !state.mobileOpen}));
    };

    workgroups() {
        if (this.props.chats.status) {
            console.log(this.props);
            return this.props.chats.with_group.map(function (workgroup) {
                    return (
                        <Workgroup workgroup={workgroup}/>
                    )
                }
            )
        } else {
            return "Empty list"
        }
    }

    componentDidMount(){
        if (this.props.currentChat.userId !== this.props.currentChat.prevUserId ) {
            this.handleDrawerToggle();
        }
    }

    handleLogout = () => {
        this.props.handleLogout();
    };

    render() {
        const {classes, theme, chats} = this.props;

        let drawer;


        drawer = (
            <Scrollbars
                autoHide
                renderTrackHorizontal={({style, ...props}) =>
                    <div {...props} style={{...style, backgroundColor: 'blue'}}/>
                }>
                {this.props.children}
                <div>
                    <div
                        className={classes.toolbar}/>
                    <SearchBar/>
                    <Divider/>
                    <List style={{marginTop: 39}}>
                        {this.workgroups()}
                    </List>
                </div>
            </Scrollbars>
        );


        return (
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap style={{flexGrow: 1}}>
                            Weak messenger
                        </Typography>
                        <InviteIco chats={this.props.chats}/>
                        <ProfileIco handleLogout={this.handleLogout.bind(this)}/>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer}>
                    {/* The implementation can be swap with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={this.props.container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <Scrollbars autoHide style={{height: '-webkit-fill-available', zIndex: 1, marginTop: 50}}>
                    <ChatWindow handleDrawerToggle={this.handleDrawerToggle} userId={this.props.currentChat.userId}/>
                    </Scrollbars>
                </main>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        chats: state.chats,
        currentChat:state.currentChat
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleLogout: () => dispatch(userLogout())
    }
}

const styledComponent = withStyles(styles, {withTheme: true})(Home);

const HomeContainer = connect(mapStateToProps,mapDispatchToProps)(styledComponent);

export default HomeContainer;