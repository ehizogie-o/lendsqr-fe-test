import { Menu, MenuItem, Box } from "@mui/material";
import view from "../../../assets/images/view.png";
import activateUser from "../../../assets/images/activate-user.png";
import blacklistUser from "../../../assets/images/blacklist-user.png";
import { useNavigate } from "react-router-dom";

function ActionsMenu({ anchorEl, onClose }: MenuProps) {
  const navigate = useNavigate();
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: "180px",
          boxShadow: "3px 5px 20px 0px #0000000A",
          border: "1px solid #545f7d24",
          alignContent: "center",
        },
      }}
    >
      <MenuItem>
        <Box component="img" src={view} mr={1} />
        <p
          className="menu-item"
          onClick={() => {
            navigate("/user-details");
          }}
        >
          View Details
        </p>
      </MenuItem>
      <MenuItem>
        <Box component="img" src={activateUser} mr={1} />
        <p className="menu-item">Blacklist User</p>
      </MenuItem>
      <MenuItem>
        <Box component="img" src={blacklistUser} mr={1} />
        <p className="menu-item">Activate User</p>
      </MenuItem>
    </Menu>
  );
}

interface MenuProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
}

export default ActionsMenu;
