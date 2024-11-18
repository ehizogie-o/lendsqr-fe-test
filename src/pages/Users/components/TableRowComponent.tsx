import { TableRow, TableCell, IconButton, Box } from "@mui/material";
import dots from "../../../assets/images/three-dots.png";

interface Record {
  id: number;
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: string;
}

const TableRowComponent = ({ record, onActionsMenuClick }: TableRowProps) => (
  <TableRow key={record.id}>
    <TableCell>
      <p className="table-body">{record.organization}</p>
    </TableCell>
    <TableCell>
      <p className="table-body">{record.username}</p>
    </TableCell>
    <TableCell>
      <p className="table-body">{record.email}</p>
    </TableCell>
    <TableCell>
      <p className="table-body">{record.phone}</p>
    </TableCell>
    <TableCell>
      <p className="table-body">{record.dateJoined}</p>
    </TableCell>
    <TableCell>
      <p className="table-body">{record.status}</p>
    </TableCell>
    <TableCell sx={{ pl: 0 }}>
      <IconButton onClick={onActionsMenuClick}>
        <Box component="img" src={dots} />
      </IconButton>
    </TableCell>
  </TableRow>
);

interface TableRowProps {
  record: Record;
  onActionsMenuClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default TableRowComponent;
