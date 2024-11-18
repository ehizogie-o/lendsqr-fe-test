import { Box, IconButton, Avatar } from "@mui/material";
import avatar from "../../assets/images/avatar.png";

import dropdown from "../../assets/images/dropdown.png";

function UserProfile() {
  return (
    <Box display="flex" alignItems="center">
      <IconButton sx={{ px: 0 }}>
        <Avatar src={avatar} alt="avatar" />
      </IconButton>
      <p className="profile-name">Adedeji</p>
      <Box component="img" src={dropdown} />
    </Box>
  );
}

export default UserProfile;
