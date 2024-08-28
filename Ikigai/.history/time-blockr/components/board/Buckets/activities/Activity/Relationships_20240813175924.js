import React, { useState } from "react";
import boardStore from "../../../store";
import { Box, Stack, Chip, FormGroup, FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

export default function Relationships({ bucketId, activity }) {
  const [relationships, setRelationships] = useState([]);
  const addRelationship = boardStore((state) => state.addRelationship);
  const buckets = boardStore((state) => state.buckets);

  const allActivities = buckets.flatMap((bucket) =>
    bucket.activities.map((activity) => activity)
  );

  

  console.log(allActivities);

  const addRelationships = async (e) => {

        const exists = relationships.some(
          (relationship) => relationship.id === activity.id
        );

        !exists
          ? setRelationships([...relationships, e.target.value])
          : relationships;
      }}
    addRelationship(relationships);


  return (
    <>
      <Box>
        {relationships.map((relationship) => (
          <Stack direction="row">
            <Chip label={`${relationship}`} />
          </Stack>
        ))}

        <FormGroup>
          {allActivities.map((activity) => (
            <FormControlLabel
              control={<Checkbox />}
              label={`${activity.title}`}
              value={activity}
              onChange={}
            />
          ))}
        </FormGroup>
      </Box>
    </>
  );
}
