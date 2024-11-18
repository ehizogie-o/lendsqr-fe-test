import express from 'express';
import faker from '@faker-js/faker';

const app = express();
const port = 3000;

// Define the structure for the table data
interface TableData {
    id: string;
    organization: string;
    username: string;
    email: string;
    phoneNumber: string;
    status: string;
    dateJoined: string;
}

// Define the structure for the details page data
interface DetailsPage {
    personalInformation: {
        fullName: string;
        phoneNumber: string;
        emailAddress: string;
        bvn: string;
        gender: string;
        maritalStatus: string;
        children: string;
        typeOfResidence: string;
    };
    educationAndEmployment: {
        levelOfEducation: string;
        employmentStatus: string;
        sectorOfEmployment: string;
        durationOfEmployment: string;
        officeEmail: string;
        monthlyIncome: string;
        loanRepayment: string;
    };
    socials: {
        twitter: string;
        facebook: string;
        instagram: string;
    };
    guarantors: Array<{
        fullName: string;
        phoneNumber: string;
        emailAddress: string;
        relationship: string;
    }>;
    accountSummary: {
        userTier: number;
        accountBalance: string;
        accountNumber: string;
        bankName: string;
    };
}

// Helper function to randomly pick a value from an array
const randomize = <T>(arr: T[]): T => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

// Function to generate 500 users
const generateUsers = (num: number) => {
    const users: Array<{ tableData: TableData; detailsPage: DetailsPage }> = [];

    for (let i = 0; i < num; i++) {
        const userId = faker.string.uuid(); // Generate a unique user ID using faker.string.uuid()

        // Generate table data for the user
        const tableData: TableData = {
            id: userId,
            organization: faker.company.name(),
            username: `${faker.name.firstName()} ${faker.name.lastName()}`,
            email: faker.internet.email(),
            phoneNumber: faker.phone.number(),
            status: randomize(['Active', 'Inactive']),
            dateJoined: faker.date.past().toISOString(),
        };

        // Generate detailed page data for the user
        const detailsPage: DetailsPage = {
            personalInformation: {
                fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
                phoneNumber: faker.phone.number(),
                emailAddress: faker.internet.email(),
                bvn: faker.phone.number(),
                gender: randomize(['Male', 'Female']),
                maritalStatus: randomize(['Single', 'Married']),
                children: randomize(['None', 'One', 'Two']),
                typeOfResidence: randomize(['Parent’s Apartment', 'Own House']),
            },
            educationAndEmployment: {
                levelOfEducation: randomize(['B.Sc', 'M.Sc', 'PhD']),
                employmentStatus: randomize(['Employed', 'Self-employed', 'Unemployed']),
                sectorOfEmployment: randomize(['Tech', 'Finance', 'Healthcare']),
                durationOfEmployment: `${faker.number.int({ min: 1, max: 10 })} years`, // Use faker.number.int()
                officeEmail: faker.internet.email(),
                monthlyIncome: `${faker.finance.amount({ min: 100000, max: 500000, dec: 2 })}₦`, // Corrected usage
                loanRepayment: faker.finance.amount({ min: 20000, max: 100000, dec: 2, symbol: '₦' }), // Corrected usage
            },
            socials: {
                twitter: `@${faker.internet.userName()}`,
                facebook: faker.name.firstName(),
                instagram: `@${faker.internet.userName()}`,
            },
            guarantors: [
                {
                    fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
                    phoneNumber: faker.phone.number(),
                    emailAddress: faker.internet.email(),
                    relationship: randomize(['Sibling', 'Friend', 'Parent']),
                },
                {
                    fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
                    phoneNumber: faker.phone.number(),
                    emailAddress: faker.internet.email(),
                    relationship: randomize(['Sibling', 'Friend', 'Parent']),
                },
            ],
            accountSummary: {
                userTier: faker.number.int({ min: 1, max: 5 }), // Use faker.number.int()
                accountBalance: faker.finance.amount({ min: 10000, max: 500000, dec: 2, symbol: '₦' }), // Corrected usage
                accountNumber: faker.finance.accountNumber(), // Corrected method
                bankName: faker.company.name(),
            },
        };

        // Add the generated data to the users array
        users.push({ tableData, detailsPage });
    }

    return users;
};

// Generate 500 mock users
const mockUsers = generateUsers(500);

console.log(mockUsers); // You can log or use the generated users as needed

// API endpoint to serve the mock users
app.get('/api/users', (req, res) => {
    res.json(mockUsers);
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});