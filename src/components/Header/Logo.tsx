import { Box } from "@mui/material";

import logo from "../../assets/images/logo.svg";

function Logo() {
  return (
    <Box height="20px">
      <img src={logo} alt="logo" height="100%" />
    </Box>
  );
}

export default Logo;
