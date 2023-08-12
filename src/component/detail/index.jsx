import { Button, Sheet, Typography } from '@mui/joy'
import React from 'react'
import { Link } from 'react-router-dom'

const DetailVideo = () => {
    return (
        <Sheet variant="plain" color="warning" sx={{ p: 5 }}>
            <Typography variant="h2" >
                TODO: embeded youtube and list of products.
            </Typography>
            <Typography variant="h4" >
                The page you're looking for doesn't exist yet.
            </Typography>
            <Link to='/'>
                <Button
                    variant="plain"
                    color="success"
                    to="/"
                >
                    Go back to home
                </Button>
            </Link>
        </Sheet>
    )
}

export default DetailVideo;