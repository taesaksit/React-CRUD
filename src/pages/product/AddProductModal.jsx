import React from 'react';
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

export default function AddProductModal({ open, handleClose, onInsert, categories }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            CategoryID: '',  // กำหนดค่าเริ่มต้นเป็นค่าว่าง
            ProductName: '',
            SupplierID: '',
            Unit: '',
            Price: ''
        }
    });

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="add-product-dialog-title"
            keepMounted={false}
        >
            <DialogTitle id="add-product-dialog-title">
                Add New Product
            </DialogTitle>

            <form onSubmit={handleSubmit(onInsert)}>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Product Name"
                        fullWidth
                        variant="standard"
                        id="productName"
                        {...register('ProductName', {
                            required: 'Product name is required',
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
                            required: 'Supplier ID is required',
                        })}
                        error={!!errors.SupplierID}
                        helperText={errors.SupplierID ? errors.SupplierID.message : ''}
                        aria-describedby="supplierID-helper-text"
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
                            defaultValue=""
                        >
                            {categories?.map((category) => (
                                <MenuItem key={category.CategoryID} value={category.CategoryID}>
                                    {category.CategoryName}
                                </MenuItem>
                            ))}
                        </Select>
                        {errors.CategoryID && (
                            <FormHelperText>{errors.CategoryID.message}</FormHelperText>
                        )}
                    </FormControl>

                    <TextField
                        margin="dense"
                        id="Unit"
                        label="Unit"
                        fullWidth
                        variant="standard"
                        type="text"
                        {...register('Unit', {
                            required: 'Unit is required',
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
                            required: 'Price is required',
                        })}
                        error={!!errors.Price}
                        helperText={errors.Price ? errors.Price.message : ''}
                        aria-describedby="price-helper-text"
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} type="button">
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                        Add Product
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}
