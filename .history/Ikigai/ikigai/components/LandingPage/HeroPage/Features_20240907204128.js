import { Folder } from "@mui/icons-material";
import FolderCopyTwoToneIcon from "@mui/icons-material/FolderCopyTwoTone";
import AccountTreeTwoToneIcon from "@mui/icons-material/AccountTreeTwoTone";
import HubTwoToneIcon from "@mui/icons-material/HubTwoTone";
import { Icon, Stack, Typography, Grid } from "@mui/material";

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
    <div style={{ marginLeft: "10px", marginRight: "10px" }}>
      <Grid
        container
        direction={"row"}
        spacing={5}
        justifyContent={"center"}
        alignItems="center"
      >
        {features.map((feature) => (
          <Grid item key={feature.title} sm={12} lg={4}>
            <feature.icon sx={{ fontSize: 100 }} />
            <Typography sx={styles.bodyBold}>{feature.title}</Typography>
            <Typography sx={styles.body}>{feature.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
