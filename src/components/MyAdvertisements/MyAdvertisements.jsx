// import { Tab } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import { Box } from '@mui/material';
// import { TabPanel } from '@mui/lab';
import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const menu = ['active', 'awaiting', 'delivery', 'inactive', 'declined'];

export const MyAdvertisements = () => {
  const [value, setValue] = useState(menu[0]);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
    navigate(`/advertisements/${newValue}`);
  };
  return (
    <>
      <h2>My Advertisements</h2>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            aria-label="My Advertisements navigation"
          >
            {/* <Link to="active"> */}
            <Tab label="Active" value="active" />
            {/* </Link> */}

            <Tab label="Awaiting publications" value="awaiting" />
            <Tab label="On delivery" value="delivery" />
            <Tab label="Inactive" value="inactive" />
            <Tab label="Declined" value="declined" />
          </TabList>
        </Box>
        {/* <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel> */}
      </TabContext>
      <Outlet />
    </>
  );
};
