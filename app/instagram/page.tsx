import React from "react";
import Grid from "@mui/joy/Grid";
import Item from "./components/Item";
import DrawerButton from "./components/DrawerButton";

const Instagram: React.FC = () => {
  return (
    <Grid container>
      {/* Sidebar */}
      <Grid xs={12} lg={3}>
        <DrawerButton>
          {/* Sidebar Content */}
          Your Sidebar Content Here
        </DrawerButton>
      </Grid>

      {/* Right side of the Sidebar */}
      <Grid xs={12} lg={9}>
        {/* Navigation Section */}
        <Grid xs={12}>
          {/* Other Navigation Items Visible on Large Screens */}
        </Grid>

        {/* Main Body Section */}
        <Grid xs={12}>
          {/* Your Main Body Content Here */}
          <Item />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Instagram;
