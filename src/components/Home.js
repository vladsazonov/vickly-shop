import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import {Scrollbars} from "react-custom-scrollbars";
import ProfileIco from "./ProfileIco";
import InviteIcon from "./InviteIcon";
import {observer} from "mobx-react";
import ProfileBar from "./ProfileBar";
import Background from '../images/bb.jpg';
import InboxIcon from '@material-ui/icons/Inbox';
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DraftsIcon from '@material-ui/icons/Drafts';
import AttachMoney from '@material-ui/icons/AttachMoney'
import {Typography} from "@material-ui/core";
import accountStore from "../store/AccountStore";
import SalePage from "./SalePage";
import {PrivateRoute} from "react-router-with-props";
import Login from "./login/LoginForm";
import {BrowserRouter, Link, Redirect, Route, Switch} from "react-router-dom";
import BuyPage from "./BuyPage";
import SalesIncomes from "./SalesIncomes";
import BuyIncomes from "./BuyIncomes";
import HistoryPage from "./HistoryPage";
import LocalAtm from "@material-ui/icons/LocalAtm"
import Beenhere from "@material-ui/icons/Beenhere"
import Shop from "@material-ui/icons/Shop"
import ProfileBarApp from "./ProfileBarApp";
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/icons/TextFields'

const styles = theme => ({

    root: {
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            // display: 'block',
        },
        top: 0,
        bottom: 0,
        left: 100,
        right: 100,
        flexGrow: 1,
    },
    margin: {
      backgroundColor: '#f1f1f1',
      borderRadius: 6,
      width: '20%',
        height: 40,
        margin: 10

    },
    inputRoot: {
        color: '#000',
    },
    inputInput: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
        backgroundColor: '#000',
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
            width: 300,
            flexShrink: 0,
        },
        zIndex: 1500,
    },
    appBar: {
        zIndex: 1501,
        height: 55,
        boxShadow: theme.shadows[0],
        //display: 'flex',
        //alignItems: 'center',
        width: '100%',
        backgroundColor: theme.palette.primary.main2,
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
            right: 0,
            top: 0,
        },
    },
    toolbar: {
        height: 55,
    },
    drawerPaper: {
        [theme.breakpoints.down('xs')]: {
            width: '85%',
        },
        width: 300,
        backgroundColor: theme.palette.primary.main,
        borderRight: '0px',
    },
    workG: {
        [theme.breakpoints.down('xs')]: {
            marginTop: 105,
        },
        marginTop: 71,
        padding: 0,
    },
    content: {
        flexGrow: 1,
        minHeight: '100vh',
       // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#ececec',

        boxShadow: '-2px 0px 20px 0px rgba(0,0,0,0.5)',
    },
    logo: {
        width: 150,
        marginRight: 'auto',
    },
    logoDiv: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
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
    emptyChat: {
        top: 40,
        bottom: 0,
        right: 0,
        [theme.breakpoints.down('xs')]: {
            left: 0,
        },
        left: '30%',
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userBar: {
        display: 'flex',
        marginLeft: 'auto',
    },
});

@observer
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.accountStore = accountStore;
    }

    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({mobileOpen: !state.mobileOpen}));
    };

    ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }


    render() {
        const {classes, theme} = this.props;

        let drawer;


        drawer = (
                <div>
                    <Hidden xsDown implementation="css">
                    </Hidden>
                    <List className={classes.workG}>
                        {
                            this.accountStore.isAdmin ?
                                (
                                    <div>
                                        < ListItem button
                                                   component={props => <Link to="/home/salesincomes" {...props} />}>
                                            <ListItemIcon>
                                                <DraftsIcon/>
                                            </ListItemIcon>
                                            <Typography color="secondary"> Заявки</Typography>
                                        </ListItem>
                                        <Divider/>

                                        <ListItem button component={props => <Link to="/home/buy" {...props} />}>
                                            <ListItemIcon>
                                                <AttachMoney/>
                                            </ListItemIcon>
                                            <Typography color="secondary"> Купить </Typography>
                                        </ListItem>
                                        <ListItem button component={props => <Link to="/home/sale" {...props} />}>
                                            <ListItemIcon>
                                                <LocalAtm/>
                                            </ListItemIcon>
                                            <Typography color="secondary"> Продать </Typography>
                                        </ListItem>
                                    </div>
                                )
                                :
                                (

                                    <div>
                                        <ListItem button component={props => <Link to="/home/buy" {...props} />}>
                                            <ListItemIcon>
                                                <AttachMoney/>
                                            </ListItemIcon>
                                            <Typography color="secondary"> Купить </Typography>
                                        </ListItem>
                                        <ListItem button component={props => <Link to="/home/sale" {...props} />}>
                                            <ListItemIcon>
                                                <LocalAtm/>
                                            </ListItemIcon>
                                            <Typography color="secondary"> Продать </Typography>
                                        </ListItem>
                                        <Divider/>
                                        <ListItem button component={props => <Link to="/home/history" {...props} />}>
                                            <Typography color="secondary"> История </Typography>
                                        </ListItem>
                                    </div>
                                )
                        }

                    </List>


                </div>
        );


        return (
            <div className={classes.root}>
                <nav className={classes.drawer}>
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar style={{minHeight: 55}}>
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerToggle}
                                className={classes.menuButton}>
                                <MenuIcon/>
                            </IconButton>
                            <div className={classes.logoDiv}><Typography variant="h4">ViclyShop</Typography><Shop style={{color: '#ef2600'}} /></div>
                            <TextField className={classes.margin} label="njjjj" />
                            <div className={classes.userBar}>
                                {/* <InviteIcon />
                                <ProfileIco />*/}
                            </div>
                            <ProfileBarApp/>
                        </Toolbar>

                    </AppBar>
                    {/* The implementation can be swap with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <AppBar position="fixed" className={classes.appBar}>
                            <Toolbar>
                                <IconButton
                                    color="inherit"
                                    aria-label="Open drawer"
                                    onClick={this.handleDrawerToggle}
                                    className={classes.menuButton}>
                                    <MenuIcon/>
                                </IconButton>
                                {/* <div className={classes.logoDiv}>Vicly messenger</div>*/}
                                <div className={classes.userBar}>
                                    {/* <InviteIcon />
                                <ProfileIco />*/}
                                </div>
                            </Toolbar>
                        </AppBar>
                        <Drawer
                            container={this.props.container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            onOpen={this.handleDrawerToggle}
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

                    {
                        this.accountStore.isAdmin ?
                            (
                                <Switch>
                                    <Route path="/home/sale"
                                           component={SalePage}/>
                                    <Route exact path="/home/buy"
                                           component={BuyPage}/>
                                    <Route path="/home/salesincomes"
                                           component={SalesIncomes}/>
                                    <Route exact path="/home" render={() =><Redirect to={"/home/buy"}/>}/>
                                    <Route render={() => <Redirect to={"/home/sale"}/>}/>
                                </Switch>
                            )
                            :
                            (
                                <Switch>
                                    <Route path="/home/sale"
                                           component={SalePage}/>
                                    <Route exact path="/home/buy"
                                           component={BuyPage}/>
                                    <Route exact path="/home/history"
                                           component={HistoryPage}/>
                                    <Route exact path="/home" render={() =><Redirect to={"/home/buy"}/>}/>
                                    <Route render={() => <Redirect to={"/home"}/>}/>
                                </Switch>
                            )
                    }
                </main>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Home);