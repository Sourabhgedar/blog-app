import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Article } from '../blogStore/Types/blogsTypes'
import { MAIN_CONSTANTS } from '../constants'
type ListType = {
    lists: Article
};

export default function Cards({ lists }: ListType) {
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
                minHeight: '300px',
            }}>
            <CardMedia
                component="img" alt="green iguana" height="150"
                image={lists?.urlToImage ? lists?.urlToImage : MAIN_CONSTANTS.PLACE_HOLDER_IMAGE}
                onError={handleImagError}
            />
            <CardContent
                sx={{
                    display: 'flex', alignItems: 'start',
                    flexDirection: 'column', justifyContent: 'space-between',
                    minHeight: '175px'
                }}
            >
                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '16px', fontWeight: '700' }}>
                    {lists.author}
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
                    <Button sx={{}} size="small" onClick={toggleExpanded}>
                        {expanded ? 'See Less' : 'See More'}
                    </Button>
                </>
            </CardContent>
        </Card>
    );
}
