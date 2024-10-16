import { useEffect, useState } from "react";
import boardStore from "../../store";
import { CardHeader, Card, CardContent, Typography } from "@mui/material";
import TimelineDisplay from "./TimelineDisplay";

export default function VisualizeTimeblocks() {
  const timeblocks = boardStore((state) => state.timeblocks);
  const [todaysBlocks, setTodaysBlocks] = useState([]);

  console.log(timeblocks);

  useEffect(() => {
    const getTodaysBlocks = async () => {
      const date = new Date();
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const today = days[date.getDay()];

      console.log(today);
      console.log(timeblocks);

      const todaysBlocks = timeblocks.filter((timeblock) => {
        try {
          // Check if timeblock's checkedDays include today
          return timeblock.checkedDays[today] === true; // Ensure it returns a boolean
        } catch (error) {
          console.log(error);
          return false; // In case of an error, exclude this timeblock
        }
      });

      setTodaysBlocks(todaysBlocks);

      console.log(todaysBlocks);
    };

    getTodaysBlocks();

    // console.log(today);
  }, [timeblocks]);
  console.log(todaysBlocks);

  return (
    <Card
      sx={{
        backgroundColor: "#252525",
        // display: "flex",
        // justifyContent: "flex-start",
        // alignItems: "flex-start",
        // flexDirection: "column",
      }}
    >
      <CardHeader
        title={
          <Typography variant="h4" sx={{ color: "#d6d6d6" }}>
            Today's activities
          </Typography>
        }
      />
      <CardContent>
        <TimelineDisplay todaysBlocks={todaysBlocks} />
      </CardContent>
    </Card>
  );
}

/*How to implment this component: 
useEffect to loop through timeBlocks, and return every thing that aligns with today's date. */
