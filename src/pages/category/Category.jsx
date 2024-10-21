import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper, Button, IconButton } from '@mui/material';
import { Trash2, Pencil } from 'lucide-react';
import { fetchCategories } from '../../services/categoryService';


export default function Category() {

  const [categories, setCategories] = useState([]);
  const fetchAllCategories = async () => {
    try {

      const response = await fetchCategories()
      setCategories(response);
      

    } catch (err) {
      console.log('Error fetching categories', err);
    }

  };

  useEffect(() => {
    fetchAllCategories()
  }, []);

  const columns = [

    { field: 'CategoryID', headerName: 'CategoryID', width: 350},
    { field: 'CategoryName', headerName: 'CategoryName', width: 350 },
    { field: 'Description', headerName: 'Description', width: 300 },

  ]

  const rows = categories.map((category) => ({
    id: category.CategoryID, // Ensure each row has a unique 'id' field

    CategoryID: category.CategoryID,
    CategoryName: category.CategoryName,
    Description: category.Description,

  }));

  return (
    <div>
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
