'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Article } from '../blogStore/Types/blogsTypes'
import { MAIN_CONSTANTS } from '../constants'
import {  Grid } from '@mui/material';
import Head from 'next/head'
type ListType = {
    lists: Article,
    isSourcePage: boolean
};

export default function Cards({ lists, isSourcePage }: ListType) {
    const [expanded, setExpanded] = React.useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const handleImagError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src = MAIN_CONSTANTS.PLACE_HOLDER_IMAGE
    }

    return (
        <Card
            sx={{
                minHeight: lists?.urlToImage ? '300px' : '180px',
            }}>{
                !isSourcePage &&
                <CardMedia
                    component="img" alt="green iguana" height="150"
                    image={lists?.urlToImage ? lists?.urlToImage : MAIN_CONSTANTS.PLACE_HOLDER_IMAGE}
                    onError={handleImagError}
                    onClick={() => {
                        window.open(lists.url, '_blank');
                    }}
                    sx={{
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            transform: 'scale(1.1)',
                        },
                        cursor: 'pointer'
                    }}
                />
            }
            <CardContent
                sx={{
                    display: 'flex', alignItems: 'start',
                    flexDirection: 'column', justifyContent: 'space-between',
                    minHeight: '175px'
                }}
            >
                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '16px', fontWeight: '700' }}>
                    {lists.author ?? "A Author"}
                </Typography>
                <>
                    {expanded ? (
                        <Typography variant="body2" color="text.secondary">
                            {lists.description}
                        </Typography>
                    ) : (
                        <Typography variant="body2" color="text.secondary" sx={{ maxHeight: 100, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                            {lists.description}
                        </Typography>
                    )}
                    <Grid
                        container
                    >
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} >
                            <Button size="small" onClick={toggleExpanded}>
                                {expanded ? 'Show Less' : 'Show More'}
                            </Button>
                        </Grid>
                        <Grid item sx={{ textAlign: 'end' }} xs={6} sm={6} md={6} lg={6} xl={6}>
                            <Button size="small" onClick={() => { window.open(lists.url, '_blank'); }}>
                                View
                            </Button>
                        </Grid>
                    </Grid>
                </>
            </CardContent>
        </Card>
    );
}
