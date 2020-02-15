import { createMuiTheme } from "@material-ui/core";

// This create an instance of a default so what we pass into this overide it

const arcBlue = "#0872B9";
const arcOrange = "#FFBA60";

export default createMuiTheme({
  // MANAGING COLORS
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`
    },
    // Passing to MUI to overide it with our colors
    primary: {
      main: `${arcBlue}`
    },
    secondary: {
      main: `${arcOrange}`
    }
  },
  typography: {
    tab: {
      fontFamily: "arial",
      textTransform: "none",
      fontSize: "1.3rem",
      fontWeight: 700
    },
    estimate: {
      fontSize: "1rem",
      textTransform: "none",
      color: "white"
    }
  }
  // Customize the default material ui so anytime the component is rendered it will have these styles

  // This is how we override the default settings.override is required and specify the css name
  // overrides: {
  //   MuiInputLabel: {
  //     root: {
  //       color: "blue",
  //       fontSize: "rem"
  //     }
  //   },
  //   //This target the input
  //   MuiInput: {
  //     underline: {
  //       "&:before": {
  //         borderBottom: "2px solid black"
  //       }
  //     }
  //   }
  // }
});
