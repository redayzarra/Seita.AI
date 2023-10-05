import React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import Typography from "@mui/joy/Typography";

const ExploreTabs = () => {
  return (
    <div className="w-full flex justify-center">
      <Tabs
        aria-label="tabs"
        defaultValue={0}
        sx={{ background: "transparent" }}
      >
        <TabList
          disableUnderline
          sx={{
            p: 0.5,
            gap: 0.5,
            borderRadius: "xl",

            "& .MuiTab-root:hover": {
              background: "transparent",
              color: "#cbd5e1",
            },
            "& .MuiTab-root": {
              color: "#cbd5e1", // default font color for non-selected tabs
            },
            "& .Mui-selected": {
              fontWeight: "bold",
              color: "#cbd5e1",
              background: "#1f2937",
            },
          }}
        >
          <div className="flex shadow-xl">
            <Tab disableIndicator>Insights</Tab>
            <Tab disableIndicator>Explore</Tab>
          </div>
        </TabList>
        <TabPanel value={0}>
          <Typography level="inherit">
            Get started with the industry-standard React UI library,
            MIT-licensed.
          </Typography>
          <Typography
            textColor="success.400"
            fontSize="xl3"
            fontWeight="xl"
            mt={1}
          >
            $0{" "}
            <Typography
              fontSize="sm"
              textColor="text.secondary"
              fontWeight="md"
            >
              － Free forever
            </Typography>
          </Typography>
        </TabPanel>
        <TabPanel value={1}>
          <Typography level="inherit">
            Best for professional developers building enterprise or data-rich
            applications.
          </Typography>
          <Typography
            textColor="primary.400"
            fontSize="xl3"
            fontWeight="xl"
            mt={1}
          >
            $15{" "}
            <Typography
              fontSize="sm"
              textColor="text.secondary"
              fontWeight="md"
            >
              / dev / month
            </Typography>
          </Typography>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ExploreTabs;
