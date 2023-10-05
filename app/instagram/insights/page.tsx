import React from "react";
import Grid from "@mui/joy/Grid";
import Body from "../components/Body";
import DrawerButton from "../components/navbar/DrawerButton";
import HiddenSideBar from "../components/sidebar/HiddenSideBar";
import NavBar from "../components/navbar/NavBar";
import SideBar from "../components/sidebar/SideBar";

const Insights = () => {
  return (
    <div className="bg-gradient-radial from-start-color to-end-color">
      <Grid container>
        {/* Sidebar for large Screens */}
        <Grid
          component="div"
          lg="auto"
          sx={{ display: { xs: "none", lg: "flex" } }}
        >
          <SideBar />
        </Grid>

        {/* Content Area */}
        <Grid component="div" xs={2} sx={{ flexGrow: 1 }}>
          {/* Navigation Section for small screens */}
          <Grid
            component="div"
            xs={12}
            sx={{ display: { xs: "flex", lg: "none" } }}
          >
            <NavBar>
              <DrawerButton>
                <HiddenSideBar />
              </DrawerButton>
            </NavBar>
          </Grid>
          {/* Navigation Section for large screens */}
          <Grid
            component="div"
            xs={12}
            sx={{ display: { xs: "none", lg: "flex" } }}
          >
            <NavBar />
          </Grid>

          {/* Main Body Section */}
          <Grid component="div" xs={12}>
            <Body />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Insights;
