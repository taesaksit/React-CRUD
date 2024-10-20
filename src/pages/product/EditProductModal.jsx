import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';

export default function EditProductModal({ open, handleClose, product, handleEditProduct }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Update form values when product prop changes
  useEffect(() => {

    if (product) {
      
      setValue('ProductID' , product.id);
      setValue('ProductName', product.ProductName || '');
      setValue('SupplierID', product.SupplierID || '');
      setValue('CategoryID', product.CategoryID || '');
      setValue('Unit', product.Unit || '');
      setValue('Price', product.Price || '');

      console.log('UseEffect from update' , product);
     
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
            <TextField
              {...register('CategoryID', { required: 'กรุณากรอกรหัสหมวดหมู่' })}
              label="รหัสหมวดหมู่"
              fullWidth
              variant='standard'
              margin="dense"
              error={!!errors.CategoryID}
              helperText={errors.CategoryID?.message}
            />
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
