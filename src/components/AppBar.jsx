import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const AppBarComponent = ({ toggleDrawer }) => {
    return (
        <AppBar position="fixed" className="w-full" sx={{ bgcolor: 'black' }}>
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default AppBarComponent;
