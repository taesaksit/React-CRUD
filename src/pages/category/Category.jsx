import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper, Button, IconButton } from '@mui/material';
import { Trash2, Pencil } from 'lucide-react';
import { fetchCategories, addCategory, deleteCategory, updateCategory } from '../../services/categoryService';

import AddCategoryModal from './AddCategoryModal';
import EditCategoryModal from './EditCategoryModal';


export default function Category() {

  const [categories, setCategories] = useState([]);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);


  useEffect(() => {
    fetchAllCategories()
  }, []);

  const fetchAllCategories = async () => {
    try {
      const response = await fetchCategories()
      setCategories(response);

    } catch (err) {
      console.log('Error fetching categories', err);
    }

  };

  const handleSubmit = async (category) => {

    const response = await addCategory(category)
    console.log('Response:', response);

    if (response.status === 200) {
      alert('Added category successfully')
      handleCloseAddModal();
      await fetchAllCategories();
    }

  };

  const handleDelete = async (id) => {

    try {
      let confirmDelete = confirm('ยืนยันการลบ');
      if (confirmDelete) {
        await deleteCategory(id);
        await fetchAllCategories();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickAddOpen = () => {
    setOpenAddModal(true);
  };

  const handleCloseAddModal = () => {
    setOpenAddModal(false);
  };

  const handleEditModal = (categoryData) => {
    setSelectedCategory(categoryData);
    setOpenEditModal(true)
  }

  const handleCloseEditModal = () => {
    setOpenEditModal(false)
  }

  const handleEdit = async (categoryData) => {
    console.log(categoryData);
    let response = await updateCategory(categoryData.CategoryID, categoryData);
    if (response.status === 200) {
      alert('แก้ไขสำเร็จ')
      handleCloseEditModal();
      await fetchAllCategories();
    }
  }

  const columns = [

    { field: 'CategoryID', headerName: 'CategoryID', flex: 1 },
    { field: 'CategoryName', headerName: 'CategoryName', flex: 2 },
    { field: 'Description', headerName: 'Description', flex: 3 },
    {
      field: 'Mnage',
      headerName: 'Manage',
      width: 200,
      renderCell: (params) => (
        <div className="space-x-2">
          <IconButton
            onClick={() => handleEditModal(params.row)}
            color='primary'
            size='large'
          >

            <Pencil size={20} />
          </IconButton>

          <IconButton
            onClick={() => handleDelete(params.row.id)}
            color='error'
            size='large'
          >
            <Trash2 size={20} />
          </IconButton>

        </div>
      )
    }

  ]

  const rows = categories.map((category) => ({
    id: category.CategoryID ,
    CategoryID: category.CategoryID,
    CategoryName: category.CategoryName,
    Description: category.Description,
  }));


  return (
    <div>
      <h1>Categories List</h1>
      <Button
        variant="contained"
        sx={{ marginBottom: 1 }}
        color="success"
        onClick={handleClickAddOpen}

      >
        Add Category +
      </Button>


      <AddCategoryModal
        open={openAddModal}
        handleClose={handleCloseAddModal}
        onSubmit={handleSubmit}
      />

      <EditCategoryModal
        open={openEditModal}
        handleClose={handleCloseEditModal}
        category={selectedCategory}
        onUpdate={handleEdit}
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
  )

}
