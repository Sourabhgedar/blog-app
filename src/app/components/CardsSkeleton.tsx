import Skeleton from '@mui/material/Skeleton';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
const CardsSkeleton = () => {
    return (
        <>
            <Skeleton variant="rectangular" height={150} />
            <CardContent
                sx={{
                    display: 'flex',
                    alignItems: 'start',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '175px',
                }}
            >
                <Skeleton variant="text" width="80%" height={16} />
                <Skeleton variant="text" width="60%" height={16} />
                <Skeleton variant="text" width="40%" height={16} />
                <Button sx={{}} size="small">
                    Loading...
                </Button>
            </CardContent>
        </>
    )
}

export default CardsSkeleton