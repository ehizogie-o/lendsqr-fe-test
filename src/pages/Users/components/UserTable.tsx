import {
  Table,
  TableBody,
  TableContainer,
  TablePagination,
} from "@mui/material";
import { useEffect, useState } from "react";

import FilterMenu from "./FilterMenu";
import "../Users.scss";
import ActionsMenu from "./ActionsMenu";
import TableHeader from "./TableHeader";
import TableRowComponent from "./TableRowComponent";
import { fetchUsers } from "..";

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

  const handleFilterMenu = (event: React.MouseEvent<HTMLElement>) => {
    setFilterMenuAnchorEl(event.currentTarget);
  };

  const handleActionsMenu = (
    event: React.MouseEvent<HTMLElement>,
    id: number
  ) => {
    setActionsMenuAnchorEl(event.currentTarget);
    setRecordId(id); // Set the selected recordId
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchUsers();
        console.log(response);
        setRecords(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    console.log(event);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setRowsPerPage(Number(event.target.value));
    setPage(0);
  };

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
              } // Pass record.id to handleActionsMenu
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
