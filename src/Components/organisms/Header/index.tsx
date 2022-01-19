/* eslint-disable @typescript-eslint/no-unused-vars */
import Logo from '../../molecules/Logo';
import Icon from '../../atoms/Icons';
import Typography from '../../atoms/Typography';
import {Box,  Menu, MenuItem, Container, Tooltip, Stack} from '@mui/material';
import {ArrowDropUp, ArrowDropDown, Search} from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '../../atoms/Button';
import Image from '../../atoms/Images';
import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import AvatarComp from '../../atoms/Avatar'

const HeaderComponent = (props : any) => {
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenNavMenu = (event: any) => {
        setAnchorElNav(event.currentTarget);
      };
    const handleOpenUserMenu = (event: any) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    
    return (
        <AppBar position="fixed" sx={{color: 'black', backgroundColor: 'white'}}>
            <Container>
                <Toolbar sx={{height: '86px',  display: 'flex', alignItems: 'center'}}>
                    <Logo {...props} />
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {/* <NavLink to='/search' style={{ textDecoration: 'none' }}> */}
                        <Button size='large' key={0} startIcon={<Search fontSize='large' style={{textDecoration: 'none', fontSize: '30px'}}/>} sx={{color:'black', margin: '0px 5px 0px 40px'}}/>
                    {/* </NavLink> */}
                    {/* <NavLink to='/' style={{ textDecoration: 'none' }}> */}
                    {/* onMouseLeave={props.handleExploreMenu} */}
                        <Button onClick={props.handleExploreMenu}  size='medium' key={1} sx={{display: 'flex', alignItems: 'center', color:'black', margin: '5px 10px'}} children='Explore' endIcon={!props.exploreOption ? <ArrowDropUp /> : <ArrowDropDown />} />
                    {/* </NavLink> */}
                    {/* <NavLink to='/' style={{ textDecoration: 'none' }}> */}
                        <Button size='medium' key={2} children='My Library' sx={{color:'black', margin: '5px 10px'}}/>
                    {/* </NavLink> */}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        {/* <Tooltip title="Open settings"> */}
                        <Stack direction='row'>
                            <AvatarComp/>
                            <Icon icon={<ArrowDropDown/>}/>
                            </Stack>
                        {/* </Tooltip> */}
                        
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default HeaderComponent;