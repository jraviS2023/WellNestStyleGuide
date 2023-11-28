import React from 'react';
import { Card, CardMedia, Box } from '@mui/material';


const ImageCard = ({ imageUrl }) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="mt-10"
        >
            <Card sx={{ width: 300, borderRadius: 4 }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={imageUrl}
                    alt="Sample Image"
                    sx={{ borderRadius: 4 }}
                />
            </Card>
        </Box>
    );
};

export default ImageCard;