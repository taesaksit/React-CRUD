
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper, Button, IconButton } from '@mui/material';
import { Trash2, Pencil } from 'lucide-react';

import { fetchProducts, deleteProduct, updateProduct, addProduct } from '../../services/productService';
import { fetchCategories } from '../../services/categoryService';
import { fetchSuppliers } from '../../services/supplierService';
import AddProductModal from './AddProductModal';
import EditProductModal from './EditProductModal';

export default function Product() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);


  const fetchAllProducts = async () => {
    try {
      const response = await fetchProducts(); // Await the service
      const responseCategories = await fetchCategories(); // Await the service
      const responseSuppliers = await fetchSuppliers(); // Await the service
      
      setProducts(response);
      setCategories(responseCategories);
      setSuppliers(responseSuppliers);

    } catch (err) {
      console.log('Error fetching products:', err);
    }
  };

  useEffect(() => {
    return () => fetchAllProducts(); // Fetch products when the component mounts

  }, []);


  const handleSubmit = async (data) => {
    try {
      console.log('Form Data:', data);
      const response = await addProduct(data)

      if (response.status === 200 && response.data[0].affectedRows === 1) {
        alert('Product inserted successfully!');
        await fetchProducts();
        handleClose();
      } else {
        alert('Product insertion failed. Please try again.');
      }
    } catch (err) {
      console.log("Error from insert product: ", err);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      let confirmDelete = confirm('ยืนยันการลบ');
      if (confirmDelete) {
        await deleteProduct(productId);
        fetchAllProducts();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditProduct = async (product) => {
    let response = await updateProduct(product.ProductID, product);
    if (response.status === 200) {
      alert('แก้ไขสำเร็จ')
      handleEditClose();
      await fetchAllProducts();
    }
  };

  const handleClickAddOpen = () => {
    setOpenAddModal(true);
  };

  const handleCloseAddModal = () => {
    setOpenAddModal(false);
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
    { field: 'ProductID', headerName: 'Product ID', flex: 3},
    { field: 'ProductName', headerName: 'Product Name', flex: 5 },
    // { field: 'SupplierID', headerName: 'Supplier ID', flex: 3 },
    { field: 'SupplierName', headerName: 'Supplier Name', flex: 3 },
    // { field: 'CategoryID', headerName: 'Category ID', flex: 4 },
    { field: 'CategoryName', headerName: 'Category Name', flex: 5},
    { field: 'Unit', headerName: 'Unit', flex: 3},
    { field: 'Price', headerName: 'Price', flex: 3 },
    {
      field: 'Manage',
      headerName: 'Manage',
      flex: 3,
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
            onClick={() => handleDeleteProduct(params.row.ProductID)}
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
    SupplierName: product.SupplierName,
    CategoryID: product.CategoryID,
    CategoryName: product.CategoryName,
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
        onClick={handleClickAddOpen}
      >
        Add Product +
      </Button>

      <AddProductModal
        open={openAddModal}
        handleClose={handleCloseAddModal}
        onInsert={handleSubmit} 
        categories={categories}  // pass categories to AddProductModal
      />
      <EditProductModal
        open={openEditModal}
        handleClose={handleEditClose}
        product={selectedProduct}
        handleEditProduct={handleEditProduct}
        categories={categories} 
        suppliers={suppliers} // pass
        
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
