//React Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import { Box } from "@mui/material";
import { useState } from "react";
import UserDetails from "./pages/UserDetails/UserDetails";
import Users from "./pages/Users/Users";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

//Component Imports

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(!isOpen);
  }
  function handleClose() {
    setIsOpen(false);
  }
  return (
    <Router>
      {!isLoggedIn ? (
        <Routes>
          <Route
            path="/"
            element={
              <Login
                onLogin={() => {
                  setIsLoggedIn(true);
                }}
              />
            }
          />
        </Routes>
      ) : (
        <Box display="flex">
          <Box
            sx={{
              width: { xs: 0, md: 0, lg: "19.6vw" },
            }}
          >
            <Sidebar
              open={isOpen}
              onLogout={() => {
                setIsLoggedIn(false);
              }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
            <Header onOpen={handleOpen} onClose={handleClose} />
            <Box
              py="17.7vh"
              sx={{
                px: "4vw",
                maxWidth: { xs: "100vw", md: "100vw", lg: "72vw" },
              }}
            >
              <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/user-details/:userId" element={<UserDetails />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      )}
    </Router>
  );
}

export default App;
