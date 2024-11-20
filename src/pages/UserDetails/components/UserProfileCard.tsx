import { Box, useMediaQuery, useTheme } from "@mui/material";
import avatar from "../../../assets/images/user-avatar.png";
import star from "../../../assets/images/filled-star.png";
import starOutline from "../../../assets/images/unfilled-star.png";
import { UserProfile } from "../../../types/user.types";

type Props = {
  userDetails: UserProfile;
};

const UserProfileCard = ({ userDetails }: Props) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Check if userDetails is not null and has at least one user
  if (!userDetails) {
    return <p>No user details available.</p>; // Or return some other fallback UI
  }

  const user = userDetails; // Safely access the first user from the array

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
          <h5 className="profile-name">{user.personalInfo.fullName}</h5>
          <p className="profile-subtitle">LSQFf587g90</p>
        </Box>
      </Box>
      <hr
        className={isSmallScreen ? "card-divider" : "card-divider-vertical"}
      />
      <Box>
        <p className="user-tier-txt">User's Tier</p>
        <Box display="flex">
          {user.accountSummary.userTier > 0 ? (
            <Box component="img" src={star} />
          ) : (
            <Box component="img" src={starOutline} />
          )}
          {user.accountSummary.userTier > 1 ? (
            <Box component="img" src={star} ml="4px" />
          ) : (
            <Box component="img" src={starOutline} ml="4px" />
          )}
          {user.accountSummary.userTier > 2 ? (
            <Box component="img" src={star} ml="4px" />
          ) : (
            <Box component="img" src={starOutline} ml="4px" />
          )}
        </Box>
      </Box>
      <hr
        className={isSmallScreen ? "card-divider" : "card-divider-vertical"}
      />
      <Box>
        <h5 className="profile-name">{user.accountSummary.accountBalance}</h5>
        <p className="account">
          {user.accountSummary.accountNumber}/{user.accountSummary.bankName}
        </p>
      </Box>
    </Box>
  );
};

export default UserProfileCard;
