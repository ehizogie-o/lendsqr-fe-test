import { Button } from "@mui/material";

function UserActionBtn({ btnText, color }: BtnProps) {
  return (
    <Button
      variant="outlined"
      sx={{
        py: "12px",
        px: 2,
        borderRadius: "8px",
        borderColor: color,
        color: color,
      }}
    >
      <p className="btn-text">{btnText}</p>
    </Button>
  );
}

interface BtnProps {
  btnText: string;
  color: string;
}
export default UserActionBtn;
