import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { Paper, Button, IconButton } from '@mui/material';
import { Trash2, Pencil } from 'lucide-react';
import AddProductModal from './AddProductModal';
import EditProductModal from './EditProductModal';

export default function Product() {
  const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5500/api/products');
      setProducts(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    return () => fetchProducts();
  }, []);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleDelete = async (productId) => {
    try {
      let confirmDelete = confirm('ยืนยันการลบ')
      if (confirmDelete) {
        await axios.delete(`http://localhost:5500/api/products/${productId}`);
        fetchProducts(); // Refresh the product list after deletion
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditOpen = (product) => {
    setSelectedProduct(product);
    setOpenEditModal(true);
  };

  const handleEditClose = () => {
    setOpenEditModal(false);
    setSelectedProduct(null);
  };

  const columns = [
    { field: 'ProductID', headerName: 'Product ID', width: 100 },
    { field: 'ProductName', headerName: 'Product Name', width: 280 },
    { field: 'SupplierID', headerName: 'Supplier ID', width: 120 },
    { field: 'CategoryID', headerName: 'Category ID', width: 120 },
    { field: 'Unit', headerName: 'Unit', width: 250 },
    { field: 'Price', headerName: 'Price', width: 100 },
    {
      field: 'Manage',
      headerName: 'Manage',
      width: 300,
      renderCell: (params) => (
        <div className="space-x-2">
          <IconButton
            onClick={() => handleEditOpen(params.row)}
            className="text-blue-500 hover:text-blue-700"
            size="small"
            color='primary'
          >
            <Pencil size={20} />
          </IconButton>
          <IconButton
            onClick={() => handleDelete(params.row.ProductID)}
            className="text-red-500 hover:text-red-700"
            size="small"
            color='error'
          >
            <Trash2 size={20} />
          </IconButton>
        </div>
      ),
    },
  ];

  const rows = products.map((product) => ({
    id: product.ProductID,
    ProductID: product.ProductID,
    ProductName: product.ProductName,
    SupplierID: product.SupplierID,
    CategoryID: product.CategoryID,
    Unit: product.Unit,
    Price: product.Price,
  }));

  return (
    <div>
      <h1>Product List</h1>
      <Button
        variant="contained"
        sx={{ marginBottom: 1 }}
        color="success"
        onClick={handleClickOpen}
      >
        Add Product +
      </Button>

      <AddProductModal
        open={openModal}
        handleClose={handleClose}
        fetchProducts={fetchProducts}
      />
      <EditProductModal
        open={openEditModal}
        handleClose={handleEditClose}
        product={selectedProduct}
        fetchProducts={fetchProducts}
      />

      <Paper style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10, page: 0 },
            },
          }}
          pageSizeOptions={[5, 10, 25]}
        />
      </Paper>
    </div>
  );
}