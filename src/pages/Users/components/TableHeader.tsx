import { TableHead, TableRow, TableCell, Box, IconButton } from "@mui/material";
import filter from "../../../assets/images/filter-results-button.png";

const TableHeader = ({ headers, onFilterMenuClick }: TableHeaderProps) => (
  <TableHead>
    <TableRow>
      {headers.map((header, i) => (
        <TableCell key={i} sx={{ whiteSpace: "nowrap" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <p className="table-heading">{header}</p>
            {header !== "" && (
              <IconButton sx={{ ml: 1 }} onClick={onFilterMenuClick}>
                <Box component="img" src={filter} alt="Filter icon" />
              </IconButton>
            )}
          </Box>
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);

interface TableHeaderProps {
  headers: Array<string>;
  onFilterMenuClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default TableHeader;
