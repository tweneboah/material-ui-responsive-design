import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tab,
  Tabs,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  SwipeableDrawer,
  IconButton
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";

import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";
//custom imports
import logo from "../../assets/logo.svg";

//INLINE STYLES
const useStyles = makeStyles((theme) => ({
  toobarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2rem"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1rem"
    }
  },
  logo: {
    height: "7rem",
    [theme.breakpoints.down("md")]: {
      height: "6rem"
    },
    [theme.breakpoints.down("xs")]: {
      height: "4rem"
    }
  },
  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab, //using our customized definition
    minWidth: 10,
    marginLeft: "25px"
  },
  button: {
    borderRadius: "50px",
    marginRight: "20px",
    marginLeft: "50px",
    ...theme.typography.estimate
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      background: "transparent"
    }
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white"
  },
  menuItem: {
    opacity: 0.7,
    "&:hover": {
      background: "red",
      opacity: 1
    }
  },
  drawerIconContainer: {
    "&:hover": {
      backgroundColor: "transparent"
    },
    marginLeft: "auto",
    marginRight: "20px",
    color: "inherit"
  },
  drawerIcon: {
    height: "50px",
    width: "50px"
  }
}));

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0 //This determine how far the user scroll before seeing this effect
  });

  //This returns new copy of the component it is wrapped with
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0 //
  });
}

const Header = () => {
  //Extract classes
  const classes = useStyles();

  //Create an instance of our theme for responsive design
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  //DRAWER
  //check if we are on ios
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  // Menu hook
  const [anchorEl, setAnchorEl] = useState(null); //position of the menu
  const [openMenu, setOpenMenu] = useState(false); //Determine the visibility of the menu

  //hooks for the tab
  const [value, setValue] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  //Onchange handler
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // HandleClick for the menu
  //----------------------------------

  const handleClick = (event) => {
    console.log(event);
    // The event reprevent either click or hover and this determine where we click whether on a button or div and we can get it position event.currentTarget
    setAnchorEl(event.currentTarget); //The element was click
    setOpenMenu(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null); //Don't set any position
    setOpenMenu(false);
  };

  //Check the current url and assign active tab to it when we refresh the page
  useEffect(() => {
    if ((window.location.pathname === "/") & (value !== 0)) {
      setValue(0);
    } else if ((window.location.pathname === "/services") & (value !== 1)) {
      setValue(1);
    } else if ((window.location.pathname === "/revolution") & (value !== 2)) {
    } else if ((window.location.pathname === "/about") & (value !== 3)) {
      setValue(3);
    } else if ((window.location.pathname === "/contact") & (value !== 4)) {
      setValue(4);
    }
  }, [value]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}>
        <Tab className={classes.tab} component={Link} to="/" label="Home" />
        <Tab
          arial-owns={anchorEl ? "simple-menu" : undefined} //arial-owns represent the menu it will render so it will check if there is menu by using the id
          aria-haspopup={anchorEl ? "true" : undefined} //Pop up the menu
          onMouseOver={(event) => handleClick(event)}
          className={classes.tab}
          component={Link}
          to="/services"
          label="Services"
        />
        <Tab
          component={Link}
          to="/revolution"
          className={classes.tab}
          component={Link}
          label="Revolution"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/about"
          label="About us"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/contact"
          label="Contact us"
        />
      </Tabs>
      <Button className={classes.button} variant="contained" color="secondary">
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}>
        <MenuItem
          onClick={() => {
            handleClose();
            setValue(1);
          }}
          classes={{ root: classes.menuItem }}
          component={Link}
          to="/services">
          Services
        </MenuItem>
        <MenuItem
          classes={{ root: classes.menuItem }}
          onClick={() => {
            handleClose();
            setValue(1);
          }}
          component={Link}
          to="/customsoftware">
          Custom Software development
        </MenuItem>
        <MenuItem
          classes={{ root: classes.menuItem }}
          onClick={() => {
            handleClose();
            setValue(1);
          }}
          component={Link}
          to="/mobile">
          Mobile App development
        </MenuItem>
        <MenuItem
          classes={{ root: classes.menuItem }}
          onClick={() => {
            handleClose();
            setValue(1);
          }}
          component={Link}
          to="/website">
          Website development{" "}
        </MenuItem>
      </Menu>
    </React.Fragment>
  );

  //====================
  //DRAWER
  //=====================

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}></SwipeableDrawer>

      <IconButton className={classes.drawerIconContainer}>
        <MenuIcon
          className={classes.drawerIcon}
          onClick={() => setOpenDrawer(!openDrawer)}
          disableRipple
        />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button
              disableRipple
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setValue(0)}>
              <img className={classes.logo} src={logo} alt="logo" />
            </Button>
            {matches ? drawer : tabs}
            {/* The matches values is from 0-1279px * so within that we will render undefined*/}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toobarMargin} />
    </React.Fragment>
  );
};

