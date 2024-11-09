import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import {
  Box,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
  Button,
  Container,
} from "@mui/material";
import Link from "next/link";
import HeroButton from "./HeroButton";

export default function HeroPage({ styles }) {
  const theme = useTheme();

  // Responsive headline styles
  const headline = {
    fontFamily: '"Open Sans", sans-serif',
    fontStyle: "normal",
    fontWeight: 600,
    color: "rgb(255, 255, 255)",
    textAlign: "center",
    fontSize: "48px", // Default for smaller screens
    lineHeight: "60px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "56px",
      lineHeight: "68px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "64px",
      lineHeight: "77px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "72px",
      lineHeight: "84px",
    },
  };

  // Responsive body text styles
  const body = {
    fontFamily: '"Open Sans", sans-serif',
    fontStyle: "normal",
    fontWeight: 400,
    color: "rgb(145, 150, 154)",
    fontSize: "16px", // Default for smaller screens
    lineHeight: "24px",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
      lineHeight: "27px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
      lineHeight: "30px",
    },
  };

  return (
    <Container>
      <Stack
        sx={{ mb: 5 }}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={1}
      >
        {/* <Typography sx={headline}>
          A modular approach to productivity.
        </Typography> */}
        <Typography sx={headline}>Simpler than Notion.</Typography>
        <Typography sx={headline}>More Modular than Todoist.</Typography>
      </Stack>

      <Typography sx={body}>
        Ikigai combines elements of the Eisenhower Matrix, and Time Blocking
        into a single framework that helps you juggle multiple responsibilities
        and interests.
      </Typography>

      <Link href={`/board`}>
        <Button
          variant={"contained"}
          sx={{
            borderRadius: "25px",
            mt: 5,
            backgroundColor: "white",
            color: "black",
          }}
        >
          Get Started / Continue
        </Button>
      </Link>
    </Container>
  );
}
