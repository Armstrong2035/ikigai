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
import {
  Home,
  Work,
  EmojiEmotions,
  Fastfood,
  Description,
  CheckCircle,
} from "@mui/icons-material";

export default function Buckets() {
  const [editMode, setEditMode] = useState(false);
  const buckets = boardStore((state) => state.buckets);

  return (
    <Container sx={{ overflowX: "auto", padding: "0 10px" }}>
      <Typography variant="h6" gutterBottom>
        Buckets
      </Typography>
      <Box sx={{ overflow: "auto" }}>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            minWidth: "min-content",
            pb: 2, // Add some padding at the bottom for scrollbar space
          }}
        >
          {buckets.map((bucket) => (
            <Card
              key={bucket.id}
              sx={{
                minWidth: 200,
                bgcolor: "grey.900",
                flexShrink: 0, // Prevent the cards from shrinking
              }}
            >
              <CardContent sx={{ p: 2 }}>
                <Box sx={{ mb: 1 }}>
                  {/* Assuming bucket.icon is available, otherwise replace with a default icon */}
                  {bucket.icon || <Home />}
                </Box>
                <Typography
                  variant="subtitle2"
                  component="div"
                  sx={{ mb: 0.5 }}
                >
                  {bucket.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {/* Assuming bucket.date is available, otherwise replace with a default date */}
                  {bucket.date || "Date not available"}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
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
