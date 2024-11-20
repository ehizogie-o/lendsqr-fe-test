import { useState, useEffect } from "react";
import { fetchUsers } from ".."; // Ensure this import path is correct
import FilterMenu from "./FilterMenu";
import ActionsMenu from "./ActionsMenu";
import TableHeader from "./TableHeader";
import TableRowComponent from "./TableRowComponent";
import "../Users.scss";
import {
  Table,
  TableBody,
  TableContainer,
  TablePagination,
} from "@mui/material";

// Define the structure of the user data and personal info
interface PersonalInfo {
  emailAddress: string;
  phoneNumber: string;
}

interface Record {
  id: number;
  organization: string;
  username: string;
  personalInfo: PersonalInfo;
  dateJoined: string;
  status: string;
}

// Define the headers for the table
const tableHeaders = [
  "ORGANIZATION",
  "USERNAME",
  "EMAIL",
  "PHONE NUMBER",
  "DATE JOINED",
  "STATUS",
  "",
];

function UserTable() {
  const [records, setRecords] = useState<Record[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filterMenuAnchorEl, setFilterMenuAnchorEl] =
    useState<HTMLElement | null>(null);
  const [actionsMenuAnchorEl, setActionsMenuAnchorEl] =
    useState<HTMLElement | null>(null);
  const [recordId, setRecordId] = useState<number | null>(null); // Track selected record ID

  // State for filters
  const [filters, setFilters] = useState({
    organization: "",
    username: "",
    email: "",
    phone: "",
    status: "",
  });

  // Open filter menu
  const handleFilterMenu = (event: React.MouseEvent<HTMLElement>) => {
    setFilterMenuAnchorEl(event.currentTarget);
  };

  const handleResetFilters = () => {
    setFilters({
      organization: "",
      username: "",
      email: "",
      phone: "",
      status: "",
    });
  };

  // Open actions menu
  const handleActionsMenu = (
    event: React.MouseEvent<HTMLElement>,
    id: number
  ) => {
    setActionsMenuAnchorEl(event.currentTarget);
    setRecordId(id); // Set the selected recordId
  };

  // Handle change in the filter form (e.g., text fields)
  const handleFilterChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | React.ChangeEvent<{ value: unknown }>,
    field: keyof typeof filters
  ) => {
    // Type guard to check if the event is of type ChangeEvent<{ value: unknown }>
    if ((e as React.ChangeEvent<{ value: unknown }>).target) {
      const target = e as React.ChangeEvent<{ value: unknown }>;
      setFilters((prevFilters) => ({
        ...prevFilters,
        [field]: target.target.value,
      }));
    } else {
      // Handle when the event is of type ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      const target = e.target as HTMLInputElement | HTMLTextAreaElement;
      setFilters((prevFilters) => ({
        ...prevFilters,
        [field]: target.value,
      }));
    }
  };

  // Handle filter application (e.g., when the Filter button is clicked)
  const handleFilter = async () => {
    try {
      // Fetch the filtered data with the filters
      const filteredData = await fetchUsers(filters);
      setRecords(filteredData); // Update the table with the filtered records
    } catch (error) {
      console.error("Error fetching filtered users:", error);
    }
  };

  // Fetch data on component load or when filters change
  useEffect(() => {
    async function fetchData() {
      try {
        const formattedData = await fetchUsers(filters);
        setRecords(formattedData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [filters]); // Depend on filters

  // Handle page changes for pagination
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // Handle changes in rows per page
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setRowsPerPage(Number(event.target.value));
    setPage(0);
  };

  // Slice records for pagination
  const displayedRecords = records.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <TableContainer sx={{ bgcolor: "#ffff", width: "100%" }}>
      <Table>
        <TableHeader
          headers={tableHeaders}
          onFilterMenuClick={handleFilterMenu}
        />
        <TableBody>
          {displayedRecords.map((record) => (
            <TableRowComponent
              key={record.id}
              record={record}
              onActionsMenuClick={(event) =>
                handleActionsMenu(event, record.id)
              }
            />
          ))}
        </TableBody>
      </Table>

      {/* Normal MUI Table Pagination */}
      <TablePagination
        rowsPerPageOptions={[10, 20, 30]}
        component="div"
        count={records.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <FilterMenu
        anchorEl={filterMenuAnchorEl}
        onClose={() => setFilterMenuAnchorEl(null)}
        filters={filters} // Pass filters to FilterMenu
        onFilterChange={handleFilterChange} // Pass filter change handler
        onApplyFilter={handleFilter} // Pass filter handler
        onResetFilters={handleResetFilters} // Pass reset filters handler
      />
      <ActionsMenu
        anchorEl={actionsMenuAnchorEl}
        onClose={() => setActionsMenuAnchorEl(null)}
        recordId={recordId}
      />
    </TableContainer>
  );
}

export default UserTable;
