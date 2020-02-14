import React, { useState, useEffect } from "react";
import { Tab, Tabs, Button, Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

//INLINE STYLES
//---------------------------------
const useStyles = makeStyles((theme) => ({
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
  }
}));

const NavbarTabs = () => {
  //Extract classes
  const classes = useStyles();
  //Create an instance of our theme for responsive design
  // Menu hook
  const [anchorEl, setAnchorEl] = useState(null); //position of the menu
  const [openMenu, setOpenMenu] = useState(false); //Determine the visibility of the menu
  //hooks for the tab
  const [value, setValue] = useState(0);
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

  // HandleClose for the menu
  //----------------------------------
  const handleClose = (e) => {
    setAnchorEl(null); //Don't set any position
    setOpenMenu(false);
  };

  //Determine the selected tab when the page refreshes
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

  return (
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
};

export default NavbarTabs;
