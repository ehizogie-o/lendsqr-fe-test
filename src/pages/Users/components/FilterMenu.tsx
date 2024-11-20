import { Menu, Box, Button, TextField } from "@mui/material";
import FilterSelectField from "./FilterSelectField";
import "../Users.scss";

interface FilterMenuProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  filters: {
    organization: string;
    username: string;
    email: string;
    phone: string;
    status: string;
  };
  onFilterChange: (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | React.ChangeEvent<{ value: unknown }>,
    field: keyof {
      organization: string;
      username: string;
      email: string;
      phone: string;
      status: string;
    }
  ) => void;
  onApplyFilter: () => void;
  onResetFilters: () => void;
}

function FilterMenu({
  anchorEl,
  onClose,
  filters,
  onFilterChange,
  onApplyFilter,
  onResetFilters,
}: FilterMenuProps) {
  const handleFilterChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | React.ChangeEvent<{ value: unknown }>,
    field: keyof typeof filters
  ) => {
    onFilterChange(e, field);
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
      aria-labelledby="filter-menu"
      className="menu-form"
      PaperProps={{
        sx: {
          width: "270px",
          boxShadow: "3px 5px 20px 0px #0000000a",
          border: "1px solid #545f7d24",
          "::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        },
      }}
    >
      <Box component="form" p={3}>
        {/* Organization */}
        <TextField
          label="Organization"
          value={filters.organization}
          onChange={(e) => handleFilterChange(e, "organization")}
          fullWidth
        />
        {/* Username */}
        <TextField
          label="Username"
          value={filters.username}
          onChange={(e) => handleFilterChange(e, "username")}
          fullWidth
        />
        {/* Email */}
        <TextField
          label="Email"
          value={filters.email}
          onChange={(e) => handleFilterChange(e, "email")}
          fullWidth
        />
        {/* Phone Number */}
        <TextField
          label="Phone Number"
          value={filters.phone}
          onChange={(e) => handleFilterChange(e, "phone")}
          fullWidth
        />
        {/* Status */}
        <FilterSelectField
          value={filters.status}
          onChange={(e) =>
            handleFilterChange(
              e as React.ChangeEvent<{ value: unknown }>,
              "status"
            )
          }
        />
        <Box width="100%" display="flex" justifyContent="space-around" gap={2}>
          {/* Reset button */}
          <Button
            variant="outlined"
            sx={{
              px: "30px",
              py: "10px",
              borderRadius: "8px",
              color: "#545F7D",
              borderColor: "#545F7D",
            }}
            onClick={() => {
              onResetFilters(); // Clear filters
              onClose(); // Close menu
            }}
          >
            Reset
          </Button>
          {/* Apply Filter */}
          <Button
            variant="contained"
            sx={{
              px: "30px",
              py: "10px",
              borderRadius: "8px",
              bgcolor: "#39CDCC",
              boxShadow: "none",
              "&:hover": {
                bgcolor: "#33bcbc",
              },
            }}
            onClick={() => {
              onApplyFilter(); // Apply filters
              onClose(); // Close menu
            }}
          >
            Filter
          </Button>
        </Box>
      </Box>
    </Menu>
  );
}

export default FilterMenu;
