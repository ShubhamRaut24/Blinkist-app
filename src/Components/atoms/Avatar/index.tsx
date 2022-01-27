import { Avatar } from '@mui/material'
import React from 'react'
import {blue } from '@mui/material/colors';

function AvatarComp() {
    return (
        
        <Avatar sx={{ bgcolor: blue[500] }} data-testid="avatar" >A</Avatar>
        
    )
}

export default AvatarComp
