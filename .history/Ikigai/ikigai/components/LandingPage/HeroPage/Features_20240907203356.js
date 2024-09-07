import { Folder } from "@mui/icons-material";
import FolderCopyTwoToneIcon from "@mui/icons-material/FolderCopyTwoTone";
import AccountTreeTwoToneIcon from "@mui/icons-material/AccountTreeTwoTone";
import HubTwoToneIcon from "@mui/icons-material/HubTwoTone";
import { Icon, Stack, Typography, Container } from "@mui/material";

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
    <div style={{ marginLeft: "10px", marginRight: "20px" }}>
      <Stack direction={"row"}>
        {features.map((feature) => (
          <Stack key={feature.title}>
            <feature.icon />
            <Typography sx={styles.bodyBold}>{feature.title}</Typography>
            <Typography sx={styles.body}>{feature.description}</Typography>
          </Stack>
        ))}
      </Stack>
    </div>
  );
}
