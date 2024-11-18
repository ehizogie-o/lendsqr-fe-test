import { Menu, Box, Button } from "@mui/material";

import "../Users.scss";
import FilterTextField from "./FilterTextField";

function FilterMenu({ anchorEl, onClose }: FilterMenuProps) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
      className="menu-form"
      PaperProps={{
        sx: {
          width: "270px",
          boxShadow: "3px 5px 20px 0px #0000000a",
          border: "1px solid #545f7d24",
          overflowY: "scroll", // Allows vertical scrolling within sidebar
          "::-webkit-scrollbar": { display: "none" }, // Hides scrollbar in WebKit browsers
          scrollbarWidth: "none",
        },
      }}
    >
      <Box component="form" p={3}>
        <FilterTextField label="Organization" placeholder="Select" />
        <FilterTextField label="Username" placeholder="User" />
        <FilterTextField label="Email" placeholder="Email" />
        <FilterTextField label="Phone Number" placeholder="Phone Number" />
        <FilterTextField label="Date" placeholder="Date" />
        <FilterTextField label="Status" placeholder="Select" />
        <Box width="100%" display="flex" justifyContent="space-around" gap={2}>
          <Button
            variant="outlined"
            sx={{
              px: "30px",
              py: "10px",
              borderRadius: "8px",
              color: "#545F7D",
              borderColor: "#545F7D",
            }}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            sx={{
              px: "30px",
              py: "10px",
              borderRadius: "8px",
              bgcolor: "#39CDCC",
              boxShadow: "none",
            }}
          >
            Filter
          </Button>
        </Box>
      </Box>
    </Menu>
  );
}

interface FilterMenuProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
}

export default FilterMenu;
