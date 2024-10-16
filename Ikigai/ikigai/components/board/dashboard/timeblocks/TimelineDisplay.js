import { Container, Typography, Box, Stack } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function TimelineDisplay({ todaysBlocks }) {
  return (
    <div>
      {todaysBlocks.map((block) => {
        const startTime = new Date(block.startTime);
        const endTime = new Date(block.endTime);
        const formattedStartTime = startTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        const formattedEndTime = startTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        return (
          <Box>
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Box>
                    <Typography sx={{ color: "#d6d6d6" }}>
                      {block.name}
                    </Typography>
                    <Typography sx={{ color: "#d6d6d6" }}>
                      {`${formattedStartTime} - ${formattedEndTime}`}
                    </Typography>

                    <Typography
                      variant={"p"}
                      sx={{ color: "#d6d6d6" }}
                    >{`Repeating every ${block.repeatEvery}`}</Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Box>
        );
      })}
    </div>
  );
}
