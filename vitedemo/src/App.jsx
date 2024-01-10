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
import FormControl  from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
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
      <Box sx={{flexGrow : 1, color : 'white'}}>
        <Appbar sx={{position : '2pc', top : '0pc', background : 'black', zIndex : '2', color : 'white', height : '3pc'}}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{flexGrow : 1, position : 'relative', left : '-38pc'}}> Swiss </Typography>
          </Toolbar>
          <TabContext value={value}>
            <TabList onChange ={handleChange} variant="scrollable"
              scrollButtons="auto" aria-label="tabs" sx={{position : 'relative', top : '-4.1pc', left : '55pc', background: 'transparent'}}>
                <Tab value="1" sx={{border : '', color : 'white'}} label="Courses" onClick={handleClick} aria-describedby={id}></Tab> <ArrowDropDownIcon sx={{position : 'relative', top : '1.2pc', left : '-1.00pc' , fontSize : 'small'}}/>
                <Tab value="2" sx={{border : 'none', color : 'white'}} label="Live classes"></Tab>
                <Tab value="3" sx={{border : 'none', color : 'white'}} label="Settings"></Tab>
                <Tab value="4" sx={{border : 'none', color : 'white'}} label="Account"></Tab> <ArrowDropDownIcon sx={{position : 'relative', top : '1.2pc', left : '-1.00pc' , fontSize : 'small'}}/>
              </TabList>
              <TabPanel value={value}>
                <Popper id={id} open={open} anchorEl={anchorEl}>
                  <Box sx={{ border: 1, p: 1, bgcolor: 'black', color : 'white', width : '5pc' }}>
                      MUI5
                  </Box>
                  <Box sx={{ border: 1, p: 1, bgcolor: 'black', color : 'white', width : '5pc' }}>
                      ViteReact
                  </Box>
                </Popper>
              </TabPanel>
              <TabPanel value="2">
              </TabPanel>
              <TabPanel value="3">
              </TabPanel>
              <TabPanel value="4">
                <Box sx={{ border: 1, p: 1, bgcolor: 'black', color : 'white', width : '5pc', position : 'relative', top : '-5.5pc', left : '75pc'}}>
                      <Avatar sx={{justifyContent : 'center', relative : 'position', left : '1pc'}}></Avatar> My Profile
                </Box>
              </TabPanel>
          </TabContext>
        </Appbar>
        <Typography variant="h5" component="div" sx={{flexGrow : 1, position : 'relative', top : '3pc' , left : '-33pc', fontSize : '30px'}}> <h4>My account</h4> </Typography>
        <Box sx={{width : '100%', position : 'relative', top : '2pc'}}>
          <Stack direction="row" spacing={2}>
            <Button variant="shadow" sx={{background : 'transparent', position : 'relative', top : '3pc', left : '2.6pc'}}> 
            <Avatar sx={{background : '#28282B', position : 'relative', left : '-0.2pc'}}>
              <PersonIcon sx={{color : 'yellow'}}/>
            </Avatar> Account details
            </Button>
            <Button variant="shadow" sx={{background : 'transparent', position : 'relative', top : '7pc', left : '-11.3pc'}}>
             <Avatar sx={{position : 'relative', left : '-0.2pc', background : '#28282B'}}>
              <AccountBalanceWalletIcon/>
             </Avatar> Manage subcriptions
            </Button>
            <Button variant="shadow" sx={{background : 'transparent', position : 'relative', top : '11pc', left : '-27.8pc'}}>
             <Avatar sx={{position : 'relative', left : '-0.2pc', background : '#28282B'}}>
                <PaymentIcon/>
              </Avatar> Payment details
            </Button>
            <Button variant="shadow" sx={{background : 'transparent', position : 'relative', top : '15pc', left : '-41.7pc'}}>
            <Avatar sx={{position : 'relative', left : '-0.2pc', background : '#28282B'}}>
              <AccountBalanceWalletIcon/>
            </Avatar> Manage student sponsorships
            </Button>
          </Stack>
        </Box>
        <Box sx={{width : '100%', position : 'relative', top : '2pc'}}>
          <Stack direction="row" spacing={2}>
            <Box sx={{position : 'relative', left : '30pc', width : '30pc'}}>
            <FormControl>
              <InputLabel sx={{color : 'white', position : 'relative', top : '0pc', left : '-18pc'}}> First Name </InputLabel>
              <TextField id="firstname" type='text' variant="filled" sx={{input : {color : 'white'}, width : '40pc', background : '#36454F', position : 'relative', top : '2pc'}} />
              
              <InputLabel sx={{color : 'white', position : 'relative', top : '3pc', left : '-18pc'}}> Last Name </InputLabel>
              <TextField id="lastname" type='text'  variant="filled" sx={{input : {color : 'white'}, width : '40pc',  background : '#36454F', color : 'white', position : 'relative', top : '5pc'}} />
             
              <InputLabel sx={{color : '#36454F', position : 'relative', top : '6pc', left : '-19pc'}}> Email </InputLabel>
              <TextField id="email" type='text'  variant="filled" sx={{input : {color : '#708090'}, width : '40pc', background : '#1B1212', color : 'white', border : '1px', position : 'relative', top : '8pc'}} />
             
              <InputLabel sx={{color : '#36454F', position : 'relative', top : '9pc', left : '-18pc'}}> Password </InputLabel>
              <TextField id="password" type='password' variant="filled" sx={{ input : {color : '#1B1212'},  width : '20pc',  background : '#1B1212', color : 'white', position : 'relative', top : '11pc', left : '0.2pc'}} />
              <VisibilityIcon sx={{position : 'relative', top : '8.69pc', left : '17pc', color : '#708090'}}></VisibilityIcon>
             
              <Button variant='outline' sx={{position : 'relative', top : '6.1pc',height : '3.1pc', left : '22pc', color : 'yellow', background : 'black', width : '12pc', border : '1px'}}> Change password </Button>
              <Button variant='outline' sx={{position : 'relative', top : '10pc', left : '1pc', color : 'black', background : 'yellow', width : '12pc'}} > Save changes </Button>
            
            </FormControl>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  )
}

export default App
