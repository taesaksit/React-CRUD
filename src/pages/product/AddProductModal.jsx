import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function AddProductModal({ open, handleClose, fetchProducts }) {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        try {
            console.log('Form Data:', data);
            const response = await axios.post('http://localhost:5500/api/products', data);

            if (response.status === 200 && response.data[0].affectedRows === 1) {
                alert('Product inserted successfully!');
                reset();
                fetchProducts();
                handleClose();
            } else {
                alert('Product insertion failed. Please try again.');
            }
        } catch (err) {
            console.log("Error from insert product: ", err);
        }
    };

    const onClose = () => {
        reset();
        handleClose();
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="add-product-dialog-title"
            keepMounted={false}
        >
            <DialogTitle id="add-product-dialog-title">
                Add New Product
            </DialogTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Product Name"
                        fullWidth
                        variant="standard"
                        id="productName"
                        {...register('ProductName', {
                            required: 'productName is required'
                        })}
                        error={!!errors.ProductName}
                        helperText={errors.ProductName ? errors.ProductName.message : ''}
                        aria-describedby="productName-helper-text"
                    />

                    <TextField
                        margin="dense"
                        id="SupplierID"
                        label="Supplier ID"
                        fullWidth
                        variant="standard"
                        type="number"
                        {...register('SupplierID', {
                            required: 'productSuplier is required'
                        })}
                        error={!!errors.SupplierID}
                        helperText={errors.SupplierID ? errors.SupplierID.message : ''}
                        aria-describedby="supplierID-helper-text"
                    />

                    <TextField
                        margin="dense"
                        id="CategoryID"
                        label="Category ID"
                        fullWidth
                        variant="standard"
                        type="number"
                        {...register('CategoryID', {
                            required: 'CategoryID is required',
                           
                        })}
                        error={!!errors.CategoryID}
                        helperText={errors.CategoryID ? errors.CategoryID.message : ''}
                        aria-describedby="categoryID-helper-text"
                    />

                    <TextField
                        margin="dense"
                        id="Unit"
                        label="Unit"
                        fullWidth
                        variant="standard"
                        type="text"
                        {...register('Unit', {
                            required: 'productUnit is required'
                        })}
                        error={!!errors.Unit}
                        helperText={errors.Unit ? errors.Unit.message : ''}
                        aria-describedby="unit-helper-text"
                    />

                    <TextField
                        margin="dense"
                        id="Price"
                        label="Price"
                        fullWidth
                        variant="standard"
                        type="number"
                        {...register('Price', {
                            required: 'productPrice is required'
                        })}
                        error={!!errors.Price}
                        helperText={errors.Price ? errors.Price.message : ''}
                        aria-describedby="price-helper-text"
                    />
                </DialogContent>

                <DialogActions>
                    <Button
                        onClick={onClose}
                        type="button"
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Add Product
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}