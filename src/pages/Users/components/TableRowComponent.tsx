import { TableRow, TableCell, IconButton, Box } from "@mui/material";
import dots from "../../../assets/images/three-dots.png";

interface PersonalInfo {
  emailAddress: string;
  phoneNumber: string;
}

interface Record {
  id: number;
  organization: string;
  username: string;
  dateJoined: string;
  status: string;
  personalInfo: PersonalInfo;
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
      <p className="table-body">{record.personalInfo.emailAddress}</p>
    </TableCell>
    <TableCell>
      <p className="table-body">{record.personalInfo.phoneNumber}</p>
    </TableCell>
    <TableCell>
      <p className="table-body">{record.dateJoined}</p>
    </TableCell>
    <TableCell>
      <p className="table-body">{record.status}</p>
    </TableCell>
    <TableCell sx={{ pl: 0 }}>
      <IconButton onClick={(event) => onActionsMenuClick(event, record.id)}>
        <Box component="img" src={dots} />
      </IconButton>
    </TableCell>
  </TableRow>
);

interface TableRowProps {
  record: Record;
  onActionsMenuClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
}

export default TableRowComponent;
