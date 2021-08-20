import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Button, MenuItem } from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Home from './screens/Home/index';
import ButtonAppBarCollapse from './component/ButtonAppBarCollapse';
import './App.css';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#fcfcfc',
        color: "black",
        fontWeight: 'bold',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    toolBar: {
        [theme.breakpoints.down("sm")]: {
            justifyContent: 'flex-end',
        },
        justifyContent: 'center',
    },
    button: {
        marginRight: 30
    },
    buttonBar: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
        margin: "10px",
        paddingLeft: "16px",
        right: 0,
        position: "relative",
        width: "100%",
        background: "transparent"
    }
}));
function App() {
    const classes = useStyles();
  return (
      <div className="shadowContainer">
          <AppBar position="static" className={classes.appBar}>
              <Toolbar className={classes.toolBar}>
                  <div>
                      <ButtonAppBarCollapse>
                          <MenuItem>
                              <a href="#main">Главная</a>
                          </MenuItem>
                          <MenuItem>
                              <a href="#about">Мы</a>
                          </MenuItem>
                          <MenuItem>
                              <a href="#moments">Моменты</a>
                          </MenuItem>
                          <MenuItem>
                              <a href="#when">Что Где Когда</a>
                          </MenuItem>
                          <MenuItem>
                              <a href="#wish">Твои пожелания</a>
                          </MenuItem>
                      </ButtonAppBarCollapse>
                      <div className={classes.buttonBar} id="appbar-collapse">
                          <Button color="inherit" className={classes.button}>
                              <a href="#main">Главная</a>
                          </Button>
                          <Button color="inherit" className={classes.button}>
                              <a href="#about">Мы</a>
                          </Button>
                          <Button color="inherit" className={classes.button}>
                              <a href="#moments">Моменты</a>
                          </Button>
                          <Button color="inherit" className={classes.button}>
                              <a href="#when">Что Где Когда</a>
                          </Button>
                          <Button color="inherit" className={classes.button}>
                              <a href="#wish">Твои пожелания</a>
                          </Button>
                      </div>
                  </div>
              </Toolbar>
          </AppBar>
          <Router>
              <Switch>
                  <Route path="/" exact component={Home} />
              </Switch>
          </Router>
      </div>
  );
}

export default App;
