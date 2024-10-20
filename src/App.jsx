import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container, Box } from '@mui/material'

// Pages
import Home from './pages/Home'
import Product from './pages/Product'
import Category from './pages/Category'



export default function App() {
  return (
    <BrowserRouter>
      <Box>
        <Header />

        <Box component="main" sx={{ mt: 14 }}> {/* เพิ่ม margin-top เพื่อให้เนื้อหาไม่ถูกบังด้วย AppBar */}
          <Container>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product' element={<Product />} />
              <Route path='/category' element={<Category />} />
            </Routes>
          </Container>
        </Box>

      </Box>
    </BrowserRouter>
  )
}