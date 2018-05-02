import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import Icon from 'material-ui/Icon';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  pullRight:
  {
    float: 'right',
  }
};
class App extends React.Component  {
    state = {
      anchorEl: null,
    };
    handleMenu = event => {
      this.setState({ anchorEl: event.currentTarget });
    };
  
    handleClose = () => {
      this.setState({ anchorEl: null });
    };

  render() {
    const { classes } = this.props;
    const {anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            <img src={logo} className="App-logo" alt="logo" />
            
          </Typography>
          <div className={classes.pullRight}>SOFTGEN</div>
          <div>
          <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                 >
                  <AccountCircle />
          </IconButton>
          
          <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                 onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}><i className="fa fa-home"></i> Home</MenuItem>
                  <MenuItem onClick={this.handleClose}><i className="fa fa-eye"></i> View Bookings</MenuItem>
                  <MenuItem onClick={this.handleClose}><i className="fa fa-bed"></i> SOFTGEN (INDIA)</MenuItem>
          </Menu>
          </div>
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(App);
