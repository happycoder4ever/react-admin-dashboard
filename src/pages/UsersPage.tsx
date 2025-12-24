import { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { Page } from "../components/ui/Page";
import { userApi } from "../mocks/api/user.api";
import type { User } from "../types";

export const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    userApi.getAll().then(setUsers);
  });

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: "role",
      headerName: "Role",
      width: 100,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => (
        <span>{params.value === "active" ? "✅" : "🚫"}</span>
      ),
    },
  ];
  return (
    <Page title="Users">
      <Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <Button variant="contained">Add Product</Button>
        </Box>

        <DataGrid
          rows={users}
          sx={{
            "& .MuiDataGrid-cell": {
              pointerEvents: "auto", // keep clickable buttons
            },
            "& .MuiDataGrid-cell:focus": {
              outline: "none",
            },
            "& .MuiDataGrid-cell *": {
              caretColor: "transparent", // hides blinking cursor
            },
          }}
          columns={columns}
          autoHeight
          disableRowSelectionOnClick
          isCellEditable={() => false}
          initialState={{
            pagination: { paginationModel: { pageSize: 5, page: 0 } },
            columns: { columnVisibilityModel: {} },
          }}
          pageSizeOptions={[5, 10]}
        />
      </Box>
    </Page>
  );
};
