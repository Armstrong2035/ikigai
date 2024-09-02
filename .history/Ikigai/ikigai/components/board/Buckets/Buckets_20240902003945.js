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

export default function Buckets() {
  const [editMode, setEditMode] = useState(false);
  const buckets = boardStore((state) => state.buckets);

  return (
    <Box sx={{ flexGrow: "1", overflow: "hidden" }}>
      <Typography variant="h6" gutterBottom>
        Recently visited
      </Typography>
    </Box>
    // <Grid container spacing={3}>
    //   {buckets.map((bucket) => (
    //     <Grid item key={bucket.id} lg={3} md={4} sm={12} xs={12}>
    //       <Link
    //         href={`/board/bucket/${bucket.id}`}
    //         style={{ textDecoration: "none" }}
    //       >
    //         <Stack
    //           spacing={5}
    //           sx={{
    //             // height: "40vh",
    //             backgroundColor: "#252525",
    //             borderRadius: "10px",
    //             overflow: "hidden",
    //           }}
    //         >
    //           <div
    //             style={{
    //               height: "70px",

    //               backgroundImage: bucket.headerImage.startsWith(
    //                 "linear-gradient"
    //               )
    //                 ? bucket.headerImage
    //                 : `url(${bucket.headerImage})`,
    //               backgroundSize: "cover",
    //               backgroundPosition: "center",
    //               backgroundRepeat: "no-repeat",
    //               width: "100%",
    //               position: "relative",
    //             }}
    //           ></div>
    //           <Typography
    //             variant="h5"
    //             alignSelf="center"
    //             sx={{ color: "#d6d6d6" }}
    //           >
    //             {bucket.title}
    //           </Typography>
    //         </Stack>
    //       </Link>
    //     </Grid>
    //   ))}
    // </Grid>
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
