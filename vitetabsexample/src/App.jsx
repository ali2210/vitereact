import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Avatar from '@mui/material/Avatar';
import { TextField } from '@mui/material';

function App() {
  
  const [value , setValue] = useState('one');

  const handleChange = (value, newValue) => { setValue(newValue);};

  return (
    <>
        <Box sx={{width : '100%'}}>
          <TabContext value={value}>
            <TabList  onChange ={handleChange} variant="scrollable"
              scrollButtons="auto" aria-label="tabs">
              <Tab value="one" label="Account"></Tab>
              <Tab value="two" label="Create New Account"></Tab>
          </TabList>
          <TabPanel value="one">
              <Avatar>
              </Avatar>
          </TabPanel>
          <TabPanel value="two">
              <TextField id='standard-basic' label='name' variant='standard' placeholder='Your Name'/>              
          </TabPanel>
          </TabContext>
        </Box>
    </>
  )
}

export default App
