import { TextField } from "@mui/material";

function CustomTextField({ label, type }: TextFieldProps) {
  return (
    <TextField
      label={label}
      type={type}
      size="small"
      margin="normal"
      fullWidth
      sx={{
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "#545f7d",
          },
        },
      }}
      slotProps={{
        inputLabel: {
          sx: {
            color: "#545f7d",
            fontSize: "14px",
            fontWeight: 400,
            "&.Mui-focused": {
              color: "#545f7d",
            },
          },
        },
      }}
    />
  );
}

interface TextFieldProps {
  label: string;
  type: string;
}

export default CustomTextField;
