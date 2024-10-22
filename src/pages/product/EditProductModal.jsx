import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';

export default function EditProductModal({ open, handleClose, product, handleEditProduct, categories }) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  // Update form values when product prop changes
  useEffect(() => {
    if (product) {
      setValue('ProductID', product.id);
      setValue('ProductName', product.ProductName || '');
      setValue('SupplierID', product.SupplierID || '');
      setValue('CategoryID', product.CategoryID || '');
      setValue('Unit', product.Unit || '');
      setValue('Price', product.Price || '');

      console.log('UseEffect from update', product);
    }
  }, [product, setValue]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className="text-lg font-semibold">แก้ไขข้อมูลสินค้า</DialogTitle>
      <form onSubmit={handleSubmit(handleEditProduct)}>
        <DialogContent>
          <div className="space-y-4">
            <TextField
              {...register('ProductName', { required: 'กรุณากรอกชื่อสินค้า' })}
              label="ชื่อสินค้า"
              fullWidth
              variant='standard'
              margin="dense"
              error={!!errors.ProductName}
              helperText={errors.ProductName?.message}
            />
            <TextField
              {...register('SupplierID', { required: 'กรุณากรอกรหัสผู้ผลิต' })}
              label="รหัสผู้ผลิต"
              fullWidth
              variant='standard'
              margin="dense"
              error={!!errors.SupplierID}
              helperText={errors.SupplierID?.message}
            />

            <FormControl
              fullWidth
              variant="standard"
              margin="dense"
              error={!!errors.CategoryID}
            >
              <InputLabel id="category-select-label">Category</InputLabel>
              <Select
                labelId="category-select-label"
                id="CategoryID"
                {...register('CategoryID', {
                  required: 'CategoryID is required'
                })}
                label="Category"
                // defaultValue={product ? product.CategoryID : ''}
                value={watch('CategoryID') || (product ? product.CategoryID : '')} // Use watch to get the current value
                onChange={(e) => setValue('CategoryID', e.target.value)} // Set value on change
              >
                {categories?.map((category) => (
                  <MenuItem
                    key={category.CategoryID}
                    value={category.CategoryID}>
                    {category.CategoryName}
                  </MenuItem>
                ))}
              </Select>
              {errors.CategoryID && (
                <FormHelperText>{errors.CategoryID.message}</FormHelperText>
              )}
            </FormControl>

            <TextField
              {...register('Unit', { required: 'กรุณากรอกหน่วย' })}
              label="หน่วย"
              fullWidth
              variant='standard'
              margin="dense"
              error={!!errors.Unit}
              helperText={errors.Unit?.message}
            />
            <TextField
              {...register('Price', { required: 'กรุณากรอกราคา' })}
              label="ราคา"
              fullWidth
              variant='standard'
              margin="dense"
              error={!!errors.Price}
              helperText={errors.Price?.message}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className="bg-gray-500 text-white">
            ยกเลิก
          </Button>
          <Button type="submit" className="bg-blue-500 text-white">
            บันทึก
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
