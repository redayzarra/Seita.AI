import React from "react";
import Grid from "@mui/joy/Grid";
import Body from "./components/Body";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import DrawerButton from "./components/DrawerButton";

const Instagram: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-start-color to-end-color">

      <Grid container>
        {/* Sidebar for medium Screens */}
        <Grid
          component="div"
          lg="auto"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <SideBar />
        </Grid>

        {/* Content Area */}
        <Grid component="div" xs={2} sx={{ flexGrow: 1 }}>
          {/* Navigation Section for small screens */}
          <Grid
            component="div"
            xs={12}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <NavBar>
              <DrawerButton>
                <SideBar />
              </DrawerButton>
            </NavBar>
          </Grid>
          {/* Navigation Section for medium screens */}
          <Grid
            component="div"
            xs={12}
            sx={{ display: { xs: "none", md: "flex" } }}
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

export default Instagram;
