import { Chip, Divider, Sheet, Stack } from '@mui/joy';
import React from 'react';
import CommentInput from '../common/CommentInput';
import { ChatBubble, SendRounded, VerifiedUserRounded } from '@mui/icons-material';

const CommentForm = () => {
    return (
        <form>

            <Chip sx={{ mb: 1 }} endDecorator={<ChatBubble />} >
                LIVE CHAT
            </Chip>
            
            <Sheet
                variant="soft"
                color="neutral"
                sx={{
                    p: 4,
                    height: '250px'
                }} />

            <Stack spacing={1}>
                <CommentInput placeholder='type your name' size='sm' endDecorator={<VerifiedUserRounded />} />
                <CommentInput placeholder='comment...'
                    endDecorator={<SendRounded
                        sx={{ cursor: 'pointer' }}
                    />}
                />
            </Stack>
        </form>
    )
}

export default CommentForm