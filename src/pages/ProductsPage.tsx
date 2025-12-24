import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { Page } from "../components/ui/Page";
import { productApi } from "../mocks/api/product.api";
import type { Product } from "../types";
export const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    productApi.getAll().then(setProducts);
  }, []);

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
      field: "category",
      headerName: "Category",
      flex: 1,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 100,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      width: 100,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => <span>{params.value}</span>,
    },
  ];

  return (
    <Page title="Products">
      <Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <Button variant="contained">Add Product</Button>
        </Box>

        <DataGrid
          rows={products}
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
