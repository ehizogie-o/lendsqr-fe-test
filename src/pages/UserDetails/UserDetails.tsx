import { Box, Paper } from "@mui/material";
import NavBtn from "../../components/NavBtn";
import PageHeading from "../../components/PageHeading";
import UserActionBtn from "./components/UserActionBtn";
import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import UserProfileCard from "./components/UserProfileCard";
import UserTabs from "./components/UserTabs";

function UserDetails() {
  const [currentTab, setCurrentTab] = useState<number>(0);
  return (
    <Box>
      <NavBtn navText="Back to Users" />
      <Box
        sx={{
          mt: 3,
          mb: 5,
          display: { sm: "block", md: "flex", lg: "flex" },
          alignItems: "center",
        }}
      >
        <Box flexGrow={1} mb={{ xs: 2, md: 0 }}>
          <PageHeading heading="User Details" />
        </Box>
        <Box display="flex" gap="20px">
          <UserActionBtn btnText="Blacklist User" color="#E4033B" />
          <UserActionBtn btnText="Activate User" color="#39CDCC" />
        </Box>
      </Box>
      <Paper
        sx={{
          pt: "30px",
          px: "30px",
          border: "1px solid #213F7D0F",
          borderRadius: "4px",
          boxShadow: "3px 5px 20px 0px #0000000A",
        }}
      >
        <UserProfileCard />
        <UserTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </Paper>
      <Paper
        sx={{
          p: "30px",
          mt: 4,
          boxShadow: "3px 5px 20px 0px #0000000A",
          border: "1px solid #213F7D0F",
        }}
      >
        {currentTab === 0 ? <GeneralInfo /> : <Box></Box>}
      </Paper>
    </Box>
  );
}

export default UserDetails;
