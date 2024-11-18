import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";

import "../../assets/styles/global.scss";

function SidebarItem({
  icon,
  primaryText,
  expand,
  active,
  onClick,
  disableOpacity = false,
  onLogout,
}: SidebarItemProps) {
  const handleClick = () => {
    if (onLogout) {
      onLogout();
    } else if (onClick) {
      onClick();
    }
  };
  return (
    <ListItemButton
      onClick={handleClick}
      sx={{
        px: 3,
        bgcolor: active === primaryText ? "rgba(57, 205, 204, 0.06)" : null,
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "3px",
          backgroundColor: active === primaryText ? "#39CDCC" : "transparent",
        },
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 30,
          opacity: !disableOpacity && active !== primaryText ? "0.6" : "1",
        }}
      >
        <img src={icon} alt="icon" />
      </ListItemIcon>
      <ListItemText
        primary={primaryText}
        className="list-item"
        sx={{
          opacity: !disableOpacity && active !== primaryText ? "0.6" : "1",
        }}
      />
      {expand && <ExpandMore fontSize="small" sx={{ color: "#213f7d" }} />}
    </ListItemButton>
  );
}

interface SidebarItemProps {
  icon: string;
  primaryText: string;
  expand?: boolean;
  active?: string;
  onClick?: () => void;
  disableOpacity?: boolean;
  onLogout?: () => void;
}

export default SidebarItem;
