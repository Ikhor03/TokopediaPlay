import { Card, CardCover, Sheet } from '@mui/joy'
import React from 'react'

const VideoCard = () => {

    return (
        <Sheet sx={{
            height: '90%',
            Width: "100%",
            // overflow: 'scroll'
        }} >
            <Card sx={{ height: '100%', Width: "100%" }} >
                <CardCover>
                    <iframe
                        src="https://www.youtube.com/embed/2GyCPSk_RnQ"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen frameBorder={0}>
                    </iframe>
                </CardCover>
            </Card>

        </Sheet>
    )
}

export default VideoCard