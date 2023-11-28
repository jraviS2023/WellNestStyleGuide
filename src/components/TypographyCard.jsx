import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const TypographyCard = ({ kind, size, font, backgroundColor, height }) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="mt-10"
        >
            <Card sx={{ width: 600, height: height, borderRadius: 4, backgroundColor: backgroundColor }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" sx={{ fontSize: size, fontFamily: font }}>
                        {kind}
                    </Typography>
                    <Typography variant="body1" color="text.primary" sx={{ fontSize: size, fontFamily: font }}>
                        {font}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: size, fontFamily: font }}>
                        {size}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default TypographyCard;