import React, { useState } from "react";
import { Grid, Tabs, Tab, Box } from "@mui/material";
import UnsplashSearch from "./UnsplashSearch";
import boardStore from "../../../../store";
import SelectColor from "./SelectColor";

export default function HeaderSelectionModal({ bucket }) {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ height: "60vh", backgroundColor: "#191919" }}>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        aria-label="header selection tabs"
      >
        <Tab label="Colors" />
        <Tab label="Images" />
      </Tabs>

      {selectedTab === 0 && <SelectColor bucket={bucket} />}

      {selectedTab === 1 && (
        <Box sx={{ p: 2 }}>
          <UnsplashSearch bucket={bucket} />
        </Box>
      )}
    </Box>
  );
}
