import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';


import { useState } from "react";

import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ReceiptIcon from '@mui/icons-material/Receipt';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import { Avatar, Box, FormControl, InputLabel, Stack, TextField,Button, DialogContent } from '@mui/material';


function UserIcon(){

    return (
      <PersonIcon></PersonIcon>
    );

}


function WalletIcon(){

  return(

    <AccountBalanceWalletIcon></AccountBalanceWalletIcon>
  );
}


function Payment(){

  return (
    
    <ReceiptIcon></ReceiptIcon>
  );
}

function Stackcontainer(){
    return(
      <Stack direction="row" spacing={4}>
        <FormControl>
        <InputLabel sx={{color : 'white', position : 'relative', top : '0pc', width : '20pc', left : '-10pc'}}> First Name </InputLabel>
        <TextField id="firstname" type='text' variant="filled" sx={{input : {color : 'white', }, width : '40pc', background : '#36454F', position : 'relative', top : '2pc', left : '-1.8pc'}} />
        <InputLabel sx={{color : 'white', position : 'relative', top : '3pc', width : '20pc', left : '-160px'}}> Last Name </InputLabel>
        <TextField id="lastname" type='text'  variant="filled" sx={{input : {color : 'white'}, width : '40pc',  background : '#36454F', color : 'white', position : 'relative', top : '5pc', left : '-1.8pc'}} />
        <InputLabel sx={{color : '#36454F', position : 'relative', top : '6pc', width : '20pc', left : '-180px'}}> Email </InputLabel>
        <TextField id="email" type='text'  variant="filled" sx={{input : {color : '#708090'}, width : '40pc', background : '#1B1212', color : 'white', border : '1px', position : 'relative', top : '8pc', left : '-1.8pc'}} />
        <InputLabel sx={{color : '#36454F', position : 'relative', top : '9pc', width : '20pc', left : '-165px'}}> Password </InputLabel>
        <TextField id="password" type='password' variant="filled" sx={{ input : {color : '#1B1212'},  width : '20pc',  background : '#1B1212', color : 'white', position : 'relative', top : '11pc',left : '-1.8pc'}} />
        <VisibilityIcon sx={{position : 'relative', top : '8.69pc', left : '15pc', color : '#708090'}}></VisibilityIcon>
        <Button variant='outlined' sx={{position : 'relative', top : '6.1pc',height : '3.1pc', left : '20pc', color : 'yellow', background : 'black', width : '12pc', border : 2}}> Change password </Button>
        <Button variant='outlined' sx={{position : 'relative', top : '8pc', color : 'black', background : 'yellow', width : '12pc', left : '-1.8pc'}} > Save changes </Button>
        </FormControl>
      </Stack>
    );
}

function Boxcontainer(){

    return (
      <Box sx={{width : '100%', position : 'relative', top : '2pc'}}>
        <Stackcontainer></Stackcontainer>
      </Box>
    );
}


