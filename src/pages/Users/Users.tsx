//MUI Imports
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PageHeading from "../../components/PageHeading";
import StatCard from "./components/StatCard";
import users from "../../assets/images/users-card-icon.png";
import activeUsers from "../../assets/images/active-users-icon.png";
import usersWithLoans from "../../assets/images/users-with-loans-icon.png";
import usersWithSavings from "../../assets/images/users-with-savings-icon.png";
import UserTable from "./components/UserTable";

//Component Imports

function Users() {
  return (
    <Box>
      <PageHeading heading="Users" />

      <Grid container spacing={3} mt={5}>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
          <StatCard heading="USERS" amount={2453} icon={users} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
          <StatCard heading="ACTIVE USERS" amount={2453} icon={activeUsers} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
          <StatCard
            heading="USERS WITH LOANS"
            amount={12453}
            icon={usersWithLoans}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
          <StatCard
            heading="USERS WITH SAVINGS"
            amount={102453}
            icon={usersWithSavings}
          />
        </Grid>
      </Grid>

      <Box mt={3}>
        <UserTable />
      </Box>
    </Box>
  );
}

export default Users;
