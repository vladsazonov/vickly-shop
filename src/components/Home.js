import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import ChatWindow from "./ChatWindow"
import Workgroup from "./Workgroup";
import {Scrollbars} from "react-custom-scrollbars";
import SearchBar from "./SearchBar";
import ProfileIco from "./ProfileIco";
import InviteIco from "./InviteIco";
import accountStore from "../store/AccountStore";
import chatsStore from "../store/ChatsStore";
import {observer} from "mobx-react";
import {Route} from "react-router-dom";

const drawerWidth = 450;

const styles = theme => ({

    root: {
        display: 'flex',
        top: 0,
        bottom: 0,
        left: 100,
        right: 100,
        flexGrow: 1,
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
        zIndex: 1500,
    },
    appBar: {
        /*  [theme.breakpoints.up('xs')]: {
              width: '100%',
          },
          [theme.breakpoints.up('sm')]: {
              width: '65%',
          },
          [theme.breakpoints.up('md')]: {
              width: '70%',
          },
          [theme.breakpoints.up('lg')]: {
              width: '70%',
          },*/
        /* borderBottom: '1px solid #e2e2e2',*/
        zIndex: 1501,
        height: 40,
        boxShadow: theme.shadows[0],
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: {
        height: 40,
    },
    drawerPaper: {
        [theme.breakpoints.down('xs')]: {
            width: '85%',
        },
            width: '30%',
        backgroundColor: theme.background,
        borderRight: '0px',
    },
    workG: {
        [theme.breakpoints.down('xs')]: {
            marginTop: 40,
        },
        marginTop: 96,
        padding: 0,
    },
    content: {
        flexGrow: 1,
    },
    logo: {
        width: 150,
        marginRight: 'auto',
    },
    logoDiv: {
        flexGrow: 1
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: theme.palette.primary.dark,
        height: 50,
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
        position: 'fixed',
        top: 0,

        zIndex: 1000
    },
});

@observer
class Home extends React.Component {

    constructor(props) {
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
            return this.chatsStore.userChats.with_group.map(
                workgroup => <Workgroup workgroup={workgroup}/>
            )
        }
    }

    // componentDidMount() {
    //     if (this.props.currentChatId.userId !== this.props.currentChatId.prevUserId) {
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
                autoHide>
                {this.props.children}
                <div>
                    <div/>
                    {/*<div className={classes.container}>
                        <img src={logo} alt="logo" className={classes.logo}/>
                        <IconButton>
                            <MenuIcon/>
                        </IconButton>
                    </div>*/}
                    <SearchBar/>
                    <List className={classes.workG}>
                        {this.workgroups()}
                    </List>
                </div>
            </Scrollbars>
        );


        return (
            <div className={classes.root}>
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
                        <div className={classes.logoDiv}>Vicly messenger</div>
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
                        <Route path="/home/chat/:chat_id"
                               render={(routeProps) => <ChatWindow {...routeProps}
                                                                   handleDrawerToggle={this.handleDrawerToggle}
                               />}/>
                </main>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Home);