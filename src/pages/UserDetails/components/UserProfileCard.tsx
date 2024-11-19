import { Box, useMediaQuery, useTheme } from "@mui/material";
import avatar from "../../../assets/images/user-avatar.png";
import star from "../../../assets/images/filled-star.png";
import starOutline from "../../../assets/images/unfilled-star.png";

const UserProfileCard = ({ userDetails }: UserProfileProps) => {
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
          <h5 className="profile-name">
            {userDetails[0].personalInfo.fullName}
          </h5>
          <p className="profile-subtitle">LSQFf587g90</p>
        </Box>
      </Box>
      <hr
        className={isSmallScreen ? "card-divider" : "card-divider-vertical"}
      />
      <Box>
        <p className="user-tier-txt">User's Tier</p>
        <Box display="flex">
          {userDetails[0].accountSummary.userTier > 0 ? (
            <Box component="img" src={star} />
          ) : (
            <Box component="img" src={starOutline} />
          )}
          {userDetails[0].accountSummary.userTier > 1 ? (
            <Box component="img" src={star} ml="4px" />
          ) : (
            <Box component="img" src={starOutline} ml="4px" />
          )}
          {userDetails[0].accountSummary.userTier > 2 ? (
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
        <h5 className="profile-name">
          {userDetails[0].accountSummary.accountBalance}
        </h5>
        <p className="account">
          {userDetails[0].accountSummary.accountNumber}/
          {userDetails[0].accountSummary.bankName}
        </p>
      </Box>
    </Box>
  );
};

interface Guarantor {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  relationship: string;
}

interface EducationAndEmployment {
  levelOfEducation: string;
  employmentStatus: string;
  sectorOfEmployment: string;
  durationOfEmployment: string;
  officeEmail: string;
  monthlyIncome: string;
  loanRepayment: string;
}

interface Socials {
  twitter: string;
  facebook: string;
  instagram: string;
}

interface AccountSummary {
  userTier: number;
  accountBalance: string;
  accountNumber: string;
  bankName: string;
}

interface PersonalInfo {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  bvn: string;
  gender: string;
  maritalStatus: string;
  children: string;
  typeOfResidence: string;
}

interface UserProfile {
  id: number;
  organization: string;
  username: string;
  status: string;
  dateJoined: string;
  personalInfo: PersonalInfo;
  educationAndEmployment: EducationAndEmployment;
  socials: Socials;
  guarantors: Guarantor[];
  accountSummary: AccountSummary;
}

interface UserProfileProps {
  userDetails: UserProfile[]; // Array of user profiles
}

export default UserProfileCard;
