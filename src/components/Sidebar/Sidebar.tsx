import { Box, Drawer } from "@mui/material";

// Importing icons
import briefcaseIcon from "../../assets/images/briefcase 1.png";
import homeIcon from "../../assets/images/home 1.png";
import logout from "../../assets/images/sign-out.png";

// Importing navigation items data
import {
  customerMenuItems,
  businessMenuItems,
  settingsMenuItems,
} from "./data.ts";

// Importing custom components for sidebar items and containers
import SidebarItem from "./SidebarItem";
import SidebarContainer from "./SidebarContainer";
import { useState } from "react";

function Sidebar({ open, onLogout }: SidebarProps) {
  const [isActive, setIsActive] = useState("");

  return (
    <Drawer
      variant="permanent"
      sx={{
        "& .MuiDrawer-paper": {
          zIndex: 1,
          width: open ? 250 : "19.6vw",
          overflowY: "scroll", // Allows vertical scrolling within sidebar
          "::-webkit-scrollbar": { display: "none" }, // Hides scrollbar in WebKit browsers
          scrollbarWidth: "none",
          boxShadow: "0px 5px 20px 0px #0000000A",
          display: {
            xs: open ? "block" : "none",
            md: open ? "block" : "none",
            lg: "block",
          },
        },
      }}
    >
      <Box
        position="relative"
        top={100}
        component="nav"
        display="flex"
        flexDirection="column"
        height="100%"
      >
        <SidebarContainer>
          <SidebarItem
            icon={briefcaseIcon}
            primaryText="Switch Organization"
            expand
            disableOpacity={true}
          />
          <Box mt={3} />
          <SidebarItem
            icon={homeIcon}
            primaryText="Dashboard"
            active={isActive}
            onClick={() => {
              setIsActive("Dashboard");
            }}
          />
        </SidebarContainer>

        {/* Customers section */}
        <SidebarContainer subheader="CUSTOMERS">
          {customerMenuItems.map((item, i) => (
            <SidebarItem
              key={i}
              icon={item.icon}
              primaryText={item.name}
              active={isActive}
              onClick={() => {
                setIsActive(item.name);
              }}
            />
          ))}
        </SidebarContainer>

        {/* Businesses section */}
        <SidebarContainer subheader="BUSINESSES">
          {businessMenuItems.map((item, i) => (
            <SidebarItem
              key={i}
              icon={item.icon}
              primaryText={item.name}
              active={isActive}
              onClick={() => {
                setIsActive(item.name);
              }}
            />
          ))}
        </SidebarContainer>

        {/* Settings section */}
        <SidebarContainer subheader="SETTINGS">
          {settingsMenuItems.map((item, i) => (
            <SidebarItem
              key={i}
              icon={item.icon}
              primaryText={item.name}
              active={isActive}
              onClick={() => {
                setIsActive(item.name);
              }}
            />
          ))}
        </SidebarContainer>
        <Box mt="36px">
          <hr className="divider" />
          <SidebarItem
            onLogout={onLogout}
            icon={logout}
            primaryText="Logout"
            disableOpacity={true}
          />
          <p className="version">v1.2.0</p>
        </Box>
      </Box>
    </Drawer>
  );
}

interface SidebarProps {
  open: boolean;
  onLogout: () => void;
}

export default Sidebar;
