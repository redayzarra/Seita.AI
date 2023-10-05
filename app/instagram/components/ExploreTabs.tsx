import React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";

const ExploreTabs = () => {
  return (
    <div className="inline-block shadow-xl">
      <Tabs aria-label="tabs" defaultValue={0} sx={{ bgcolor: "transparent" }}>
        <TabList
          disableUnderline
          sx={{
            p: 0.5,
            gap: 0.5,
            borderRadius: "xl",
            bgcolor: "#212b36",
            "& .MuiTab-root": {
              color: "#e2e8f0", // default font color for non-selected tabs
            },
            "& .Mui-selected": {
              fontWeight: "bold",
              color: "#e2e8f0",
              bgcolor: "#161c24",
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
