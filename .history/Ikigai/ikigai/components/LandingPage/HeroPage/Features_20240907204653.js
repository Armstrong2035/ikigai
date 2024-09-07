import { Folder } from "@mui/icons-material";
import FolderCopyTwoToneIcon from "@mui/icons-material/FolderCopyTwoTone";
import AccountTreeTwoToneIcon from "@mui/icons-material/AccountTreeTwoTone";
import HubTwoToneIcon from "@mui/icons-material/HubTwoTone";
import { Icon, Stack, Typography, Grid, Box } from "@mui/material";

export default function Features({ styles }) {
  const features = [
    {
      title: "Modules",
      description:
        "Manage your life with modules. E.g Career module, Learning module, Fitness module, e.t.c ",
      icon: FolderCopyTwoToneIcon,
    },
    {
      title: "Activities",
      description:
        "Add activities to each module, and add tasks to each activity. E.g Inside the career module, add activities such as job hunting, networking, meetings e.t.c ",
      icon: AccountTreeTwoToneIcon,
    },
    {
      title: "Relationships",
      description:
        "Visualize how all your different activities are connected. E.g Job hunting is connected to networking ",
      icon: HubTwoToneIcon,
    },
  ];

  return (
    <Box sx={{ marginLeft: "10px", marginRight: "10px" }}>
      <Grid container direction="row" spacing={5}>
        {features.map((feature) => (
          <Grid
            item
            key={feature.title}
            sm={12}
            lg={4}
            container
            direction="column"
            alignItems="center"
            // textAlign="center"
          >
            <feature.icon sx={{ fontSize: 70, color: "yellow" }} />
            <Typography sx={{ ...styles.bodyBold, mt: 2 }}>
              {feature.title}
            </Typography>
            <Typography sx={{ ...styles.body, mt: 1 }}>
              {feature.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
