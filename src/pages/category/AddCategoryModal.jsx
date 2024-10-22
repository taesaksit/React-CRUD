import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';


export default function AddCategoryModal({ open, handleClose ,onSubmit }) {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    

    return (

        <Dialog
            open={open}
            onClose={handleClose}
            keepMounted={false}
        >
            <DialogTitle>Add New Categories</DialogTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Category Name"
                        fullWidth
                        variant="standard"
                        id="CategoryName"
                        {...register('CategoryName', {
                            required: 'CategoryName is required'
                        })}
                        error={!!errors.CategoryName}
                        helperText={errors.CategoryName ? errors.CategoryName.message : ""}

                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        label="Description"
                        fullWidth
                        variant="standard"
                        id="Description"
                        {...register('Description', {
                            required: 'Description is required'
                        })}
                        error={!!errors.CategoryName}
                        helperText={errors.CategoryName ? errors.CategoryName.message : ""}

                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" >Add Category</Button>
                </DialogActions>
            </form >
        </Dialog>
    );
}
