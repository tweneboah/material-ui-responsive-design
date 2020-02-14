import React, { useState } from "react";
import { SwipeableDrawer, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";

//INLINE STYLES
const useStyles = makeStyles((theme) => ({
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

const NavbarSideDrawer = () => {
  //Extract classes
  const classes = useStyles();
  //DRAWER
  //check if we are on ios
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
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
};

export default NavbarSideDrawer;
