"use client";
import React from "react";
import boardStore from "./store";
import { useStore } from "zustand";
import {
  IconButton,
  Box,
  CardHeader,
  Card,
  Grid,
  Container,
  FormGroup,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";

export default function Board() {
  const buckets = useStore(boardStore, (state) => state.buckets);
  const addBucket = useStore(boardStore, (state) => state.addBucket);
  const updateBucketTitle = useStore(
    boardStore,
    (state) => state.updateBucketTitle
  );

  const handleAddBucket = () => {
    const newBucket = {
      id: Date.now(),
      title: "",
      activities: [],
    };
    addBucket(newBucket);
  };

  return (
    <>
      <div>
        <IconButton onClick={handleAddBucket}>
          <AddIcon />
        </IconButton>

        <Container>
          <Grid container spacing={3}>
            {buckets.map((bucket) => (
              <Grid item lg={4}>
                <Card key={bucket.id}>
                  <CardHeader
                    title={
                      <FormGroup onSubmit={(e) => e.preventDefault()}>
                        <Stack direction="row">
                          <TextField
                            type="text"
                            required
                            id="buckettitle"
                            value={bucket.title}
                            onChange={(e) =>
                              updateBucketTitle(bucket.id, e.target.value)
                            }
                            placeholder="Bucket title"
                            style={{ border: "none" }}
                          />

                          <IconButton>
                            <CheckIcon />
                          </IconButton>
                        </Stack>
                      </FormGroup>
                    }
                  ></CardHeader>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}
