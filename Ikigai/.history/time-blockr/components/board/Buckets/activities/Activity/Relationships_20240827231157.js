import boardStore from "../../../store";
import { Box, Chip } from "@mui/material";

export default function Relationships() {
  const removeRelationship = boardStore((state) => state.removeRelationship);
  const relationships = boardStore((state) => state.relationships);
  const handleDelete = (relationshipToDelete) => {
    removeRelationship(relationshipToDelete.id);
  };
  return (
    <>
      <Box sx={{ mt: 2 }}>
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
              onDelete={() => handleDelete(rel)}
              sx={{ mr: 1, mb: 1 }}
            />
          ))}
      </Box>
    </>
  );
}
