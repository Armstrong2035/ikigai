import React, { useState } from "react";
import Link from "next/link";
import boardStore from "../store";
import {
  Grid,
  Stack,
  Typography,
  Box,
  Container,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AddIcon from "@mui/icons-material/Add";

export default function Buckets() {
  const [editMode, setEditMode] = useState(false);
  const buckets = boardStore((state) => state.buckets);
  const addBucket = boardStore((state) => state.addBucket);

  // Create an 'add new bucket' placeholder
  const addNewBucket = {
    id: "add-new",
    title: "+",
    headerImage: "", // Optional or use a default icon if you like
  };

  const handleAddBucket = async () => {
    const newBucket = {
      id: `${Date.now()}`,
      title: "New Bucket",
      headerImage: "",
      icon: "",
      activities: [],
    };
    addBucket(newBucket);
  };

  // Insert the addNewBucket object as the last element
  const reverseBuckets = [...buckets.slice().reverse(), addNewBucket];

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Container>
      <Grid container spacing={3}>
        {reverseBuckets.map((bucket) =>
          bucket.id === "add-new" ? (
            <Grid item key={bucket.id} lg={3} md={4} sm={6} xs={6}>
              <Stack
                alignItems={"center"}
                sx={{
                  height: isDesktop ? "40vh" : "150px",
                  backgroundColor: "#252525",
                  borderRadius: "10px",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <IconButton
                  color="primary"
                  size="large"
                  onClick={handleAddBucket}
                >
                  <AddIcon sx={{ fontSize: 60, color: "#d6d6d6" }} />
                </IconButton>
              </Stack>
            </Grid>
          ) : (
            <Grid item key={bucket.id} lg={3} md={4} sm={6} xs={6}>
              <Link
                href={`/board/bucket/${bucket.id}`}
                style={{ textDecoration: "none" }}
              >
                <Stack
                  alignItems={"center"}
                  sx={{
                    height: isDesktop ? "40vh" : "150px",
                    backgroundColor: "#252525",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "50%",
                      backgroundImage: bucket.headerImage.startsWith(
                        "linear-gradient"
                      )
                        ? bucket.headerImage
                        : `url(${bucket.headerImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                      position: "relative",
                    }}
                  ></div>
                  <Box
                    sx={{
                      height: "50%",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="p" sx={{ color: "#d6d6d6" }}>
                      {bucket.title}
                    </Typography>
                  </Box>
                </Stack>
              </Link>
            </Grid>
          )
        )}
      </Grid>
    </Container>
  );
}
