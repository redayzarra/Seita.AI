import React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";

const ExploreTabs = () => {
  return (
    <div className="w-full flex justify-center">
      <Tabs aria-label="tabs" defaultValue={0} sx={{ bgcolor: "transparent" }}>
        <div className=" shadow-xl">
          <TabList
            disableUnderline
            sx={{
              p: 0.5,
              gap: 0.5,
              borderRadius: "xl",

              "& .MuiTab-root": {
                color: "#cbd5e1", // default font color for non-selected tabs
              },
              "& .MuiTab-root:hover": {
                bgcolor: "#374151",
                color: "#cbd5e1",
              },
              "& .Mui-selected": {
                fontWeight: "bold",
                color: "#cbd5e1",
                bgcolor: "#1f2937",
              },
            }}
          >
            <Tab disableIndicator>Insights</Tab>
            <Tab disableIndicator>Explore</Tab>
          </TabList>
        </div>
      </Tabs>
    </div>
  );
};

export default ExploreTabs;
