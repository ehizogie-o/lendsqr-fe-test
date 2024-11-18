import { Box, useMediaQuery, useTheme } from "@mui/material";
import avatar from "../../../assets/images/user-avatar.png";
import star from "../../../assets/images/filled-star.png";
import starOutline from "../../../assets/images/unfilled-star.png";

const UserProfileCard = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: { xs: "block", sm: "flex" },
        alignItems: "center",
      }}
    >
      <Box display="flex" alignItems="center">
        <Box component="img" src={avatar} height={100} width={100} />
        <Box display="flex" flexDirection="column" ml="20px">
          <h5 className="profile-name">Grace Effiom</h5>
          <p className="profile-subtitle">LSQFf587g90</p>
        </Box>
      </Box>
      <hr
        className={isSmallScreen ? "card-divider" : "card-divider-vertical"}
      />
      <Box>
        <p className="user-tier-txt">User's Tier</p>
        <Box display="flex">
          <Box component="img" src={star} />
          <Box component="img" src={starOutline} ml="4px" />
          <Box component="img" src={starOutline} ml="4px" />
        </Box>
      </Box>
      <hr
        className={isSmallScreen ? "card-divider" : "card-divider-vertical"}
      />
      <Box>
        <h5 className="profile-name">₦200,000.00</h5>
        <p className="account">9912345678/Providus Bank</p>
      </Box>
    </Box>
  );
};

export default UserProfileCard;
