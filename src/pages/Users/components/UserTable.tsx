import { Table, TableBody, TableContainer } from "@mui/material";
import { useEffect, useState } from "react";

import FilterMenu from "./FilterMenu";
import "../Users.scss";
import ActionsMenu from "./ActionsMenu";
import TableHeader from "./TableHeader";
import TableRowComponent from "./TableRowComponent";
import Pagination from "./Pagination";
import { getAllRecords } from "..";

interface Record {
  id: number;
  organization: string;
  username: string;
  email: string;
  phone: string;
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

  const handleFilterMenu = (event: React.MouseEvent<HTMLElement>) => {
    setFilterMenuAnchorEl(event.currentTarget);
  };
  const handleActionsMenu = (event: React.MouseEvent<HTMLElement>) => {
    setActionsMenuAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAllRecords();
        setRecords(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
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
              onActionsMenuClick={handleActionsMenu}
            />
          ))}
        </TableBody>
      </Table>
      <Pagination
        count={records.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage} // Pass the updated handler
      />
      <FilterMenu
        anchorEl={filterMenuAnchorEl}
        onClose={() => setFilterMenuAnchorEl(null)}
      />
      <ActionsMenu
        anchorEl={actionsMenuAnchorEl}
        onClose={() => setActionsMenuAnchorEl(null)}
      />
    </TableContainer>
  );
}

export default UserTable;
