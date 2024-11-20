// UserDetails.tsx
import { Box, Paper, CircularProgress } from "@mui/material";
import NavBtn from "../../components/NavBtn";
import PageHeading from "../../components/PageHeading";
import UserActionBtn from "./components/UserActionBtn";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GeneralInfo from "./components/GeneralInfo";
import UserProfileCard from "./components/UserProfileCard";
import UserTabs from "./components/UserTabs";
import { fetchUser } from "./index"; // Your API call to fetch user details
import { UserProfile } from "../../types/user.types";

// Assuming UserProfile type is defined somewhere

function UserDetails() {
  const { userId } = useParams<{ userId: string }>(); // Get the userId from URL params
  const [userDetails, setUserDetails] = useState<UserProfile | null>(null); // Specify UserProfile[] | null here
  const [loading, setLoading] = useState<boolean>(true);
  const [currentTab, setCurrentTab] = useState<number>(0);

  // Fetch user details when userId changes
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchUser(Number(userId)); // Fetch the user details
        console.log(response);
        setUserDetails(response); // Wrap the response in an array if it's a single user
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    if (userId) {
      setLoading(true); // Show loading spinner before fetching data
      fetchData();
    }
  }, [userId]);

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
        {/* Display user details or loading state */}
        {loading || !userDetails ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="200px"
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            <UserProfileCard userDetails={userDetails} />
            <UserTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
          </>
        )}
      </Paper>
      <Paper
        sx={{
          p: "30px",
          mt: 4,
          boxShadow: "3px 5px 20px 0px #0000000A",
          border: "1px solid #213F7D0F",
        }}
      >
        {currentTab === 0 && userDetails ? (
          <GeneralInfo userDetails={userDetails} />
        ) : (
          <Box></Box>
        )}
      </Paper>
    </Box>
  );
}

export default UserDetails;
