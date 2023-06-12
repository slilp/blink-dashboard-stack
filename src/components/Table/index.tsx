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
} from "@mui/material";
import React from "react";

type ColumnTable<T> = {
  key: string;
  title: string;
  dataIndex: keyof T;
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
      <TableContainer sx={{ positon: "relative", overflow: "unset" }}>
        <MuiTable size="medium" sx={{ minWidth: 900 }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.key}>
                  {onSort && orderBy === column.key ? (
                    <TableSortLabel
                      hideSortIcon
                      active={orderBy === column.key}
                      direction={
                        orderBy === column.key ? order || "desc" : "asc"
                      }
                      onClick={() => onSort(column.key)}
                    >
                      <Typography variant="subtitle2" color="grey.600">
                        {column.title}
                      </Typography>

                      {orderBy === column.key ? (
                        <Box>
                          {order === "asc"
                            ? "sorted ascending"
                            : "sorted descending"}
                        </Box>
                      ) : null}
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
                        <TableCell>{column.render(item, index)}</TableCell>
                      );
                    } else {
                      return (
                        <TableCell>
                          {item[column.dataIndex] as string}
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

      {!isNotFound && !isHidePagination && (
        <Box sx={{ position: "relative" }}>
          <TablePagination
            count={totalRecord}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={onChangePage}
            onRowsPerPageChange={onChangeRowPerPage}
          />
        </Box>
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
