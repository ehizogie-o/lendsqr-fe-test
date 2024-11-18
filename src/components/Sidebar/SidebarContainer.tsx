import { List, ListSubheader } from "@mui/material";
import { ReactNode } from "react";
import "../../assets/styles/global.scss";
function SidebarContainer({ subheader, children }: SidebarContainerProps) {
  return (
    <List
      sx={{ mb: 2 }}
      subheader={
        <ListSubheader className="list-subheader">{subheader}</ListSubheader>
      }
    >
      {children}
    </List>
  );
}

interface SidebarContainerProps {
  subheader?: string;
  children?: ReactNode;
}

export default SidebarContainer;
