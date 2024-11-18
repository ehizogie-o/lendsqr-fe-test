import { Box } from "@mui/material";
import UserInfo from "./UserInformation";

import {
  personalInformation,
  educationAndEmployment,
  socials,
  guarantor,
} from "../index";

function GeneralInfo() {
  return (
    <Box>
      <UserInfo title="Personal Information" data={personalInformation} />
      <hr className="card-divider" />
      <UserInfo
        title="Education and Employment"
        data={educationAndEmployment}
        gridSize={3}
      />
      <hr className="card-divider" />
      <UserInfo title="Socials" data={socials} />
      <hr className="card-divider" />
      <UserInfo title="Guarantor" data={guarantor} />
    </Box>
  );
}

export default GeneralInfo;
