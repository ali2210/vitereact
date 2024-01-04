import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function App() {
  
  const [value , setValue] = useState('one');

  const handleChange = (value, newValue) => { setValue(newValue);};

  return (
    <>
        <Box sx={{width : '100%'}}>
          <Tabs value={value} onChange ={handleChange} variant="scrollable"
              scrollButtons="auto" aria-label="tabs">
            <Tab value="one" label="Flexbox"/>
            <Tab value="two" label="Responsive"/>
          </Tabs>
        </Box>
    </>
  )
}

export default App
