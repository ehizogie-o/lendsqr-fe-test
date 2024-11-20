export interface UserProfile {
    id: number;
    organization: string;
    username: string;
    status: string;
    dateJoined: string;
    personalInfo: PersonalInfo;
    educationAndEmployment: EducationAndEmployment;
    socials: Socials;
    guarantor: Guarantor;
    accountSummary: AccountSummary;
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