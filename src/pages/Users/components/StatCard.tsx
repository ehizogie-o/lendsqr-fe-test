import { Box } from "@mui/material";

import "../Users.scss";

function StatCard({ heading, amount, icon }: StatCardProps) {
  return (
    <Box className="stat-card">
      <Box sx={{ pt: "20px", pb: "30px", px: "30px" }}>
        <Box height="40px" width="40px" component="img" src={icon} alt="icon" />
        <h3 className="card-heading">{heading}</h3>
        <h1 className="card-amount">{amount.toLocaleString()}</h1>
      </Box>
    </Box>
  );
}

interface StatCardProps {
  heading: string;
  icon: string;
  amount: number;
}

export default StatCard;
