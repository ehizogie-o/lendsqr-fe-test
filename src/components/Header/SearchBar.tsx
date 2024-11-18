import { TextField, InputAdornment, IconButton } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import "../../assets/styles/search-bar.scss";

function SearchBar() {
  return (
    <TextField
      fullWidth
      size="small"
      placeholder="Search for Anything"
      className="search-bar"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton className="search-button">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchBar;
