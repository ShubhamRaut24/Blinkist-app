import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import tabTheme from '../../../Themes/tabTheme';
import { ThemeProvider } from '@mui/material/styles';


export default function TabsWrappedLabel({tabData, ...props}: any) {
    
  const [value, setValue] = React.useState(tabData && tabData[0].value);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    props.stateHandler(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
    <ThemeProvider theme={tabTheme}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        textColor={props.textColor ? props.textColor : "secondary"}
        indicatorColor={props.indicatorColor ? props.indicatorColor : "secondary"}
      >
        {
          tabData.map((currTab:any) => {
            return (
              <Tab value={currTab.value} label={currTab.label} sx={{fontWeight: '100'}}/>
            );
          })
        }
      </Tabs>
    </ThemeProvider>
    </Box>
  );
}