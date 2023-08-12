import React from 'react';

import ModeToggle from "../common/ModeToggle"
import { Avatar, Dropdown, ListDivider, Menu, MenuButton, MenuItem, Sheet, Stack, Typography } from '@mui/joy';
import { ArrowDropDownCircleOutlined, PlayArrow } from '@mui/icons-material';
import RadioTag from '../common/RadioTag';

const Top = () => {
    return (
        <Sheet component={'header'} variant='soft' sx={{ padding: 2 }} >
            <Stack spacing={3}>
                <Stack
                    direction={'row'}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Typography
                        component='h1'
                        startDecorator={<PlayArrow color='success' />}
                    >Tokopedia Play
                    </Typography>

                    <Stack direction='row' spacing={2}>
                        <ModeToggle />


                        <Dropdown>
                            <MenuButton>{<Avatar />}</MenuButton>
                            <Menu placement="bottom-end" endDecorator={<ArrowDropDownCircleOutlined />}>
                                <MenuItem>Ikhor</MenuItem>
                                <MenuItem>plug In Accessory</MenuItem>
                                <ListDivider />
                                <MenuItem>Setting</MenuItem>
                                <MenuItem>My Account</MenuItem>
                                <MenuItem>Loout</MenuItem>
                            </Menu>
                        </Dropdown>
                    </Stack>
                </Stack>

                <RadioTag />
            </Stack>
        </Sheet>
    )
}

export default Top