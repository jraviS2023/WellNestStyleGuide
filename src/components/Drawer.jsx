import React, { useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-scroll';
import Typography from '@mui/material/Typography';

const DrawerComponent = ({ isDrawerOpen, toggleDrawer }) => {
    const sections = [
        'Style Guide',
        'Logo',
        'Colors',
        'Typography',
        'Page Layout and Spacing',
        'Design Patterns',
        'Buttons',
        'Chips',
        'Icons',
        'Dialogs',
        'Menus',
        'Forms',
        'Data Visualization',
    ];

    useEffect(() => {
        if (isDrawerOpen) {
        }
    }, [isDrawerOpen]);

    const handleDrawerClose = () => {
        toggleDrawer(false);
    };

    return (
        <Drawer
            variant="temporary"
            anchor="left"
            open={isDrawerOpen}
            onClose={handleDrawerClose}
        >
            <List>
                <Typography variant="h4" className="ml-3 mt-2">
                    WellNest
                </Typography>
                <div className="mt-10"></div>
                {sections.map((section, index) => (
                    <Link
                        key={section}
                        to={section.toLowerCase().replace(/\s+/g, '')}
                        smooth={true}
                        duration={500}
                        offset={-70}
                    >
                        <ListItem button onClick={handleDrawerClose}>
                            <ListItemText primary={section} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Drawer>
    );
};

export default DrawerComponent;