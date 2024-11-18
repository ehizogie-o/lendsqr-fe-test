import Grid from "@mui/material/Grid2";

const tabs = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
];

const UserTabs = ({
  currentTab,
  setCurrentTab,
}: {
  currentTab: number;
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
}) => (
  <Grid container spacing={3} sx={{ mt: "50px" }}>
    {tabs.map((tab, index) => (
      <Grid key={index} size={{ xs: 6, sm: 4, md: 2 }}>
        {currentTab !== index ? (
          <p className="tab-text" onClick={() => setCurrentTab(index)}>
            {tab}
          </p>
        ) : (
          <div>
            <p className="tab-text active">{tab}</p>
            <hr className="active-selector" />
          </div>
        )}
      </Grid>
    ))}
  </Grid>
);

export default UserTabs;
