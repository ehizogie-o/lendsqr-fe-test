import axios from "axios";

export interface UserFilters {
  organization?: string;
  username?: string;
  email?: string;
  phone?: string;
  status?: string;
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

export interface User {
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



export async function fetchUsers(filters: UserFilters): Promise<User[]> {
  try {
    const response = await axios.get<User[]>(
      `http://localhost:3000/api/users`,
      {
        params: filters,
      }
    );
    const data = response.data; // Extract data from response
    console.log(data); // Log data for debugging
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Re-throw the error for further handling if needed
  }
}

