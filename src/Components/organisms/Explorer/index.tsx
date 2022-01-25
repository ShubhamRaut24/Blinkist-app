/* eslint-disable @typescript-eslint/no-unused-vars */
import {Container, Box} from '@mui/material';
// import Tab from '../../molecules/tabs';
import Typography from '../../atoms/Typography';
// import {Link} from 'react-router-dom';
import {useState} from 'react';
import NavIcon from '../../molecules/NavIcon';
import theme from '../../../Themes/main'
import { makeStyles } from '@mui/styles';
import {RocketLaunchOutlined, AccountBalanceOutlined ,
     DesktopWindowsOutlined, ScienceOutlined,
     StairsOutlined, HistoryToggleOffOutlined,
     AttachMoneyOutlined, SpaOutlined, ConnectWithoutContactOutlined, ApartmentOutlined, AccessibleForwardOutlined, BorderColorOutlined, CakeOutlined, CategoryOutlined, FamilyRestroomOutlined, LibraryBooksOutlined, LocalAtmOutlined, ManageAccountsOutlined, ParkOutlined, PeopleAltOutlined, PrecisionManufacturingOutlined, PsychologyOutlined, SchoolOutlined, SelfImprovementOutlined, TimerOutlined, WcOutlined}
      from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';


const useStyles = makeStyles({
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

    
    const classes = useStyles();
    const tabData = [
        { 
          'value': 'category',
          'label': 'Explore by category',
        },
        { 
          'value': 'recent',
          'label': 'See recently added titles'
        },
        { 
            'value': 'popular',
            'label': 'See popular titles'
          }
    ]
   
    const [currState, setCurrState] = useState(tabData[0].value);
    const handleState = (state:string) => {
        setCurrState(state);
    }
    
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
                <Container className={classes.container}>
                <Link to='/' style={{textDecoration: 'none', color:'#6D787E'}}>
                    <Typography  variant1='subtitle3' sx={{color: '#116BE9', fontWeight: 'bold'}} mr={12}>
                        Explore by category
                    </Typography>
                </Link>
                    <Link to='/' style={{textDecoration: 'none', color:'#6D787E'}}>
                        <Typography variant1='subtitle3' mr={12} className={classes.topicText}>
                            See recently added titles
                        </Typography>
                    </Link>
                    <Link to='/' style={{textDecoration: 'none', color:'#6D787E'}}>
                        <Typography className={classes.topicText} variant1='subtitle3' mr={12}>
                            See popular titles
                        </Typography>
                    </Link>
                </Container>
                <Container className={classes.navs}>
                    {data.map((currData)=>{
                        return <Box className={classes.nav}>
                           <NavLink to='/EntrepreneurPage' style={{textDecoration: 'none',color:'#6D787E' }} >
                            <NavIcon {...currData}  />
                            </NavLink>
                            </Box>
                    })}
                </Container>
        </Box>
    )
}

export default ExploreComponent