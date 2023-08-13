import { Stack } from '@mui/joy'
import React from 'react'
import CommentInput from '../common/CommentInput'
import { SendRounded, VerifiedUserRounded } from '@mui/icons-material'

const CommentForm = () => {
  return (
          <Stack spacing={1}>
              <CommentInput placeholder='username' size='sm' endDecorator={<VerifiedUserRounded />} />
              <CommentInput placeholder='comment...'
                  endDecorator={<SendRounded
                      sx={{ cursor: 'pointer' }}
                  />}
              />
          </Stack>
  )
}

export default CommentForm