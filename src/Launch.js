import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./Requests";
import Ship from "./Ship";
import { Grid, Typography } from "@material-ui/core";
import { parseISO } from "date-fns";

function Launch() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(requests.fetchLatestLaunch)
        .then((result) => {
          setData(result.data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          setError(true);
        });
    }
    fetchData();
  }, []);

  if (error) {
    return <h1>An error has occured</h1>;
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="App">
      <Typography variant="h4">Mission Name: {data.name}</Typography>
      <Typography variant="subtitle1">
        {parseISO(data.date_utc).toDateString()}
      </Typography>
      <Typography variant="body1">{data.details}</Typography>
      <Typography variant="body1" gutterBottom>
        The following ships were used in this launch:
      </Typography>

      <Grid container spacing={2}>
        {data.ships &&
          data.ships.map((shipId, index) => (
            <Grid item sm={4} xs={12} key={index}>
              <Ship shipId={shipId} fetchUrl={requests.fetchSingleShip} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default Launch;
