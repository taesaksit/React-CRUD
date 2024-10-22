import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';

export default function EditCategoryModal({ open, handleClose, category, onUpdate }) {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    // Update form values when category prop changes
    useEffect(() => {

        if (category) {

            setValue('CategoryID', category.id);
            setValue('CategoryName', category.CategoryName || '');
            setValue('Description', category.Description || '');


            console.log('UseEffect from update', category);

        }
    }, [category, setValue]);



    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle className="text-lg font-semibold">Edit Category</DialogTitle>
            <form onSubmit={handleSubmit(onUpdate)}>
                <DialogContent>
                    <div className="space-y-4">
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
