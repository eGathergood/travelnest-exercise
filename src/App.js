import "./App.css";
import React from "react";
import Launch from "./Launch";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <Grid container direction="column">
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <Launch />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
