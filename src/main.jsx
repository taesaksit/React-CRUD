import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@mui/material/styles'; // นำเข้า ThemeProvider
import { createTheme } from '@mui/material/styles'; // นำเข้า createTheme

const theme = createTheme({
  palette: {
    primary: {
      main: '#5DA7FB', // สีหลักของ AppBar
      purple: "#995DFF",
      red: "#FC1859",
      contrastText: '#fff'

    },
    secondary: {
      main: '#FC1859'
    }
  },
});


createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>

    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
)


// For dev
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <App />
// )



