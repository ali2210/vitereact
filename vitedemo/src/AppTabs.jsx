
import { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function ArrowDropdownIcon(){

  return(
    <ArrowDropDownIcon sx={{position : 'relative', top : '1.2pc', left : '-0.7pc' , fontSize : 'small'}}></ArrowDropDownIcon>
  );
}


export default function MyAppTabs(){

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) =>{
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const [value, setValue] = useState("1");
  const handleChange = (value, newValue) =>{
      setValue(newValue);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return(
    <TabContext value={value}>
            <TabList onChange ={handleChange} aria-label="tabs" variant='scrollable' scrollButtons='auto' sx={{position : 'relative', top : '-4.1pc', left : '55pc'}}>
                <Tab value="1"  label="Courses" onClick={handleClick} aria-describedby={id} sx={{color : 'white', '&.Mui-selected': {outline: 'none'}}}></Tab> <ArrowDropdownIcon></ArrowDropdownIcon>
                <Tab value="2"  label="Live classes" sx={{color : 'white', '&.Mui-selected': {outline: 'none'}}}></Tab>
                <Tab value="3"  label="Settings" sx={{color : 'white', '&.Mui-selected': {outline: 'none'}}}></Tab>
                <Tab value="4"  label="Account" sx={{color : 'white', '&.Mui-selected': {outline: 'none'}}}></Tab> <ArrowDropdownIcon></ArrowDropdownIcon>
              </TabList>
              <TabPanel value="1"></TabPanel>
              <TabPanel value="2"></TabPanel>
              <TabPanel value="3"></TabPanel>
              <TabPanel value="4"></TabPanel>
    </TabContext>
  );
}