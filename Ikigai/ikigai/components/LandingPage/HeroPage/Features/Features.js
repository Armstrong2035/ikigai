import { Folder } from "@mui/icons-material";
import FolderCopyTwoToneIcon from "@mui/icons-material/FolderCopyTwoTone";
import AccountTreeTwoToneIcon from "@mui/icons-material/AccountTreeTwoTone";
import HubTwoToneIcon from "@mui/icons-material/HubTwoTone";
import { Icon, Stack, Typography, Grid, Box, Card, Container, Button, Chip, CardContent, CardActions } from "@mui/material";
import features from "./featureList";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Change this line
import { Collapse } from "@mui/material";
import React from "react";

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


export default function Features({ styles }) {

  return (
    <Box sx={{ marginLeft: "10px", marginRight: "10px" }}>   
      <Grid container direction='row' spacing={3}>
        {features.map((feature, index) => (           
            <Grid item lg={3} sm={6} xs={12} key={index}>
              
                
                <Card variant='outlined' sx={{ backgroundColor: '#191919', border: '1px solid #252525', padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Chip label={feature.built? 'Available': 'Coming soon'} sx={{backgroundColor: feature.built? '#2D5E35': '#9B6E23' , color: '#FFFFFF'}} />
              <Box sx={{ height: 200, width: 200, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image src={feature.image} alt={feature.title} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
              </Box>
              <CardContent>

                <Accordion elevation='none' sx={{ backgroundColor: '#191919', color: '#ffffff' }}>
                  <AccordionSummary 
                    expandIcon={<ExpandMoreIcon sx={{ color: '#ffffff' }} />}
                    sx={{ borderBottom: '1px solid #252525' }}
                  >
                    <Typography sx={{ ...styles.bodyBold, color: '#ffffff' }}>
                      {feature.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: '#ffffff' }}>
                      {feature.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
             
              </CardContent>
              </Card>
                
                
                    
            </Grid>
        ))}
      </Grid>
    </Box>
  )
}

