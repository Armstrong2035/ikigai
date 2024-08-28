import React from "react";
import boardStore from "../../../store";

export default function Relationships({ bucketId, activity }) {
  const [relationships, setRelationships] = useState([]);
  const addRelationship = boardStore((state) => state.addRelationship);

  const addRelationships = () => {
    addRelationship(relationships);
  };
}
