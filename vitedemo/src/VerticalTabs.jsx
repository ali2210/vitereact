import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { Avatar } from '@mui/material';


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
                <TabPanel value="one"></TabPanel>
                <TabPanel value="two"></TabPanel>
                <TabPanel value="three"></TabPanel>
                <TabPanel value="four"></TabPanel>
        </TabContext>
    );

}