import { useState } from "react";

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
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import RadioButtonCheckedRoundedIcon from '@mui/icons-material/RadioButtonCheckedRounded';



function App() {
  
  const [value, setValue] = useState("1");
  const handleChange = (value, newValue) =>{
      setValue(newValue);
  };


  const [tabIndex, setTabIndex] = useState("one");
  const handleTabIndex = (tabIndex,newValue) => {

      setTabIndex(newValue);
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
                <Tab value="1"  label="Courses" onClick={handleClick} aria-describedby={id} sx={{border : 'none', color : 'white'}}></Tab> <ArrowDropDownIcon sx={{position : 'relative', top : '1.2pc', left : '-1.00pc' , fontSize : 'small'}}/>
                <Tab value="2"  label="Live classes" sx={{border : 'none', color : 'white'}}></Tab>
                <Tab value="3"  label="Settings" sx={{border : 'none', color : 'white'}}></Tab>
                <Tab value="4"  label="Account" sx={{border : 'none', color : 'white'}}></Tab> <ArrowDropDownIcon sx={{position : 'relative', top : '1.2pc', left : '-1.00pc' , fontSize : 'small'}}/>
              </TabList>
              <TabPanel value="1">
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
        <Typography variant="h5" component="div" sx={{position : 'relative', top : '3pc' , left : '-42pc', fontSize : '36px'}}> <h4>My account</h4> </Typography>
        <Box sx={{width : '300pc', position : 'relative', top : '2pc', left : '0pc', p : 3}}>
          <Stack direction="row" spacing={8}>
            <TabContext value={tabIndex}>
                <TabList onChange={handleTabIndex} orientation="vertical" scrollButtons="auto" aria-label='scrollable auto tabs' TabIndicatorProps={{style : {backgroundColor : 'yellow', left : 0}}}  sx={{position : 'relative', top : '-2pc', height : 800, left : '-2pc' }}>
                  <Tab value="one" icon={<PersonIcon sx={{color : 'white', position : 'relative', left : '-1pc', fontSize : 'medium', background : '#28282B', borderRadius : 3}}/>} label="Account details" iconPosition='start' sx={{color : 'white', position : 'relative', left : '1.2pc', borderLeft : 0, borderColor : 'divider', borderTop : 0, top : '-1.5pc', borderBottom : 0,borderRight : 0, fontSize : 'medium', textTransform : 'none'}}></Tab>
                  <Tab value="two" icon={<AccountBalanceWalletIcon sx={{color : 'white', position : 'relative', left : '0pc',  fontSize : 'medium', background : '#28282B', borderRadius : 3}}/>} label="Manage subcriptions" iconPosition='start' sx={{color : 'white', position : 'relative', left : '1.5pc',  borderLeft : 0, borderColor : 'divider', borderTop : 0, top : '-1.2pc', borderBottom : 0,borderRight : 0, fontSize : 'medium',  textTransform : 'none'}}></Tab>
                  <Tab value="three" icon={<PaymentIcon sx={{color : 'white', position : 'relative', left : '-0.9pc',  fontSize : 'medium', background : '#28282B', borderRadius : 3}}/>} label="Payment Details" iconPosition='start' sx={{color : 'white', position : 'relative', left : '1.5pc',  borderLeft : 0, borderColor : 'divider', borderTop : 0, top : '-1pc', borderBottom : 0, fontSize : 'medium',borderRight : 0,  textTransform : 'none'}}></Tab>
                  <Tab value="four" icon={<AccountBalanceWalletIcon sx={{color : 'white', position : 'relative', left : '0.3pc',  fontSize : 'medium', background : '#28282B', borderRadius : 3}}/>} label="Manage student sponsorships" iconPosition='start' sx={{color : 'white', position : 'relative', left : '3.5pc',  borderLeft : 0, borderColor : 'divider', borderTop : 0, top : '-1pc', borderBottom : 0,borderRight : 0, fontSize : 'medium', width: '370px', textTransform : 'none'}}></Tab>
                </TabList>
                <TabPanel value={"one"}>
                  <Box sx={{width : '100%', position : 'relative', top : '2pc'}}>
                    <Stack direction="row" spacing={2}>
                      <Box sx={{position : 'relative', left : '5pc', width : '30pc', height : '200'}}>
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
             
                          <Button variant='outlined' sx={{position : 'relative', top : '6.1pc',height : '3.1pc', left : '22pc', color : 'yellow', background : 'black', width : '12pc', border : '1px'}}> Change password </Button>
                          <Button variant='outlined' sx={{position : 'relative', top : '8pc', left : '0.5pc', color : 'black', background : 'yellow', width : '12pc'}} > Save changes </Button>        
                        </FormControl>
                      </Box>
                    </Stack>
                </Box>
                </TabPanel>
                <TabPanel value={"two"}>
                <Box sx={{width : '100%', position : 'relative', top : '2pc'}}>
                    <Stack direction="row" spacing={2}>
                      <Box sx={{position : 'relative', left : '5pc', top : '-10pc'}}>
                        <Box variant="outlined" sx={{border : 2, position : 'relative', height : '6pc', width : '40pc', color : 'yellow', borderRadius : 2}}>
                          <Box sx={{color : 'white', position : 'absolute', left : '2.7pc', top : '1pc'}}> Monthly </Box>
                          <Box sx={{position : 'absolute', left : '35pc', top : '1pc', color : 'darkgreen'}}> <CheckCircleOutlineRoundedIcon/></Box>  
                          <Box sx={{position : 'absolute', top : '3pc', left : '1.5pc', color : 'white', fontSize : 'x-large'}}> <RadioButtonCheckedRoundedIcon sx={{color : 'red', fontSize : 'small'}}/> $ 8.99</Box>
                          <Box sx={{position : 'absolute', top : '3.3pc', left : '7.2pc', fontSize : 'small', color : 'white'}}>/ Month</Box>
                        </Box>
                        <Box variant="outlined" sx={{border : 2, position : 'relative', height : '9pc', width : '40pc', color : 'silver', borderRadius : 2, top : '2pc', left : '0pc'}}>
                          <Box sx={{color : 'white', position : 'absolute', left : '2.7pc', top : '1pc'}}> Yearly </Box>  
                          <Box sx={{position : 'absolute', top : '3pc', left : '1.5pc', color : 'white', fontSize : 'x-large'}}> $ 99.99</Box>
                          <Box sx={{position : 'absolute', top : '3.3pc', left : '7.2pc', fontSize : 'small', color : 'white'}}>/ Amum </Box>
                          <Button variant="outlined" color='warning' sx={{background : 'black', color : 'yellow', position : 'relative', top : '6pc', width : '30pc', border : 1}}> Select plan </Button>
                        </Box>
                            <Button variant="outlined" color='warning' sx={{background : 'black', color : 'yellow', position : 'relative', top : '4pc', left : '0pc', width : '20pc', border : 1}}> Cancel Subcription </Button>
                            <Button variant="outlined" color='warning' sx={{background : 'yellow', color : 'black', position : 'relative', top : '4pc', left : '0.5pc', width : '20pc', border : 1}}> Save </Button>
                      </Box>
                    </Stack>
                  </Box>
                </TabPanel>
                <TabPanel value={"three"}>
                </TabPanel>
                <TabPanel value={"four"}>
                </TabPanel>
            </TabContext>
          </Stack>
        </Box>
      </Box>
    </>
  )
}

export default App
