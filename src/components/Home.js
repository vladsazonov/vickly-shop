import React from 'react';
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
import ChatWindow from "./ChatWindow"
import connect from "react-redux/es/connect/connect";
import Button from "@material-ui/core/Button/Button";
import Workgroup from "./Workgroup";
import {Scrollbars} from "react-custom-scrollbars";
import SearchBar from "./SearchBar";
import ChatBar from "./ChatBar";
import ProfileIco from "./ProfileIco";
import InviteIco from "./InviteIco";
import Background from '../images/messagesBackground.jpg'
import accountStore from "../store/AccountStore";
import chatsStore from "../store/ChatsStore";
import {observer} from "mobx-react";

const drawerWidth = 450;

const styles = theme => ({

    root: {
        display: 'flex',
        marginLeft: 0,
        marginRight: 0,
        flexGrow: 1,
        color: 'white',
    },
    drawer: {
        [theme.breakpoints.up('lg')]: {
            width: '30%',
            flexShrink: 0,
        },
        [theme.breakpoints.up('md')]: {
            width: '33%',
            flexShrink: 0,
        },
        [theme.breakpoints.up('sm')]: {
            width: '30%',
            flexShrink: 0,
        },
        backgroundColor: '#25464c',
        zIndex: 1500, //TODO: ui bug
        borderRight: '1px solid #243342',
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            height: 50,
        },
        backgroundColor: '#253340',
        zIndex: 1501,
        height: 50,
        boxShadow: '0 0 0 rgba(0,0,0,0)',
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: {
        height: 50,
    },
    drawerPaper: {
        [theme.breakpoints.up('xs')]: {
            width: '85%',
        },
        [theme.breakpoints.up('sm')]: {
            width: '35%',
        },
        [theme.breakpoints.up('md')]: {
            width: '33%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '30%',
        },
        backgroundColor: '#17212b',
        borderRight: '1px solid #243342',
    },
    workG: {
        [theme.breakpoints.up('xs')]: {
            marginTop: 49,
            paddingTop: 0
        },
        marginTop: 55,
    },
    content: {
        flexGrow: 1,
        /*padding: theme.spacing.unit * 3,*/
        [theme.breakpoints.up('lg')]: {
            left: '33%'
        },
        backgroundImage: `url(${Background})`
    },
});

@observer
class Home extends React.Component {

    constructor(props){
        super(props);
        this.accountStore = accountStore;
        this.chatsStore = chatsStore;
    }

    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({mobileOpen: !state.mobileOpen}));
    };

    workgroups() {
        if (this.chatsStore.userChats.with_group) {
            return this.chatsStore.userChats.with_group.map(function (workgroup) {
                    return (
                        <Workgroup workgroup={workgroup}/>
                    )
                }
            )
        }
    }

    // componentDidMount() {
    //     if (this.props.currentChat.userId !== this.props.currentChat.prevUserId) {
    //         this.handleDrawerToggle();
    //     }
    // }

    componentWillMount() {
        chatsStore.fetchChats()
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
                    <List className={classes.workG}>
                        {this.workgroups()}
                    </List>
                </div>
            </Scrollbars>
        );


        return (
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar style={{minHeight: 'auto'}}>
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
                        <ProfileIco handleLogout={this.accountStore.unauth.bind(accountStore)}/>
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
                        <ChatWindow handleDrawerToggle={this.handleDrawerToggle}
                                    userId={/*this.props.currentChat.userId*/null}/>
                    </Scrollbars>
                </main>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Home);