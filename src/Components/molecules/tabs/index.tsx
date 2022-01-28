import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import tabTheme from '../../../Themes/tabsTheme';
import { ThemeProvider } from '@mui/material/styles';

export default function TabsWrappedLabel({tabData, ...props}: any) {
  const [value, setValue] = React.useState(tabData && tabData[0].value);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    props.stateHandler(newValue);
  };

  return (
    <Box sx={{ borderBottom: 2, borderColor: 'divider', width:'912px' }}>
    <ThemeProvider theme={tabTheme}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        autoCapitalize="none"
        textColor={props.textColor ? props.textColor : "secondary"}
        indicatorColor={props.indicatorColor ? props.indicatorColor : "secondary"}
      >
        {
          tabData.map((currTab:any) => {
            return (
              <Tab value={currTab.value} label={currTab.label} data-testid='tab'   sx={{fontWeight: '700', textTransform: 'unset',fontSize:'18px',fontFamily:'Cera Pro',marginRight:'150px'}}/>
            );
          })
        }
      </Tabs>
    </ThemeProvider>
    </Box>
  );
}