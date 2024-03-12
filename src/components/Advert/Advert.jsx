// import { Tab } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import { Box } from '@mui/material';
// import { TabPanel } from '@mui/lab';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const menu = ['active', 'awaiting', 'delivery', 'inactive', 'declined'];

export const Advert = () => {
  const [value, setValue] = useState(menu[0]);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    // console.log(newValue);
    setValue(newValue);
    navigate(`/advert/${newValue}`);
  };
  return (
    <>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: '#FF6F00' }}>
          <Tabs
            onChange={handleChange}
            aria-label="My Advertisements navigation"
            sx={{
              '& button:focus': {
                border: '1px solid #FF6F00',
                borderBottom: '1px solid black',
                borderRadius: '4px 4px 0 0',
                // top: '2px',
                // zIndex: '100',
              },
            }}
          >
            <Tab label="Active" value="active" />
            <Tab label="Awaiting publications" value="awaiting" />
            <Tab label="On delivery" value="delivery" />
            <Tab label="Inactive" value="inactive" />
            <Tab label="Declined" value="declined" />
          </Tabs>
        </Box>
        {/* <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel> */}
      </TabContext>
      <Outlet />
    </>
  );
};