export default Header;

// Toolbar is arranging items horizontally

// postition fixed is by default
//disAbleGutters remove extra padding from a div

// TAB

//It receives a value which represent the index of the selected tab
//value={0} means the first tabs will be selected

// MENU
//Example is poping up when something is click
// anchorEl: The DOM element used to set the position of the menu.

// STEPS:
//Create two state and two functions

// Apply the event listener on the tab menu you want to click

// Define your menu and pass in the relevant props and methods so that we those functions runs the menu will pop up

// DEFINE THIS ON THE MENU YOU WANT TO DISPLAY THE SUB MENU WHEN CLICK
// PUT THIS ALSO IN THE TOOLBAR

/*
<Toolbar>
<Tab
    arial-owns={anchorEl ? "simple-menu" : undefined}
    aria-haspopup={anchorEl ? "true" : undefined}
    onClick={(event) => handleClick(event)}
    className={classes.tab}
    component={Link}
    to="/services"
    label="Services"
  />

   <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}>
        <MenuItem
          onClick={handleClose}
          component={Link}
          to="/customsoftware">
          Custom Software development
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/mobile">
          Mobile App development
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/website">
          Website development{" "}
        </MenuItem>
      </Menu>

      // HOW TO SET MULTIPLE FUNTIONS TO onClick event because in our case we want to set the active tab on the services tab so we have to pass those function on all the tabs

</Toolbar>

THE PROPS:
    arial-owns={anchorEl ? "simple-menu" : undefined}
    aria-haspopup={anchorEl ? "true" : undefined}
    onClick={(event) => handleClick(event)} You can also use onMouseHover
*/

// Remember put them in the Toolbar

/*
<Toolbar>
  <Menu id="simple-menu" anchorEl={anchorEl} open={open} onClose={handleClose}  MenuListProps={{ onMouseLeave: handleClose }}>
    <MenuItem onClick={handleClose}>Custom Software development </MenuItem>
    <MenuItem onClick={handleClose}>Mobile App development</MenuItem>
    <MenuItem onClick={handleClose}>Website development </MenuItem>
  </Menu>
</Toolbar>;
*/

// PROPS

// id="simple-menu"
//anchorEl={anchorEl}
//open={open}
//onClose={handleClose}
// MenuListProps={{ onMouseLeave: handleClose }} This is how we pass the onMoseLeave to the menu when a user hover out the menu

// STYLING MENUS

// Since the Menu was build on top of other component which is paper because it was the paper component which handles the menu. To be able to know that go to the API of the Menu and under css rule name you will see this paper	.MuiMenu-paper	Styles applied to the Paper component. you will see this also With a rule name under css

// Since we want to customise a component from a different component like in our case, we want to customise the paper component from our menu so instead of using className we will use classes and then we target the css rule name which is paper like so classes ={{paper: 'Your color here'}}

//RESPONSIVE DESIGN

// useMediaQuery: this helps us to get the createBreakpoints

// useTheme : this helps to get access to an instance of our theme so that we can change the breakpoints

//STEPS

//1. Create an instance of our theme
//  const theme = useTheme()
