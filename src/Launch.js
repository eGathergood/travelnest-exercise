import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./Requests";
import Ship from "./Ship";
import { Grid, Typography } from "@material-ui/core";

function Launch() {
  const [data, getData] = useState({ ships: [] });

  useEffect(() => {
    axios
      .get(requests.fetchLatestLaunch)
      .then((result) => getData(result.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Typography variant="h4" gutterBottom>
        {data.name}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {data.date_utc}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {data.details}
      </Typography>
      <Typography variant="body1" gutterBottom>
        The following ships were used in this launch:
      </Typography>

      <Grid container spacing={2}>
        {data.ships.map((shipId, index) => (
          <Grid item sm={4} xs={12} key={index}>
            <Ship shipId={shipId} fetchUrl={requests.fetchSingleShip} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Launch;
