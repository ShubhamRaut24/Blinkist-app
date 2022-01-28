/* eslint-disable @typescript-eslint/no-unused-vars */
import {Container, Box} from '@mui/material';
import Typography from '../../atoms/Typography';
import NavIcon from '../../molecules/NavIcon';
import theme from '../../../Themes/main'
import { makeStyles as makeStyle } from '@mui/styles';
import {RocketLaunchOutlined, AccountBalanceOutlined ,
     DesktopWindowsOutlined, ScienceOutlined,
     StairsOutlined, HistoryToggleOffOutlined,
     AttachMoneyOutlined, SpaOutlined, ConnectWithoutContactOutlined, ApartmentOutlined, AccessibleForwardOutlined, BorderColorOutlined, CakeOutlined, CategoryOutlined, FamilyRestroomOutlined, LibraryBooksOutlined, LocalAtmOutlined, ManageAccountsOutlined, ParkOutlined, PeopleAltOutlined, PrecisionManufacturingOutlined, PsychologyOutlined, SchoolOutlined, SelfImprovementOutlined, TimerOutlined, WcOutlined}
      from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((themes)=>({
    [themes.breakpoints.down('sm')]: {
        topic: {
            fontSize: '14px',
            width: '100vw',
        }
    },
}));


const useStyle = makeStyle({
    root: {
        backgroundColor: theme.palette.backgroundcolor.main,
        height: 'auto',
        width: 'auto',
        position: 'absolute',
        top: '-10px', 
        left: '0px', 
        right: '0px',
        zIndex : '1000',
        paddingLeft: theme.spacing(2)
    },
    container: {
        display: 'flex',
        justifyItems: 'space-between', 
        alignItems: 'center', 
        height: '80px', 
        borderBottom: '1px solid lightGrey', 
        padding: '0px'
    },
    topicText: {
        
        fontWeight: 700
    },
    navs: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    nav:{
        width: '33.3%',
        color: theme.palette.textcolor.light
    }
})

const ExploreComponent = ()=>{
    const classes = useStyle();
    const allClass = useStyles();
    
    const data =[
        {
            'leftIcon': <RocketLaunchOutlined />,
            'label': 'Entrepreneurship'
        },
        {
            'leftIcon': <AccountBalanceOutlined />,
            'label': 'Politics'
        },
        {
            'leftIcon': <DesktopWindowsOutlined />,
            'label': 'Marketing & Sales'
        },
        {
            'leftIcon': <ScienceOutlined />,
            'label': 'Science'
        },
        {
            'leftIcon': <SpaOutlined />,
            'label': 'Health & Nutrition'
        },
        {
            'leftIcon': <StairsOutlined />,
            'label': 'Personal Development'
        },
        {
            'leftIcon': <AttachMoneyOutlined />,
            'label': 'Economics'
        },
        {
            'leftIcon': <HistoryToggleOffOutlined />,
            'label': 'History'
        },
        {
            'leftIcon': <ConnectWithoutContactOutlined />,
            'label': 'Communication Skills'
        },
        {
            'leftIcon': <ApartmentOutlined />,
            'label': 'Corporate Culture'
        },
        {
            'leftIcon': <CategoryOutlined />,
            'label': 'Management & Leadership'
        },
        {
            'leftIcon': <AccessibleForwardOutlined />,
            'label': 'Motivation & Inspiration'
        },
        {
            'leftIcon': <LocalAtmOutlined />,
            'label': 'Money & Investments'
        },
        {
            'leftIcon': <PsychologyOutlined/>,
            'label': 'Psycology'
        },
        {
            'leftIcon': <TimerOutlined />,
            'label': 'Productivity'
        },
        {
            'leftIcon': <WcOutlined />,
            'label': 'Sex & Relationships'
        },
        {
            'leftIcon': <PrecisionManufacturingOutlined />,
            'label': 'Technology & the Future'
        },
        {
            'leftIcon': <SelfImprovementOutlined />,
            'label': 'Mindfulness & Hapiness'
        },
        {
            'leftIcon': <FamilyRestroomOutlined />,
            'label': 'Parenting'
        },
        {
            'leftIcon': <PeopleAltOutlined />,
            'label': 'Society & Culture'
        },
        {
            'leftIcon': <ParkOutlined/>,
            'label': 'Nature & the Environment'
        },
        {
            'leftIcon': <CakeOutlined />,
            'label': 'Biography & Memoir'
        },
        {
            'leftIcon': <SchoolOutlined/>,
            'label': 'Carrer & Success'
        },
        {
            'leftIcon': <LibraryBooksOutlined />,
            'label': 'Education'
        },
        {
            'leftIcon': <ManageAccountsOutlined />,
            'label': 'Religion & Sprituality'
        },
        {
            'leftIcon': <BorderColorOutlined />,
            'label': 'Creativity'
        }
    ]

    return (
        <Box className={classes.root} sx={{width:'1440px',height:'398px'}}>
                <Container className={`${classes.container} ${allClass.container}`}>
                    <Typography  variant1='subtitle3' sx={{color: '#116BE9', fontWeight: 'bold'}} mr={12}>
                        Explore by category
                    </Typography>
                        <Typography variant1='subtitle3' mr={12}  className={`${classes.topicText} ${allClass.topic}`}>
                            See recently added titles
                        </Typography>
                        <Typography className={`${classes.topicText} ${allClass.topic}`} variant1='subtitle3' mr={12}>
                            See popular titles
                        </Typography>
                </Container>
                <Container className={classes.navs}>
                    {data.map((currData)=>{
                        return <Box className={classes.nav}>
                           <NavLink to='/EntrepreneurPage' style={{textDecoration: 'none',color:'#6D787E' }} >
                            <NavIcon {...currData} data-testid='nav-icon'  />
                            </NavLink>
                            </Box>
                    })}
                </Container>
        </Box>
    )
}
export default ExploreComponent