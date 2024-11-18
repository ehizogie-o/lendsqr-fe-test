import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

function UserInfo({ title, data, gridSize }: UserInfoProps) {
  return (
    <Box>
      <h6 className="user-info-title">{title}</h6>
      <Grid container spacing={4} gap={3}>
        {Object.entries(data).map(([key, value]) => {
          return (
            <Grid size={{ xs: 12, sm: 4, lg: gridSize ? gridSize : 2.4 }}>
              <Box>
                <p className="user-info-key">
                  {key.replace(/([A-Z])/g, " $1").toUpperCase()}
                </p>
                <p className="user-info-value">{value}</p>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

interface UserInfoProps {
  title: string;
  data: object;
  gridSize?: number;
}

export default UserInfo;
