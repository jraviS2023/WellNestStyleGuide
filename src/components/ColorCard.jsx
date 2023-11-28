import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const ColorCard = ({ title, content, backgroundColor, textColor }) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="mt-10"
        >
            <Card sx={{ width: 300, height: 300, borderRadius: 4, backgroundColor: backgroundColor }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" sx={{ color: textColor }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ color: textColor }}>
                        {content}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ColorCard;
