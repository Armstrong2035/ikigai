import React from 'react';
import { Grid, Typography, useTheme, useMediaQuery } from "@mui/material";

export default function HeroText({ styles }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography 
          variant={isMobile ? "h4" : "h3"} 
          component="h1"
          align="left" 
          sx={{
            ...styles.heading,
            wordBreak: 'break-word',
            fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
            lineHeight: 2,
          }}
        >
          DO EVERYTHING {isMobile ? '' : <br />} THAT MATTERS TO YOU
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography 
          variant="body1" 
          align="left" 
          sx={{
            ...styles.body,
            fontSize: { xs: '0.875rem', sm: '1rem' },
            maxWidth: '600px',
          }}
        >
          The Ikigai app combines elements of the Eisenhower matrix, time
          blocking, and the pomodoro technique into a single framework that
          helps you juggle multiple responsibilities and interests.
        </Typography>
      </Grid>
    </Grid>
  );
}