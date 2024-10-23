import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import { Link } from 'react-router-dom';

const drawerWidth = 240;

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

   

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                <ListItem key="Home" disablePadding component={Link} to="/">
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>

                <ListItem key="Product" disablePadding component={Link} to="/product">
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary="Product" />
                    </ListItemButton>
                </ListItem>


                <ListItem key="Category" disablePadding component={Link} to="/category">
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary="Category" />
                    </ListItemButton>
                </ListItem>


                <ListItem key="Supplier" disablePadding component={Link} to="/supplier">
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary="Supplier" />
                    </ListItemButton>
                </ListItem>

            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (

        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

                        <Button key="Home"
                            sx={{ color: '#fff' }}
                            component={Link} to="/"
                        >
                            Home
                        </Button>

                        <Button key="Product"
                            sx={{ color: '#fff' }}
                            component={Link} to="/product"
                        >
                            Product
                        </Button>

                        <Button key="Category"
                            sx={{ color: '#fff' }}
                            component={Link} to="/category"
                        >
                            Category
                        </Button>

                        <Button key="Supplier"
                            sx={{ color: '#fff' }}
                            component={Link} to="/supplier"
                        >
                            Supplier
                        </Button>


                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>

        </Box>

    );
}

Header.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Header;
