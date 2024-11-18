//MUI Imports
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

//Image & Asset Imports
import "../../assets/styles/global.scss";
import "./Login.scss";
import logo from "../../assets/images/logo.svg";
import loginImage from "../../assets/images/login-image.svg";
import CustomTextField from "./components/CustomTextField";

function Login({ onLogin }: LoginProps) {
  return (
    <Grid container spacing={0} sx={{ height: "100vh", width: "100vw" }}>
      <Grid
        size={6}
        sx={{
          position: "relative",
          display: { xs: "none", md: "block", lg: "block" },
        }}
      >
        <Box className="logo-container">
          <img src={logo} alt="logo" height="100%" />
        </Box>
        <Box className="content-container">
          <Box height="50vh" width="42vw">
            <img src={loginImage} alt="loginImage" height="100%" width="100%" />
          </Box>
        </Box>
      </Grid>

      <Grid size={{ sm: 12, md: 6 }} bgcolor="#fff">
        <Box className="content-container">
          <Box component="form" px={{ xs: 5, md: 0 }}>
            <h1 className="heading">Welcome!</h1>
            <p className="caption">Enter details to login.</p>

            <Box mt={5} mb={3}>
              <CustomTextField label="Email" type="email" />
              <CustomTextField label="Password" type="password" />
            </Box>

            <p className="forgot-password">FORGOT PASSWORD?</p>
            <Button
              variant="contained"
              fullWidth
              className="login-button"
              onClick={onLogin}
            >
              LOG IN
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

interface LoginProps {
  onLogin: () => void;
}

export default Login;
