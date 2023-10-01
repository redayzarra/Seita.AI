import * as React from "react";
import Grid from "@mui/joy/Grid";
import Item from "./components/Item";

const Instagram = () => {
  return (
    <div>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={0} md={1}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Instagram;
