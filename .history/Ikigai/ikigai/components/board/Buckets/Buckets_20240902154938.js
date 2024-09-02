"use client";
import React, { useState } from "react";
import Link from "next/link";

import boardStore from "../store";
import {
  Grid,
  Paper,
  Stack,
  IconButton,
  Typography,
  Box,
  Container,
  Button,
  Card,
  CardContent,
  CardHeader,
  Avatar,
} from "@mui/material";
import BucketTitle from "./Bucket/BucketTitle/BucketTitle";
import ColorPicker from "./Bucket/BucketColor/BucketColor";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Buckets() {
  const [editMode, setEditMode] = useState(false);
  const buckets = boardStore((state) => state.buckets);
  const reverseBuckets = buckets.slice().reverse();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Container>
      <Grid container spacing={3}>
        {reverseBuckets.map((bucket) => (
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
                <Typography variant="p" sx={{ color: "#d6d6d6" }}>
                  {bucket.title}
                </Typography>
              </Stack>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

{
  /* <Card sx={{ minHeight: "40vh", backgroundColor: "#F1FAFC" }}>
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
          <IconButton onClick={() => setEditMode(false)}>
            <CheckIcon />
          </IconButton>
        </Stack>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <ColorPicker bucketId={bucket.id} />
      </Box>
    </Stack>
  ) : (
    <Stack>
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
          <Typography sx={{ margin: "0px 10px" }}>{bucket.title}</Typography>

          <IconButton onClick={() => setEditMode(true)}>
            <EditIcon />
          </IconButton>
        </Stack>
      </Box>

      <Link
        href={`/board/bucket/${encodeURIComponent(bucket.id)}`}
        passHref
      ></Link>
    </Stack>
  )}
</Card>; */
}
