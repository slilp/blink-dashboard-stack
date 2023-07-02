import {
  Box,
  TableContainer,
  Table as MuiTable,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableSortLabel,
  Typography,
  TablePagination,
  CircularProgress,
  Paper,
} from "@mui/material";
import React from "react";

export type ColumnTable<T> = {
  key: string;
  title: string;
  dataIndex: keyof T | null;
  render?: (value: T, index: number) => React.ReactNode;
};

type TableProps<T> = {
  columns: ColumnTable<T>[];
  dataSource: T[];
  page: number;
  totalRecord: number;
  rowsPerPage: number;
  rowsPerPageOptions?: number[];
  onChangePage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
  onChangeRowPerPage?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickRow?: (rowData: T) => void;
  isHidePagination?: boolean;
  isLoading?: boolean;
  notFoundText?: string;
  orderBy?: string;
  order?: "asc" | "desc";
  onSort?: (id: string | number) => void;
};

const Table = <T extends object>({
  columns,
  dataSource,
  page = 10,
  totalRecord,
  rowsPerPage = 10,
  rowsPerPageOptions = [10, 25, 50],
  onChangePage,
  onChangeRowPerPage,
  onClickRow,
  isHidePagination,
  isLoading = false,
  notFoundText = "Not found data",
  orderBy,
  onSort,
  order,
}: TableProps<T>) => {
  const isNotFound = dataSource.length === 0;
  return (
    <Box>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <MuiTable stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.key}>
                    {onSort && orderBy === column.key ? (
                      <TableSortLabel
                        hideSortIcon
                        active={Boolean(orderBy === column.key)}
                        direction={
                          orderBy === column.key ? order || "desc" : "asc"
                        }
                        onClick={() => onSort(column.key)}
                      >
                        <Typography variant="subtitle2">
                          {column.title}
                        </Typography>
                      </TableSortLabel>
                    ) : (
                      column.title
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            {!isNotFound && (
              <TableBody>
                {dataSource.map((item, index) => (
                  <TableRow
                    key={`row-table-${index}`}
                    hover
                    onClick={() => {
                      onClickRow && onClickRow(item);
                    }}
                    sx={{ cursor: onClickRow ? "pointer" : "auto" }}
                  >
                    {columns.map((column, index) => {
                      if (column?.render) {
                        return (
                          <TableCell
                            key={`cell-table-${index}`}
                            sx={{ width: `${100 / columns.length}%` }}
                          >
                            {column.render(item, index)}
                          </TableCell>
                        );
                      } else {
                        return (
                          <TableCell
                            key={`cell-table-${index}`}
                            sx={{ width: `${100 / columns.length}%` }}
                          >
                            {column.dataIndex !== null &&
                              (item[column.dataIndex] as string)}
                          </TableCell>
                        );
                      }
                    })}
                  </TableRow>
                ))}
              </TableBody>
            )}
          </MuiTable>
        </TableContainer>
      </Paper>

      {!isNotFound && !isHidePagination && (
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={totalRecord}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onChangePage}
          onRowsPerPageChange={onChangeRowPerPage}
        />
      )}
      {isLoading && (
        <Box textAlign="center" my={4}>
          <CircularProgress />
        </Box>
      )}
      {isNotFound && !isLoading && (
        <Box textAlign="center" my={4}>
          <Typography variant="body2" color="grey.600">
            {notFoundText}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Table;
