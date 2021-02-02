import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";
import axios from "./axios";

function Ship({ shipId, fetchUrl }) {
  const [shipData, setShipData] = useState();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl + shipId).catch((error) => {
        console.error(error);
      });
      setShipData(request.data);
      return request;
    }
    fetchData();
  }, [shipId, fetchUrl]);

  return (
    <>
      {shipData && (
        <Card>
          <CardHeader title={shipData.name} />
          <CardMedia style={{ height: "150px" }} image={shipData.image} />
          <CardContent>
            <Typography variant="body2" component="p">
              Type: {shipData.type}
            </Typography>
            <Typography variant="body2" component="p">
              Port: {shipData.home_port}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
}

export default Ship;
