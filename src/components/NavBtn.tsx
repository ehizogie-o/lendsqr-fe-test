import { Box } from "@mui/material";
import leftArrow from "../assets/images/left-arrow.png";
import "../pages/UserDetails/UserDetails.scss";
import { useNavigate } from "react-router-dom";

function NavBtn({ navText }: NavBtnProps) {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => {
        navigate("/");
      }}
      sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
    >
      <Box component="img" src={leftArrow} />
      <p className="nav-btn-text">{navText}</p>
    </Box>
  );
}

interface NavBtnProps {
  navText: string;
}

export default NavBtn;
