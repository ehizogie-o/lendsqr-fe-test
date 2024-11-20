import { Box } from "@mui/material";
import UserInfo from "./UserInformation";
import { UserProfile } from "../../../types/user.types";

interface Props {
  userDetails: UserProfile; // Array of user profiles
}
function GeneralInfo({ userDetails }: Props) {
  const user = userDetails; // Default to empty object if userDetails[0] is undefined

  return (
    <Box>
      <UserInfo title="Personal Information" data={user.personalInfo || {}} />
      <hr className="card-divider" />
      <UserInfo
        title="Education and Employment"
        data={user.educationAndEmployment || {}}
      />
      <hr className="card-divider" />
      <UserInfo title="Socials" data={user.socials || {}} />
      <hr className="card-divider" />
      <UserInfo title="Guarantor" data={user.guarantor || {}} />
    </Box>
  );
}

export default GeneralInfo;
