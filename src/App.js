import "./App.css";
import React from "react";
import Launch from "./Launch";
import { Grid, Paper } from "@material-ui/core";

function App() {
  return (
    <Paper>
      <Grid container direction="column">
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <Launch />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default App;
