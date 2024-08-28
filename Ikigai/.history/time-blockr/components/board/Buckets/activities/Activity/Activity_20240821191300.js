"use client";
import React, { useState } from "react";
import boardStore from "../../../store";
import Title from "./Title";
import AddRelationship from "./AddRelationships";
import Tasks from "./Tasks/Tasks";
import { Box, Card, CardHeader, Chip } from "@mui/material";
import Priority from "./Priority";

export default function Activity({ bucketId, activity, bucket }) {
  const buckets = boardStore((state) => state.buckets);
  const relationships = boardStore((state) => state.relationships);

  console.log(buckets);

  console.log(activity.relationships);

  return (
    <>
      <Card>
        <CardHeader
          title={activity.title}
          subheading={
            <div>
              {relationships
                .filter(
                  (rel) =>
                    rel.activity1.id === activity.id ||
                    rel.activity2.id === activity.id
                )
                .map((rel) => (
                  <Chip
                    key={rel.id}
                    label={
                      rel.activity1.id === activity.id
                        ? rel.activity2.title
                        : rel.activity1.title
                    }
                  />
                ))}
            </div>
          }
        />

        <Title bucketId={bucketId} activity={activity} />
        <AddRelationship bucketId={bucketId} activity={activity} />
        <Priority bucketId={bucketId} activity={activity} />
        <Tasks bucketId={bucketId} activity={activity} />

        {/* 
        
        <Stats bucketId={bucketId} activity={activity} /> */}
      </Card>
    </>
  );
}
