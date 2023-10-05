import React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";

const ExploreTabs = () => {
  return (
    <div className="inline-block">
      <Tabs aria-label="tabs" defaultValue={0} sx={{ bgcolor: "transparent" }}>
        <TabList
          disableUnderline
          sx={{
            p: 0.5,
            gap: 0.5,
            borderRadius: "xl",
            bgcolor: "#121212",
            "& .MuiTab-root": {
              color: "#aaa", // default font color for non-selected tabs
            },
            "& .Mui-selected": {
              fontWeight: "bold",
              color: "#fff",
              bgcolor: "#2d2d2d",
            },
          }}
        >
          <Tab disableIndicator>Insights</Tab>
          <Tab disableIndicator>Explore</Tab>
        </TabList>
      </Tabs>
    </div>
  );
};

export default ExploreTabs;
