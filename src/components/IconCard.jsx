import React from 'react';
import { Card, CardContent, Box } from '@mui/material';

const IconCard = ({ iconUrl, iconName }) => {
    return (
        <Card sx={{ maxWidth: 150 }}>
            <Box sx={{ padding: '20px' }}>
                <img src={iconUrl}></img>
            </Box>
            <CardContent>
                <p>{iconName}</p>
            </CardContent>
        </Card>
    );
};

export default IconCard;