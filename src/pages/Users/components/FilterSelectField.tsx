import {
  Box,
  Select,
  MenuItem,
  SelectProps,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

interface FilterSelectFieldProps extends Omit<SelectProps, "onChange"> {
  value: string;
  onChange: (e: SelectChangeEvent<unknown>) => void; // Change to SelectChangeEvent
}

const FilterSelectField: React.FC<FilterSelectFieldProps> = ({
  value,
  onChange,
  ...props
}) => {
  return (
    <Box mb={2}>
      <label className="form-label" htmlFor="status-select">
        Status
      </label>
      <Select
        id="status-select"
        size="small"
        value={value}
        onChange={onChange}
        fullWidth
        displayEmpty
        sx={{
          mt: "5px",
          borderRadius: "8px", // Directly apply border-radius
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px", // Ensure radius for the outer container
          },
          "& .MuiSelect-select": {
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "16.42px",
            color: value === "" ? "#aaa" : "#545f7d", // Gray color for placeholder
            padding: "10px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "8px",
            borderColor: "#ced4da",
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              borderRadius: "8px",
            },
          },
        }}
        {...props} // Spread remaining props
      >
        {/* Placeholder */}
        <MenuItem value="" disabled>
          Select
        </MenuItem>
        <MenuItem key="active" value="Active">
          Active
        </MenuItem>
        <MenuItem key="inactive" value="Inactive">
          Inactive
        </MenuItem>
        <MenuItem key="pending" value="Pending">
          Pending
        </MenuItem>
        <MenuItem key="blacklisted" value="Blacklisted">
          Blacklisted
        </MenuItem>
      </Select>
    </Box>
  );
};

export default FilterSelectField;
