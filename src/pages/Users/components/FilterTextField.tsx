import { Box, TextField } from "@mui/material";

function FilterTextField({ label, placeholder }: TextFieldProps) {
  return (
    <Box mb={2}>
      <label className="form-label">{label}</label>
      <TextField
        size="small"
        fullWidth
        placeholder={placeholder}
        sx={{
          mt: "5px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
          },
          "& input::placeholder": {
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "16.42px",
            color: "#545f7d",
          },
        }}
      />
    </Box>
  );
}

interface TextFieldProps {
  label: string;
  placeholder: string;
}

export default FilterTextField;
