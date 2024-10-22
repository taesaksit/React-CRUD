import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Correct import

const bannerVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export default function Banner() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={bannerVariants}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          position: 'relative',
          backgroundImage: 'url(https://cdn.pixabay.com/photo/2020/10/01/17/11/store-5619201_1280.jpg)',
          backgroundSize: 'cover',
          color: 'white',
          padding: '50px',
          borderRadius: '8px',
          textAlign: 'center',
          boxShadow: 2,
        }}
      >
        <Box sx={{ backdropFilter: 'blur(12px)', padding: '20px', borderRadius: '8px' }}>
          <Typography variant="h4" gutterBottom>
            Stock Management
          </Typography>
          <Typography variant="body1" gutterBottom>
            Manage your products efficiently with our easy-to-use interface.
          </Typography>

         
          <Link to="/product" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="secondary">
              View Products
            </Button>
          </Link>
        </Box>
      </Box>
    </motion.div>
  );
}