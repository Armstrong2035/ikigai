import React, { useState } from "react";
import { Grid, Tabs, Tab, Box } from "@mui/material";
import UnsplashSearch from "./UnsplashSearch";
import boardStore from "../../../../store";
import SelectColor from "./SelectColor";

export default function HeaderSelectionModal() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        aria-label="header selection tabs"
      >
        <Tab label="Gradients and Colors" />
        <Tab label="Images" />
      </Tabs>

      {selectedTab === 0 && <SelectColor />}

      {selectedTab === 1 && (
        <Box sx={{ p: 2 }}>
          {/* Content for Images tab */}
          <UnsplashSearch />
        </Box>
      )}
    </Box>
  );
}
