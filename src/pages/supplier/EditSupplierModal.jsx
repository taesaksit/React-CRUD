import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect } from'react';
import { useForm } from 'react-hook-form';


export default function EditSupplierModal({ open, handleClose, supplier, onUpdate }) {

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        if (supplier) {
            setValue('SupplierID', supplier.id);
            setValue('SupplierName', supplier.SupplierName);
            setValue('ContactName', supplier.ContactName);
            setValue('Address', supplier.Address);
            setValue('City', supplier.City);
            setValue('PostalCode', supplier.PostalCode);
            setValue('Country', supplier.Country);
            setValue('Phone', supplier.Phone);
        }
    } , [supplier , setValue]);

    
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle className="text-lg font-semibold">Edit Supplier</DialogTitle>
            <form onSubmit={handleSubmit(onUpdate)}>
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
                    <Button onClick={handleClose} className="bg-gray-500 text-white">
                        ยกเลิก
                    </Button>
                    <Button type="submit" className="bg-blue-500 text-white">
                        แก้ไข
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}
