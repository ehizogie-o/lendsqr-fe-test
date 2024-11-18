//MUI Imports
import { AppBar, Toolbar, Box, IconButton } from "@mui/material";

import { useEffect } from "react";
import { useTheme, useMediaQuery } from "@mui/material";

//Asset & Image Imports
import "../../assets/styles/global.scss";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";

import notification from "../../assets/images/notification-icon.png";
import MenuIcon from "@mui/icons-material/Menu";

//Component Imports

function Header({ onOpen, onClose }: HeaderProps) {
  const theme = useTheme();
  const isLgAndAbove = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    if (isLgAndAbove) {
      onClose?.();
    }
  }, [isLgAndAbove, onClose]);
  return (
    <AppBar
      sx={{
        bgcolor: "#fff",
        height: "clamp(70px, 11.1vh, 100px)",
        boxShadow: "3px 0px 20px 0px #0000000A",
      }}
      component="nav"
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box display="flex" alignItems="center">
          <Box sx={{ display: { xs: "block", md: "block", lg: "none" } }}>
            <IconButton onClick={onOpen}>
              <MenuIcon sx={{ color: "#213F7D" }} />
            </IconButton>
          </Box>

          <Logo />
          <Box
            ml="168px"
            width={345}
            sx={{ display: { xs: "none", md: "none", lg: "block" } }}
          >
            <SearchBar />
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <p className="docs">Docs</p>
          <Box height="22.74px" px={5}>
            <img src={notification} alt="notification-icon" height="100%" />
          </Box>
          <UserProfile />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

interface HeaderProps {
  onOpen: () => void;
  onClose: () => void;
}

export default Header;
