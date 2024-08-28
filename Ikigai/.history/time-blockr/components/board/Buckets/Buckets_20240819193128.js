"use client";
import React, { useState } from "react";
import boardStore from "../store";
import { Grid, Paper, Stack, IconButton, Typography, Box } from "@mui/material";
import Link from "next/link";
import BucketTitle from "./Bucket/BucketTitle/BucketTitle";
import ColorPicker from "./Bucket/BucketColor/BucketColor";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

export default function Buckets() {
  const [editMode, setEditMode] = useState(false);
  const buckets = boardStore((state) => state.buckets);

  return (
    <Grid container spacing={3}>
      {buckets.map((bucket) => (
        <Grid item lg={3} md={6} sm={12} key={bucket.id}>
          <Link
            href={`/board/bucket/${encodeURIComponent(bucket.id)}`}
            passHref
          >
            <Paper
              sx={{ minHeight: "40vh", backgroundColor: `${bucket.color}` }}
            >
              {editMode ? (
                <Stack direction="column" sx={{ height: "100%" }}>
                  <Box
                    sx={{
                      backgroundColor: "white",
                      borderBottom: "1px solid grey",
                      padding: "20px",
                    }}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <BucketTitle
                        bucketId={bucket.id}
                        title={bucket.title}
                        bucket={bucket}
                        sx={{ margin: "0px 10px" }}
                      />
                      <IconButton
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent the click from affecting the Link
                          setEditMode(false);
                        }}
                      >
                        <CheckIcon />
                      </IconButton>
                    </Stack>
                  </Box>

                  {/* Centering ColorPicker */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexGrow: 1, // Allows the Box to take up the remaining space
                    }}
                  >
                    <ColorPicker
                      bucketId={bucket.id}
                      onClick={(e) => e.stopPropagation()} // Prevent the click from affecting the Link
                    />
                  </Box>
                </Stack>
              ) : (
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderBottom: "1px solid grey",
                    padding: "20px",
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography sx={{ margin: "0px 10px" }}>
                      {bucket.title}
                    </Typography>

                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent the click from affecting the Link
                        setEditMode(true);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                  </Stack>
                </Box>
              )}
            </Paper>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