function SubcriptionCancel(){

    return(
      <Box sx={{position : 'absolute', top : '2pc'}}>
                 <Stack direction="row" spacing={2} sx={{width : 200, position : 'absolute' , left : '5pc', top : '3pc'}}>
                    <h4>Are you sure you want to cancel your subcription ? </h4>
                 </Stack>
                  <Stack direction="row" spacing={2} sx={{position : 'absolute', top : '7.5pc', width : 400, fontSize : 'small'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure numquam ipsam deserunt repellat incidunt blanditiis! Recusandae modi deleniti numquam corporis? Quod quam neque id, tenetur alias mollitia esse eos. Dolorum.
                  </Stack>
                  <DialogActions>
                    <Button autoFocus variant='outlined' sx={{position : 'relative', top : '13pc', left : '-0.3pc'}}> Cancel Subcription </Button>
                    <Button autoFocus variant='outlined' sx={{position : 'relative', top : '13pc', left : '-0.3pc', width : '12pc', background : 'yellow', borderColor : 'yellow', color : 'black'}}> Continue </Button>
                  </DialogActions>
      </Box>
    );
}


function SubContract(){

  const [open, setOpen] = useState(false);

  const onhandleOpen = () => {
    setOpen(true);
  };

  const onhandleClose = () => {

    setOpen(false);
  }

    return(
    <Stack direction="row" spacing={2}>
      <Box>
        <Box variant="outlined" sx={{border : 2, position : 'relative', height : '6pc', width : '40pc', color : 'yellow', borderRadius : 2, background : 'black'}}>
          <Box sx={{color : 'white', position : 'absolute', left : '2.7pc', top : '1pc'}}> Monthly </Box>
          <Box sx={{position : 'absolute', left : '35pc', top : '1pc', color : '#008000'}}> <CheckCircleOutlineRoundedIcon/></Box>  
          <Box sx={{position : 'absolute', top : '3pc', left : '1.5pc', color : 'white', fontSize : 'x-large'}}> <RadioButtonCheckedIcon sx={{color : 'red', fontSize : 'small'}}/> $ 8.99</Box>
        </Box>
        <Box variant="outlined" sx={{border : 2, position : 'relative', height : '9pc', width : '40pc', color : 'silver', borderRadius : 2, top : '2pc', left : '0pc', background : 'black'}}>
          <Box sx={{color : 'white', position : 'absolute', left : '2.7pc', top : '1pc'}}> Yearly </Box> 
          <Box sx={{position : 'absolute', top : '3pc', left : '1.5pc', color : 'white', fontSize : 'x-large'}}> $ 99.99</Box>
          <Box sx={{position : 'absolute', top : '3.3pc', left : '7.2pc', fontSize : 'small', color : 'white'}}>/ Amum </Box>
          <Button variant="outlined" sx={{width : 467, border : 1, position : 'relative', top : 90}}> Select plan </Button>
        </Box>
        <Button variant="outlined" onClick={onhandleOpen} sx={{background : 'black', color : 'yellow', position : 'relative', top : '4pc', left : '0pc', width : '20pc', border : 1}}> Cancel Subcription </Button>
        <Dialog onClose={onhandleClose} open={open} aria-labelledby="customizedialogue">
          <Box sx={{background : 'black'}}>
          <IconButton aria-label="close"onClick={onhandleClose} sx={{color : 'white', background : 'black', borderRadius : 0}}> <CloseIcon sx={{position : 'relative', left : '26pc', fontSize : 'small'}}/> </IconButton>
          </Box>
          <DialogContent sx={{background : 'black', color : 'white', width : '25pc', height : '15pc'}}>
              <SubcriptionCancel></SubcriptionCancel>
          </DialogContent>
        </Dialog>
        <Button variant="outlined" sx={{background : 'yellow', color : 'black', position : 'relative', top : '4pc', left : '0.5pc', width : '20pc', border : 1, borderColor : 'yellow'}}> Save </Button>
      </Box> 
    </Stack>);
}

function Subcription(){
    
  return(
    <Box sx={{width : '100%', position : 'relative', top : '2pc'}}>
      <SubContract></SubContract>
    </Box>
  );
}



export default function(){
    
    const [tabIndex, setTabIndex] = useState("one");
    const handleTabIndex = (tabIndex,newValue) => {

      setTabIndex(newValue);
    };
    
    return(
        <TabContext value={tabIndex}>
                <TabList onChange={handleTabIndex} orientation="vertical" scrollButtons="auto" aria-label='scrollable auto tabs' TabIndicatorProps={{style : {background : 'yellow', left : 30, height : 58, fontSize : 'small'}}}  sx={{position : 'relative', top : '-2pc', height : 800,width : 500,  }}>
                  <Tab value="one" label="Account details" sx={{color : 'white', position : 'relative', left : '-3.2pc', top : '5pc', fontSize : 'small', textTransform : 'none', '&.Mui-selected': {outline: 'none'}}} icon={
                  <Avatar sx={{background : '#343434', color : 'yellow'}}><UserIcon sx={{color : 'white', position : 'relative', left : '0pc', fontSize : 'small'}}></UserIcon></Avatar>} iconPosition='start'></Tab>
                  <Tab value="two" label="Manage subcriptions" sx={{color : 'white', position : 'relative', left : '-2pc', top : '5pc', fontSize : 'small',  textTransform : 'none', '&.Mui-selected': {outline: 'none'}}} icon={<Avatar sx={{background : '#343434'}}>
                    <WalletIcon sx={{color : 'white', position : 'relative', left : '0pc',  fontSize : 'small'}}></WalletIcon></Avatar>} iconPosition='start'></Tab>
                  <Tab value="three" label="Payment Details" sx={{color : 'white', position : 'relative', left : '-3pc', top : '5pc', fontSize : 'small',  textTransform : 'none'}} icon={<Avatar sx={{background : '#343434'}}>
                    <Payment sx={{color : 'white', position : 'relative', left : '0pc',  fontSize : 'small', '&.Mui-selected': {outline: 'none'}}}></Payment>
                  </Avatar>} iconPosition='start'></Tab>
                  <Tab value="four" label="Manage student sponsorships"  sx={{color : 'white', position : 'relative', left : '-0.2pc', top : '5pc', fontSize : 'small', textTransform : 'none', '&.Mui-selected': {outline: 'none'}}} icon={
                  <Avatar sx={{background : '#343434'}}><WalletIcon sx={{color : 'white', position : 'relative', left : '0.3pc',  fontSize : 'small'}}></WalletIcon></Avatar>} 
                  iconPosition='start'></Tab> 
                </TabList>
                <TabPanel value="one">
                  <Boxcontainer></Boxcontainer>
                </TabPanel>
                <TabPanel value="two">
                  <Subcription></Subcription>
                </TabPanel>
                <TabPanel value="three"></TabPanel>
                <TabPanel value="four"></TabPanel>
        </TabContext>
    );

}