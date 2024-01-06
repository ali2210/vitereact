import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Box from '@mui/material/Box';
import Appbar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Popper from '@mui/material/Popper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField  from '@mui/material/TextField';
import VisibilityIcon from '@mui/icons-material/Visibility';


import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel  from '@mui/lab/TabPanel';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaymentIcon from '@mui/icons-material/Payment';

function App() {
  
  const [value, setValue] = useState("1");
  const handleChange = (value, newValue) =>{
      setValue(newValue);
  };

  const [index, setIndex] = useState("one");
  const subHandleChange = (index, newIndex) =>{
    setIndex(newIndex);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) =>{
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <>
      <Box sx={{flexGrow : 1, color : 'white'}} md={{flexGrow : 1, color : 'white'}} lg={{flexGrow : 1, color : 'white'}}>
        <Appbar sx={{position : '2pc', top : '0pc', background : 'black', zIndex : '2', color : 'white', height : '3pc'}} 
          md={{position : '2pc', top : '0pc', background : 'black', zIndex : '2', color : 'white', height : '3pc'}} lg={{position : '2pc', top : '0pc', background : 'black', zIndex : '2', color : 'white', height : '3pc'}}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{flexGrow : 1, position : 'relative', left : '-38pc'}} md={{flexGrow : 1, position : 'relative', left : '-38pc'}} lg={{flexGrow : 1, position : 'relative', left : '-38pc'}}> Swiss </Typography>
          </Toolbar>
          <TabContext value={value}>
            <TabList onChange ={handleChange} variant="scrollable"
              scrollButtons="auto" aria-label="tabs" sx={{position : 'relative', top : '-4.1pc', left : '55pc', background: 'transparent'}} md={{position : 'relative', top : '-4.1pc', left : '55pc', background: 'transparent'}} lg={{position : 'relative', top : '-4.1pc', left : '55pc', background: 'transparent'}}>
                <Tab value="1" sx={{border : 'none', color : 'white'}} md={{border : 'none', color : 'white'}} lg={{border : 'none', color : 'white'}} label="Courses" onClick={handleClick} aria-describedby={id}></Tab> <ArrowDropDownIcon sx={{position : 'relative', top : '1.2pc', left : '-1.00pc' , fontSize : 'small'}}/>
                <Tab value="2" sx={{border : 'none', color : 'white'}} md={{border : 'none', color : 'white'}} lg={{border : 'none', color : 'white'}} label="Live classes"></Tab>
                <Tab value="3" sx={{border : 'none', color : 'white'}} md={{border : 'none', color : 'white'}} lg={{border : 'none', color : 'white'}}  label="Settings"></Tab>
                <Tab value="4" sx={{border : 'none', color : 'white'}} md={{border : 'none', color : 'white'}} lg={{border : 'none', color : 'white'}} label="Account"></Tab> <ArrowDropDownIcon sx={{position : 'relative', top : '1.2pc', left : '-1.00pc' , fontSize : 'small'}}/>
              </TabList>
              <TabPanel value={value}>
                <Popper id={id} open={open} anchorEl={anchorEl}>
                  <Box sx={{ border: 1, p: 1, bgcolor: 'black', color : 'white', width : '5pc' }} md={{ border: 1, p: 1, bgcolor: 'black', color : 'white', width : '5pc' }} lg={{ border: 1, p: 1, bgcolor: 'black', color : 'white', width : '5pc' }}>
                      MUI5
                  </Box>
                  <Box sx={{ border: 1, p: 1, bgcolor: 'black', color : 'white', width : '5pc' }} md={{ border: 1, p: 1, bgcolor: 'black', color : 'white', width : '5pc' }} lg={{ border: 1, p: 1, bgcolor: 'black', color : 'white', width : '5pc' }}>
                      ViteReact
                  </Box>
                </Popper>
              </TabPanel>
              <TabPanel value="2">
              </TabPanel>
              <TabPanel value="3">
              </TabPanel>
              <TabPanel value="4">
                <Box sx={{ border: 1, p: 1, bgcolor: 'black', color : 'white', width : '5pc', position : 'relative', top : '-5.5pc', left : '75pc'}} md={{ border: 1, p: 1, bgcolor: 'black', color : 'white', width : '5pc', position : 'relative', top : '-5.5pc', left : '75pc'}} lg={{ border: 1, p: 1, bgcolor: 'black', color : 'white', width : '5pc', position : 'relative', top : '-5.5pc', left : '75pc'}}>
                      <Avatar sx={{justifyContent : 'center', relative : 'position', left : '1pc'}} md={{justifyContent : 'center', relative : 'position', left : '1pc'}} lg={{justifyContent : 'center', relative : 'position', left : '1pc'}}></Avatar> My Profile
                </Box>
              </TabPanel>
          </TabContext>
        </Appbar>
        <Typography variant="h5" component="div" sx={{flexGrow : 1, position : 'relative', top : '3pc' , left : '-35pc', fontSize : '30px'}} md={{flexGrow : 1, position : 'relative', top : '3pc' , left : '-35pc', fontSize : '30px'}} lg={{flexGrow : 1, position : 'relative', top : '3pc' , left : '-35pc', fontSize : '30px'}}> <h4>My account</h4> </Typography>
        <Box sx={{width : '100%', position : 'relative', top : '2pc'}} md={{width : '100%', position : 'relative', top : '2pc'}} lg={{width : '100%', position : 'relative', top : '2pc'}}>
          <Stack direction="row" spacing={2}>
            <Button variant="shadow" sx={{background : 'transparent', position : 'relative', top : '3pc', left : '0.2pc'}} md={{background : 'transparent', position : 'relative', top : '3pc', left : '0.2pc'}} lg={{background : 'transparent', position : 'relative', top : '3pc', left : '0.2pc'}}> 
            <Avatar sx={{background : 'black'}} md={{background : 'black'}} lg={{background : 'black'}}>
              <PersonIcon sx={{color : 'yellow'}} md={{color : 'yellow'}} lg={{color : 'yellow'}}/>
            </Avatar> Account details
            </Button>
            <Button variant="shadow" sx={{background : 'transparent', position : 'relative', top : '7pc', left : '-13.3pc'}} md={{background : 'transparent', position : 'relative', top : '7pc', left : '-13.3pc'}} lg={{background : 'transparent', position : 'relative', top : '7pc', left : '-13.3pc'}}>
             <Avatar>
              <AccountBalanceWalletIcon/>
             </Avatar> Manage subcriptions
            </Button>
            <Button variant="shadow" sx={{background : 'transparent', position : 'relative', top : '11pc', left : '-30pc'}} md={{background : 'transparent', position : 'relative', top : '11pc', left : '-30pc'}} lg={{background : 'transparent', position : 'relative', top : '11pc', left : '-30pc'}}>
             <Avatar>
                <PaymentIcon></PaymentIcon>
              </Avatar> Payment details
            </Button>
            <Button variant="shadow" sx={{background : 'transparent', position : 'relative', top : '15pc', left : '-43.9pc'}} md={{background : 'transparent', position : 'relative', top : '15pc', left : '-43.9pc'}} lg={{background : 'transparent', position : 'relative', top : '15pc', left : '-43.9pc'}}>
            <Avatar>
              <AccountBalanceWalletIcon/>
            </Avatar> Manage student sponsorships
            </Button>
          </Stack>
        </Box>
        <Box sx={{width : '100%', position : 'relative', top : '2pc'}} md={{width : '100%', position : 'relative', top : '2pc'}} lg={{width : '100%', position : 'relative', top : '2pc'}}>
          <Stack direction="row" spacing={2}>
            <Box sx={{position : 'relative', left : '30pc', width : '30pc'}} md={{position : 'relative', left : '30pc', width : '30pc'}} lg={{position : 'relative', left : '30pc', width : '30pc'}}>
              <TextField id="firstname" type='text' label="First Name" variant="filled" sx={{width : '40pc', background : 'darkslategrey', color : 'white', position : 'relative', top : '2pc'}} md={{width : '40pc', background : 'darkslategrey', color : 'white', position : 'relative', top : '2pc'}} lg={{width : '40pc', background : 'darkslategrey', color : 'white', position : 'relative', top : '2pc'}} />
              <TextField id="lastname" type='text' label="Last Name" variant="filled" sx={{width : '40pc',  background : 'darkslategrey', color : 'white', position : 'relative', top : '5pc'}} md={{width : '40pc',  background : 'darkslategrey', color : 'white', position : 'relative', top : '5pc'}} lg={{width : '40pc',  background : 'darkslategrey', color : 'white', position : 'relative', top : '5pc'}} />
              <TextField id="email" type='text' label="Email" variant="filled" sx={{width : '40pc', background : 'darkslategrey', color : 'white', position : 'relative', top : '8pc'}} md={{width : '40pc', background : 'darkslategrey', color : 'white', position : 'relative', top : '8pc'}} lg={{width : '40pc', background : 'darkslategrey', color : 'white', position : 'relative', top : '8pc'}} />
              <TextField id="password" type='password' label="Password" variant="filled" sx={{width : '20pc',  background : 'darkslategrey', color : 'white', position : 'relative', top : '11pc', left : '-4pc'}} md={{width : '20pc',  background : 'darkslategrey', color : 'white', position : 'relative', top : '11pc', left : '-4pc'}} lg={{width : '20pc',  background : 'darkslategrey', color : 'white', position : 'relative', top : '11pc', left : '-4pc'}} />
              <VisibilityIcon sx={{position : 'relative', top : '12pc', left : '-7pc'}} md={{position : 'relative', top : '12pc', left : '-7pc'}} lg={{position : 'relative', top : '12pc', left : '-7pc'}}></VisibilityIcon>
              <Button variant='outline' sx={{position : 'relative', top : '8pc', left : '19pc', color : 'yellow', background : 'black'}} md={{position : 'relative', top : '8pc', left : '19pc', color : 'yellow', background : 'black'}} lg={{position : 'relative', top : '8pc', left : '19pc', color : 'yellow', background : 'black'}}> Change Password </Button>
              <Button variant='outline' sx={{position : 'relative', top : '14pc', left : '-15.5pc', color : 'black', background : 'yellow'}} md={{position : 'relative', top : '14pc', left : '-15.5pc', color : 'black', background : 'yellow'}} lg={{position : 'relative', top : '14pc', left : '-15.5pc', color : 'black', background : 'yellow'}}> Save changes </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  )
}

export default App
