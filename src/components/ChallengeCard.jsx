import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';

const customButtonStyle = {
    borderRadius: '20px',
};

export default function ChallengeCard({ imgSrc, imgAlt, title, coinCnt, routeTarget, isCompleted }) {
    const buttonText = isCompleted ? 'COMPLETED' : `${coinCnt} Coins`

    return (
        <Card sx={{ maxWidth: 140, marginBottom: 3, borderRadius: 5 }}>
            <CardActionArea to={routeTarget} disabled={isCompleted}>
                <CardMedia
                    component="img"
                    alt={imgAlt}
                    image={imgSrc}
                />

                <CardContent sx={{ paddingLeft: 2, paddingRight: 2, paddingTop: 0, paddingBottom: 0 }}>
                    {isCompleted ? (
                        <div className="text-24px font-semibold text-center text-zinc-500">
                            {title}
                        </div>) : (
                        <div className="text-24px font-semibold text-center">
                            {title}
                        </div>
                    )}
                </CardContent>

                <CardActions sx={{ justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        className="justify-center"
                        style={customButtonStyle}
                        disabled={isCompleted}
                    >
                        {buttonText}
                    </Button>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}