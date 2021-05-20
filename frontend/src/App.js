import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Employees from "./modules/Employees/index";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import { withTheme } from "./theme";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(2), // Material UI spacing
    },
    position: "absolute",
    overflow: "auto",
    backgroundColor: theme.palette.background.paper, // Makes it the same color as the paper color
    // backgroundImage: `url(${"https://www.transparenttextures.com/patterns/cubes.png"})`,
  },
}));

function App(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { darkMode, setDarkMode } = props;

  return (
    <Grid className={classes.root} container direction="column">
      <Grid item container justify="flex-end">
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          }
          label="Dark Mode"
        />
      </Grid>
      <Grid item>
        <Employees />
      </Grid>
    </Grid>
  );
}

export default withTheme(App);
