import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';




export default function AddSupplierModal({ open, handleClose, onSubmit }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },

    } = useForm();

    const handleFormSubmit = (supplierData) => {
        onSubmit(supplierData,reset)
    }
    
    return (

        <Dialog
            open={open}
            onClose={handleClose}
            keepMounted={false}
        >
            <DialogTitle>Add New Supplier</DialogTitle>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="SupplierName "
                        fullWidth
                        variant="standard"
                        id="SupplierName"
                        {...register('SupplierName', {
                            required: 'SupplierName is required'
                        })}
                        error={!!errors.SupplierName}
                        helperText={errors.SupplierName ? errors.SupplierName.message : ""}

                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        label="ContactName"
                        fullWidth
                        variant="standard"
                        id="ContactName"
                        {...register('ContactName', {
                            required: 'ContactName is required'
                        })}
                        error={!!errors.ContactName}
                        helperText={errors.ContactName ? errors.ContactName.message : ""}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        label="Address"
                        fullWidth
                        variant="standard"
                        id="Address"
                        {...register('Address', {
                            required: 'Address is required'
                        })}
                        error={!!errors.Address}
                        helperText={errors.Address ? errors.Address.message : ""}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        label="City"
                        fullWidth
                        variant="standard"
                        id="City"
                        {...register('City', {
                            required: 'City is required'
                        })}
                        error={!!errors.City}
                        helperText={errors.City ? errors.City.message : ""}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        label="PostalCode"
                        fullWidth
                        variant="standard"
                        id="PostalCode"
                        {...register('PostalCode', {
                            required: 'PostalCode is required'
                        })}
                        error={!!errors.PostalCode}
                        helperText={errors.PostalCode ? errors.PostalCode.message : ""}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        label="Country"
                        fullWidth
                        variant="standard"
                        id="Country"
                        {...register('Country', {
                            required: 'Country is required'
                        })}
                        error={!!errors.Country}
                        helperText={errors.Country ? errors.Country.message : ""}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        label="Phone"
                        fullWidth
                        variant="standard"
                        id="Phone"
                        {...register('Phone', {
                            required: 'Phone is required'
                        })}
                        error={!!errors.Phone}
                        helperText={errors.Phone ? errors.Phone.message : ""}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} type="button">
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                        Add Supplier
                    </Button>
                </DialogActions>
            </form >
        </Dialog>
    );
}
