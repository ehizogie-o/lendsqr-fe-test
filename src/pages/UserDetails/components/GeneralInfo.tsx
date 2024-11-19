import { Box } from "@mui/material";
import UserInfo from "./UserInformation";

function GeneralInfo({ userDetails }: UserInfoProps) {
  const user = userDetails?.[0] || {}; // Default to empty object if userDetails[0] is undefined

  return (
    <Box>
      <UserInfo title="Personal Information" data={user.personalInfo || {}} />
      <hr className="card-divider" />
      <UserInfo
        title="Education and Employment"
        data={user.educationAndEmployment || {}}
        gridSize={3}
      />
      <hr className="card-divider" />
      <UserInfo title="Socials" data={user.socials || {}} />
      <hr className="card-divider" />
      {/* Map over the guarantors array and pass each one to UserInfo */}
      {user.guarantors && user.guarantors.length > 0 && (
        <div>
          <h3>Guarantors</h3>
          {user.guarantors.map((guarantor, index) => (
            <UserInfo
              key={index}
              title={`Guarantor ${index + 1}`}
              data={guarantor}
            />
          ))}
        </div>
      )}
    </Box>
  );
}

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

interface UserInfoProps {
  userDetails: UserProfile[]; // Array of user profiles
}
export default GeneralInfo;
