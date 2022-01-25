/* eslint-disable @typescript-eslint/no-unused-vars */

import Logo from '../../molecules/Logo';
import Icon from '../../atoms/Icons';
import Typography from '../../atoms/Typography';
import {Box,  Menu, MenuItem, Container} from '@mui/material';
import {Search} from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '../../atoms/Button';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import AvatarComp from '../../atoms/Avatar'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchBox from '../../molecules/Search';






const HeaderComponent = (props : any) => {

    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [searchState, setSearchState] = useState(false);
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
        <AppBar position="fixed" sx={{color: 'black', backgroundColor: 'white', boxShadow: 'none', display:'flex',justifyContent:'start'}}>
            <Container>
                <Toolbar sx={{height: '86px',  display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <NavLink to='/' style={{ textDecoration: 'none' }}>
                    <Logo {...props} />
                </NavLink>
                    {
                        searchState
                        ?
                        <SearchBox books={props.books} searchStateHandler={() =>{
                            setSearchState(false)
                            props.setBlankStatus(false)
                         } } /> 
                        :
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button onClick={() => {
                                setSearchState(true)
                                props.setBlankStatus(true)
                            }} size='large' key={0} startIcon={<Search fontSize='large' style={{textDecoration: 'none', fontSize: '30px'}}/>} sx={{color:'#03314B', margin: '0px 5px 0px 40px'}}/>

                            {/* <NavLink to='/' style={{ textDecoration: 'none' }}> */}
                            {/* onMouseLeave={props.handleExploreMenu} */}
                            <Button onClick={props.handleExploreMenu}  size='medium' key={1} sx={{display: 'flex', alignItems: 'center', color:'#03314B', margin: '5px 10px' ,fontSize:'16px',fontWeight:'500'}} children='Explore' endIcon={!props.exploreOption ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} />
                            {/* </NavLink> */}
                            <NavLink to='/' style={{ textDecoration: 'none', }}>
                                <Button size='medium' key={2} children='My Library' sx={{color:'#03314B', margin: '5px 10px' ,fontSize:'16px',fontWeight:'500'}}/>
                            </NavLink>
                        </Box>
                    }
                    <Box sx={{ flexGrow: 0.5,}}>
                        {/* <Tooltip title="Open settings"> */}
                        <div style={{alignItems: 'center',display:'flex'}}>
                        <Button onClick={handleOpenUserMenu}>
                        <AvatarComp/>
                        </Button>
                        <Icon icon={<KeyboardArrowDownIcon />}/>
                        </div>
                        {/* <Icon icon={<KeyboardArrowDownIcon />}/> */}
                        {/* <Button onClick={handleOpenUserMenu} size='medium' key={1} sx={{display: 'flex', alignItems: 'center', color:'black', margin: '5px 10px'}} children='Account' endIcon={anchorElUser ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} /> */}
                            {/* <Image src='/assets/book.png' height={50} onClick={handleOpenUserMenu} sx={{ p: 0, borderRadius: '50%' }} /> */}
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



//  {/* <Tooltip title="Open settings"> */}
//  <div style={{alignItems: 'center',display:'flex'}}>
//  <AvatarComp/>
//  <Icon icon={<KeyboardArrowDownIcon />}/>
//  </div>
// {/* </Tooltip> */}




















// eslint-disable-next-line no-lone-blocks
{/* <Menu
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
                        </Menu> */}