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
import AppleIcon from '@mui/icons-material/Apple';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { Avatar, Box, FormControl, InputLabel, Stack, TextField,Button, DialogContent, List, ListItem, Divider, Switch, Hidden } from '@mui/material';


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
    

  const handleUserCredentials =(event) => {
    event.preventDefault();

    const fname = event.target.elements.firstname.value;
    const lname = event.target.elements.lastname.value;
    const email = (event.target.elements.email.value);
    const password = event.target.elements.password.value;

    const emailRegex = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$');

    if(!emailRegex.test(email)){

          alert('you provide invalid email address');
          return;
    }

    // const passRegex = new RegExp('^([@#](?=[^a-z]{4,15}$)(?=[[:alnum:]]{4,15}$)(?=.*[A-Z]{1,}.*$).+)$');

    // if (!passRegex.test(password)){

    //     alert(' your password is not strong enough' );
    //     return;
    // }

    console.log("User credentials : ", fname, lname, email, password);

  };
  
  return(
      <Stack direction="row" spacing={4}>
        <form onSubmit={handleUserCredentials}>
        <InputLabel sx={{color : 'white', position : 'relative', top : '0pc', width : '20pc', left : '-10pc'}}> First Name </InputLabel>
        <TextField id="firstname" type='text' variant="filled"  sx={{input : {color : 'white', }, width : '40pc', background : '#36454F', position : 'relative', top : '1pc', left : '-5pc'}} />
        <InputLabel sx={{color : 'white', position : 'relative', top : '3pc', width : '20pc', left : '-160px'}}> Last Name </InputLabel>
        <TextField id="lastname" type='text'  variant="filled" sx={{input : {color : 'white'}, width : '40pc',  background : '#36454F', color : 'white', position : 'relative', top : '4pc', left : '-5pc'}} />
        <InputLabel sx={{color : '#36454F', position : 'relative', top : '6pc', width : '20pc', left : '-180px'}}> Email </InputLabel>
        <TextField id="email" type='text'  variant="filled" sx={{input : {color : '#708090'}, width : '40pc', background : '#1B1212', color : 'white', border : '1px', position : 'relative', top : '6.5pc', left : '-5pc'}} />
        <InputLabel sx={{color : '#36454F', position : 'relative', top : '9pc', width : '20pc', left : '-165px'}}> Password </InputLabel>
        <TextField id="password" type='password' variant="filled" sx={{ input : {color : '#1B1212'},  width : '20pc',  background : '#1B1212', color : 'white', position : 'relative', top : '11pc',left : '-2pc'}} />
        <VisibilityIcon sx={{position : 'relative', top : '11.5pc', left : '-5pc', color : '#708090'}}></VisibilityIcon>
        <Button variant='outlined' sx={{position : 'relative', top : '11pc',height : '3.5pc', left : '-1.5pc', color : 'yellow', background : 'black', width : '12pc', border : 2}}> Change password </Button>
        <Button variant='outlined' type="submit" sx={{position : 'relative', top : '16.3pc', color : 'black', background : 'yellow', width : '12pc', left : '-35.2pc'}} > Save changes </Button>
        </form>
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

  const handleSubcriptionCancel = (event) => {

      event.preventDefault();
      alert('subcription cancel');
  };


  const handleNoAffect = (event) => {

    event.preventDefault();
  };


    return(
      <Box sx={{position : 'absolute', top : '2pc'}}>
                 <Stack direction="row" spacing={2} sx={{width : 200, position : 'absolute' , left : '5pc', top : '3pc'}}>
                    <h4>Are you sure you want to cancel your subcription ? </h4>
                 </Stack>
                  <Stack direction="row" spacing={2} sx={{position : 'absolute', top : '7.5pc', width : 400, fontSize : 'small'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure numquam ipsam deserunt repellat incidunt blanditiis! Recusandae modi deleniti numquam corporis? Quod quam neque id, tenetur alias mollitia esse eos. Dolorum.
                  </Stack>
                  <DialogActions>
                    <form onReset={handleSubcriptionCancel}>
                      <Button autoFocus variant='outlined' type="reset" sx={{position : 'relative', top : '13pc', left : '-0.3pc'}}> Cancel Subcription </Button>
                    </form>
                    <form onSubmit={handleNoAffect}>
                    <Button autoFocus variant='outlined' sx={{position : 'relative', top : '13pc', left : '-0.3pc', width : '12pc', background : 'yellow', borderColor : 'yellow', color : 'black'}}> Continue </Button>
                    </form>
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
  };

  const [plan,setPlan] = useState('');

  const handleplan = () => {
    
    event.preventDefault();
    setPlan('Anually 99.99/ anum');
  };

  const handleSubcription =(event) =>{

    event.preventDefault();

    if (plan.length == 0){

      alert(' plan should be selected');
      return;
    }

    console.log("My plan :", plan);

  };

  

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
          <Button variant="outlined" type="submit" onClick={handleplan} sx={{width : 467, border : 1, position : 'relative', top : 90}}> Select plan </Button>
        </Box>
        <Button variant="outlined" onClick={onhandleOpen} sx={{background : 'black', color : 'yellow', position : 'relative', top : '4pc', left : '-10pc', width : '20pc', border : 1}}> Cancel Subcription </Button>
        <Dialog onClose={onhandleClose} open={open} aria-labelledby="customizedialogue">
          <Box sx={{background : 'black'}}>
          <IconButton aria-label="close"onClick={onhandleClose} sx={{color : 'white', background : 'black', borderRadius : 0}}> <CloseIcon sx={{position : 'relative', left : '26pc', fontSize : 'small'}}/> </IconButton>
          </Box>
          <DialogContent sx={{background : 'black', color : 'white', width : '25pc', height : '15pc'}}>
              <SubcriptionCancel></SubcriptionCancel>
          </DialogContent>
        </Dialog>
        <form onSubmit={handleSubcription}>
        <Button variant="outlined" type="submit" sx={{background : 'yellow', color : 'black', position : 'relative', top : '1.8pc', left : '11pc', width : '20pc', border : 1, borderColor : 'yellow'}}> Save </Button>
        </form>
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

function RemoveDialogue(){

  return(
    <Box>
      <Box sx={{color : 'white', fontSize : 'x-large', position : 'relative', left : '1pc', top : '-2pc'}}>
          <h4> Remove Payment Method ? </h4> 
      </Box>
      <Stack direction="row" spacing={2} sx={{fontSize : 'small', position : 'relative', top : '-2pc', left : '1pc'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit incidunt maiores vel tempore nisi adipisci corporis repudiandae deleniti. Ipsam aliquid quasi 
      </Stack>
    </Box>
    
  );
}



function VisaOption(){

  const [open, setOpen] = useState(false);

  const onhandleOpen = () => {
    setOpen(true);
  };

  const onhandleClose = () => {

    setOpen(false);
  };

  const handleRemove = (event) =>{
    event.preventDefault();
  };

  const handleRemoveMethod =(event) =>{

      event.preventDefault();
      alert('Remove method selected');
  };

    return (
      <Box sx={{color : 'blue', position : 'relative', left : '0pc'}}>
              <h4>VISA</h4>
              <Box sx={{color : 'black', position : 'relative', top : '-3pc', left : '5pc', fontSize : 'small'}}> **** **** **** </Box>
              <Box sx={{color : 'black', position : 'relative',  top : '-4.2pc', left : '9.2pc', fontSize : 'medium' }}> 5967</Box>
              <Box sx={{color : 'black', position : 'relative', top : '-4.5pc', left : '3.5pc', fontSize : 'x-small'}}> Ali Nawaz </Box>
              <Box sx={{color : 'black', position : 'relative', top : '-6.5pc', left : '15pc', border : 1, borderRadius : 2, fontSize : 'small'}}> default </Box>
              <Button variant="outlined" onClick={onhandleOpen} sx={{color : 'red', background : 'white', position : 'relative', top : '-8.3pc', left : '33pc', border : 1 , borderColor : 'white', textDecoration : 'underline'}}>Remove</Button>
              <Dialog onClose={onhandleClose} open={open} aria-labelledby="customizedialogue">
              <Box sx={{background : 'black'}}>
                   <IconButton aria-label="close"onClick={onhandleClose} sx={{color : 'white', background : 'black', borderRadius : 0}}> <CloseIcon sx={{position : 'relative', left : '23pc', fontSize : 'small'}}/> </IconButton>
                  </Box>
                  <DialogContent sx={{background : 'black', color : 'white', width : '22pc'}}>
                    <RemoveDialogue></RemoveDialogue>      
                    <DialogActions>
                          <form onSubmit={handleRemove}>                   
                            <Button autoFocus variant='outlined' type="submit" sx={{position : 'relative', top : '-0.5pc', left : '0pc', width : '10pc'}}> Cancel  </Button>
                          </form>
                          <form onSubmit={handleRemoveMethod}>
                            <Button autoFocus variant='outlined' type="submit" sx={{position : 'relative', top : '-0.5pc', left : '0.3pc', width : '12pc', background : 'yellow', borderColor : 'yellow', color : 'black'}}> Remove Method </Button>
                          </form>
                    </DialogActions>                    
                  </DialogContent>
              </Dialog>        
            </Box>
    );
}

function ApplePayOption(){

  const [open, setOpen] = useState(false);

  const onhandleOpen = () => {
    setOpen(true);
  };

  const onhandleClose = () => {

    setOpen(false);
  };

  const handleRemove = (event) =>{
    event.preventDefault();
  };

  const handleRemoveMethod =(event) =>{

      event.preventDefault();
      alert('Remove method selected');
  };

  return(
            <Box sx={{color : 'black', position : 'relative', left : '0pc'}}>
              <AppleIcon sx={{position : 'relative', top : '1.5pc', left : '-5pc '}}></AppleIcon>
              <Box sx={{position : 'relative', top : '-1.5pc', left : '-3.5pc'}}><h4> Pay </h4></Box>
              <Box sx={{color : 'black', position : 'relative', top : '-5pc', left : '1pc', fontSize : 'small'}}> **** **** **** </Box>
              <Box sx={{color : 'black', position : 'relative',  top : '-6.2pc', left : '5.5pc', fontSize : 'medium' }}> 5967</Box>
              <Box sx={{color : 'black', position : 'relative', top : '-6.5pc', left : '0.5pc', fontSize : 'x-small'}}> Button MI 48519 </Box>
              <Button variant="outlined" sx={{color : 'green', background : 'white', position : 'relative', top : '-8.3pc', left : '22pc', border : 1 , borderColor : 'white', textDecoration : 'underline'}}> MAKE DEFAULT </Button>
              <Button variant="outlined" onClick={onhandleOpen} sx={{color : 'red', background : 'white', position : 'relative', top : '-8.3pc', left : '24pc', border : 1 , borderColor : 'white', textDecoration : 'underline'}}>Remove</Button>
              <Dialog onClose={onhandleClose} open={open} aria-labelledby="customizedialogue">
                  <Box sx={{background : 'black'}}>
                   <IconButton aria-label="close"onClick={onhandleClose} sx={{color : 'white', background : 'black', borderRadius : 0}}> <CloseIcon sx={{position : 'relative', left : '23pc', fontSize : 'small'}}/> </IconButton>
                  </Box>
                  <DialogContent sx={{background : 'black', color : 'white', width : '22pc'}}>
                  <RemoveDialogue></RemoveDialogue>    
                    <DialogActions>

                          <form onSubmit={handleRemove}>
                              <Button autoFocus variant='outlined' type="submit" sx={{position : 'relative', top : '-0.5pc', left : '0pc', width : '10pc'}}> Cancel  </Button>
                          </form>
                          <form onSubmit={handleRemoveMethod}>
                              <Button autoFocus variant='outlined' type="submit" sx={{position : 'relative', top : '-0.5pc', left : '0.3pc', width : '12pc', background : 'yellow', borderColor : 'yellow', color : 'black'}}> Remove Method </Button>
                          </form>
                    </DialogActions>                    
                  </DialogContent>
              </Dialog>
            </Box>
  );
}

function Applepay(){

  const handleAppleSetup = (event) =>{
    event.preventDefault();
    alert('Apple Pay already connected');
  };

    return(
      <form onSubmit={handleAppleSetup}>
          <Button variant='outline' type="submit" sx={{background : 'black', color : 'yellow', position : 'relative', top : '-2pc', left : '6pc', border : 1, borderColor : 'yellow'}}> Setup</Button>
      </form>
    );
}

function CreditDetails(){

  const handleCreditCard = (event) => {

      event.preventDefault();

      const name = event.target.elements.nameoncard.value;
      const cardnum = event.target.elements.cardnum.value;
      const expiry = event.target.elements.cardexp.value;
      const ccv = event.target.elements.cardccv.value;
      const fixed = event.target.elements.code.value;
      // const defaultmethod = event.elements.defaultmethod.value;
      // const cardoption = event.elements.card.value;

      console.log("Credit details = ", name, cardnum, expiry, ccv, fixed);
  };

    return(
      <Box sx={{position : 'relative', top : '-5pc'}}>
              <form onSubmit={handleCreditCard}>
                <InputLabel sx={{color : 'white', position : 'relative', top : '2pc', left : '-0.5pc'}}> Name on card </InputLabel>
                <TextField id="nameoncard" type='text' variant="filled" sx={{input : {color : 'white', position : 'relative', top : '-0pc', height : '0pc'}, width : '22pc', height : '2pc', background : '#36454F', position : 'relative', left :'-0.5pc',  top : '2.5pc'}} />
                <InputLabel sx={{color : 'white', position : 'relative', top : '3pc', left : '-0.5pc'}}> Card Number </InputLabel>
                <TextField id="cardnum" type='text' variant="filled"  sx={{input : {color : 'white', position: 'relative', top : '-0pc', height : '0pc' }, width : '22pc', height : '2pc',background : '#36454F', position : 'relative', top : '3.5pc', left : '-0.5pc'}} />
                <InputLabel sx={{color : 'white', position : 'relative', top : '4pc', left : '-0.5pc'}}> Expiry </InputLabel>
                <TextField id="cardexp" type='text' variant="filled"  sx={{input : {color : 'white', position: 'relative', top : '-0pc', height : '0pc' }, width : '7pc', height : '2pc',background : '#36454F', position : 'relative', top : '4.3pc',left : '-0.5pc'}} />
                <InputLabel sx={{color : 'white', position : 'relative', top : '0.5pc', left : '6.8pc'}}> CCV </InputLabel>
                <TextField id="cardccv" type='text' variant="filled"  sx={{input : {color : 'white', position: 'relative', top : '-0pc', height : '0pc' }, width : '6pc', height : '2pc',background : '#36454F', position : 'relative', top : '0.8pc', left : '7pc'}} />
                <InputLabel sx={{color : 'white', position : 'relative', top : '-3pc', left : '13.7pc'}}> Fixed Code </InputLabel>
                <TextField id="code" type='text' variant="filled"  sx={{input : {color : 'white', position: 'relative', top : '-0pc', height : '0pc' }, width : '7.7pc', height : '2pc',background : '#36454F', position : 'relative', top : '-2.6pc', left : '13.5pc'}} />
                <Box sx={{color : 'white', position : 'relative', top : '-0.5pc', left : '-0.5pc'}}> Make this my default method </Box>
                <Box sx={{position : 'relative', top : '-2.5pc', left : '18.5pc'}}><Switch id='defaultmethod' defaultChecked></Switch></Box>
                <Box sx={{color : 'white', position : 'relative', top : '-2pc', left : '-0.5pc'}}> Save this card for next time </Box>
                <Box sx={{position : 'relative', top : '-3.9pc', left : '18.5pc'}}><Switch id="card"></Switch></Box>
                <Button variant='outlined' type="submit" sx={{width : '11.5pc', position : 'relative', background : 'yellow', border : 1, borderColor : 'yellow', color : 'black', top : '-2.3pc', left : '11.5pc' }}> Add Card </Button>
              </form>
              <form>
                  <Button variant='outlined' type="submit" sx={{width : '11.5pc', position : 'relative', left : '-0.5pc', top : '-4.5pc'}}>Cancel</Button>
              </form> 
            </Box>
    );
}

function CreditPay(){

  const [open, setOpen] = useState(false);

  const onhandleOpen = () => {
    setOpen(true);
  };

  const onhandleClose = () => {

    setOpen(false);
  };

    return(
      <Box>
      <Button variant='outline' onClick={onhandleOpen} sx={{background : 'black', color : 'yellow', position : 'relative', top : '0pc', left : '8pc', border : 1, borderColor : 'yellow'}}> Setup</Button>
      <Dialog onClose={onhandleClose} open={open} aria-labelledby="customizedialogue">
          <Box sx={{background : 'black'}}>
            <IconButton aria-label="close"onClick={onhandleClose} sx={{color : 'white', background : 'black', borderRadius : 0}}> <CloseIcon sx={{position : 'relative', left : '22pc', fontSize : 'small', top : '0pc'}}/> </IconButton>
            </Box>
            <DialogContent sx={{background : 'black', color : 'white', position : 'relative', left : '0pc', overflow : 'hidden'}}>
              <Box sx={{color : 'white', fontSize : 'x-large', position : 'relative', left : '1pc', top : '-3pc'}}>
                        <h4> Add credit or debit card  </h4> 
              </Box>
              <Stack direction="row" spacing={2} sx={{fontSize : 'small', position : 'relative', top : '-4.5pc', left : '3.2pc', width : '14pc', textAlign : 'justify'}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum    
              </Stack>
              <CreditDetails></CreditDetails>
            </DialogContent>
      </Dialog>
      </Box>
    );
}


function PaymentComponent(){

  const [open, setOpen] = useState(false);

  const onhandleOpen = () => {
    setOpen(true);
  };

  const onhandleClose = () => {

    setOpen(false);
  };

    return(
      <Box>
        <Box sx={{position : 'relative', top : '5pc', left : '-21pc'}}> Payment Methods </Box>
        <Button variant='outline' onClick={onhandleOpen} sx={{background : 'yellow', color : 'black', position : 'relative' , top : '3pc', left : '11pc'}}> Add Method </Button>
         <Dialog onClose={onhandleClose} open={open} aria-labelledby="customizedialogue">
                  <Box sx={{background : 'black'}}>
                   <IconButton aria-label="close"onClick={onhandleClose} sx={{color : 'white', background : 'black', borderRadius : 0}}> <CloseIcon sx={{position : 'relative', left : '22pc', fontSize : 'medium'}}/> </IconButton>
                  </Box>
                  <DialogContent sx={{background : 'black', color : 'white', width : '22pc', height : '22pc'}}>
                    <Box sx={{color : 'white', fontSize : 'x-large', position : 'relative', left : '1.5pc', top : '-1pc'}}>
                        <h4> Add a Payment Method </h4> 
                    </Box>
                    <Stack direction="row" spacing={2} sx={{fontSize : 'x-small', position : 'relative', top : '-3pc', left : '1.5pc'}}>
                        Lorem ipsum dolor sit amet consectetur  
                    </Stack>
                    <Box sx={{color : 'white'}}>
                        <List>
                          <ListItem>
                            <AppleIcon sx={{position : 'relative', top : '-3pc', left : '-1.2pc'}}></AppleIcon>
                            <Box sx={{position : 'relative', top : '-2.9pc', left : '-1.2pc'}}><h4> Pay </h4></Box>
                            <Box sx={{position : 'absolute', top : '-0.6pc' , left : '4.5pc'}}> Apple Pay </Box>
                            <List sx={{fontSize : 'x-small', position : 'relative', top : '0pc', left : '0pc'}}>
                            <ListItem sx={{position : 'relative', top : '-0.3pc'}}>
                              . Lorem ipsum  
                            </ListItem>
                            <ListItem sx={{position : 'relative', top : '-0.7pc'}}>
                              . ipsum
                            </ListItem>
                          </List>
                            <Applepay></Applepay>                       
                          </ListItem>
                          <Divider component="li" sx={{p: 0, position : 'absolute', left : '0pc',width: '100%',maxWidth: 360,borderRadius: 2,border: '0.6px solid',borderColor: 'divider',backgroundColor: 'grey'}}></Divider>
                          <ListItem>
                            <CreditCardIcon sx={{position : 'relative', top : '0pc', left : '-1pc'}}></CreditCardIcon>
                            <Box sx={{position : 'absolute', top : '2pc' , left : '4pc'}}> Credit/Debit Card </Box>
                            <List sx={{fontSize : 'x-small', position : 'relative', top : '2pc', left : '2pc'}}>
                            <ListItem sx={{position : 'relative', top : '0.3pc'}}>
                              . Lorem ipsum  
                            </ListItem>
                            <ListItem sx={{position : 'relative', top : '-0.7pc'}}>
                              . ipsum
                            </ListItem>
                          </List>
                            <CreditPay></CreditPay>
                          </ListItem>
                        </List>
                    </Box>
                  </DialogContent>
          </Dialog>
        <Stack direction="row" spacing={4} sx={{position : 'relative', top : '4pc', fontSize : 'small', left : '-5.3pc'}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </Stack>
        <Box sx={{color : 'black' , borderRadius : 2, background : 'white', position : 'relative', top : '6pc', height : '5pc', width : '40pc', left : '-5pc'}}>
          <Stack direction="row" spacing={4}>
            <VisaOption></VisaOption>
          </Stack>
        </Box>
        <Box sx={{color : 'black' , borderRadius : 2, background : 'white', position : 'relative', top : '8pc', height : '5pc', width : '40pc', left : '-5pc'}}>
          <Stack direction="row">
            <ApplePayOption></ApplePayOption>
          </Stack>
        </Box>
      </Box>
    );
}


function Sponsorships(){

  const [forward, setforward] = useState(false);

  const handleForwardClick = ()=>{

        setforward(true);
  };

  const handleBackwardClick = () =>{

      setforward(false);
  };

  const handleCreditCard = (event) => {

    event.preventDefault();

    const name = event.target.elements.nameoncard.value;
    const cardnum = event.target.elements.cardnum.value;
    const expiry = event.target.elements.cardexp.value;
    const ccv = event.target.elements.cardccv.value;
    const fixed = event.target.elements.code.value;
      // const defaultmethod = event.elements.defaultmethod.value;
      // const cardoption = event.elements.card.value;

    console.log("Credit details = ", name, cardnum, expiry, ccv, fixed);
  };

  const handleCancel = (event) => {

      event.preventDefault();
      alert("Cancel clicked");
  };

    return(
      <Box visibility={forward == true? 'hidden' : 'visible'} boxShadow={3} sx={{position : 'relative', top : '6pc', border : 1, borderColor : 'white', width : '40pc', height : '5pc', borderRadius : 2}}>
        <Box sx={{position : 'relative', top : '1pc', left : '-15pc'}}>
            Scholarship name
        </Box>
        <Box sx={{position : 'relative', top : '1pc', left : '-18pc', fontSize : 'x-large'}}>$99</Box>
        <Button variant='outlined' onClick={handleForwardClick} sx={{position : 'relative', left : '16pc', top : '-2.5pc'}}>Edit</Button>
        <Button variant='outlined' sx={{background : 'yellow', color : 'black', position : 'relative', top : '0.5pc', left : '0pc', width : '40pc'}}>SPONSOR</Button>
        <Box visibility={forward == false ? 'hidden' : 'visible'}>
          <Button onClick={handleBackwardClick} sx={{color : 'white', position : 'relative', top : '-13pc', left : '-15.5pc'}}> <KeyboardBackspaceIcon sx={{position : 'relative', left : '4pc', width : '10pc'}}> </KeyboardBackspaceIcon> Manage student sponsorships </Button>
          <Box sx={{border : 1, width : '40pc', height : '5pc', position : 'relative', top : '-12pc', borderColor : 'yellow', borderRadius : 2}}>
            <Box sx={{position : 'relative', top : '0.5pc', left : '-16pc'}}>
              Annually
            </Box>
            <Box>
              <CheckCircleIcon sx={{color : 'green', position : 'relative', left : '18pc', top : '-1pc'}}></CheckCircleIcon>
            </Box>
            <Box sx={{fontSize : 'x-large', position : 'relative', top : '-1pc', left : '-16.5pc'}}>
              $99
            </Box>
            <Box sx={{fontSize : 'small', position : 'relative', top : '-3pc', left : '-14pc'}}>
              /Year
            </Box>
          </Box>
          <Stack direction="row" spacing={2} sx={{position : 'relative', top : '-11pc'}}>
            <form onSubmit={handleCreditCard}>
              <InputLabel sx={{color : 'white', position : 'relative', top : '-0pc', left : '-16.5pc'}}> Name on card </InputLabel>
              <TextField id="nameoncard" type='text' variant="outlined" sx={{input : {color : 'white', position : 'relative', top : '0.2pc', height : '0.5pc'}, width : '40pc', height : '2.5pc', background : '#36454F', position : 'relative', top : '1pc'}} />
              <InputLabel sx={{color : 'white', position : 'relative', top : '1.5pc', left : '-16.5pc'}}> Card Number </InputLabel>
              <TextField id="cardnum" type='text' variant="outlined"  sx={{input : {color : 'white', position: 'relative', top : '0.2pc', height : '0.5pc' }, width : '40pc', height : '2.5pc',background : '#36454F', position : 'relative', top : '2pc'}} />
              <InputLabel sx={{color : 'white', position : 'relative', top : '2.8pc', left : '-18pc'}}> Expiry </InputLabel>
              <TextField id="cardexp" type='text' variant="filled"  sx={{input : {color : 'white', position: 'relative', top : '-0.4pc', height : '0pc' }, width : '10pc', height : '2pc',background : '#36454F', position : 'relative', top : '3.5pc', left : '-15pc'}} />
              <InputLabel sx={{color : 'white', position : 'relative', top : '-0.6pc', left : '-7.5pc'}}> CCV </InputLabel>
              <TextField id="cardccv" type='text' variant="filled"  sx={{input : {color : 'white', position: 'relative', top : '-0pc', height : '0pc' }, width : '5pc', height : '2pc',background : '#36454F', position : 'relative', top : '0pc', left : '-6pc'}} />
              <InputLabel sx={{color : 'white', position : 'relative', top : '0.5pc', left : '-16.6pc'}}> Fixed Code </InputLabel>
              <TextField id="code" type='text' variant="filled"  sx={{input : {color : 'white', position: 'relative', top : '-0.8pc', height : '0.7pc' }, width : '40pc', height : '2.6pc',background : '#36454F', position : 'relative', top : '1pc', left : '-0pc'}} />
              <Button variant='outlined' type="submit" sx={{position : 'relative', top : '5pc', width: '20pc', left : '-10pc' }} > Save </Button>
              </form>
              <form onReset={handleCancel}>
                <Button variant='outlined' type="reset"  sx={{position : 'relative', background : 'yellow', color : 'black', top : '23.8pc', left : '-20pc', width : '20pc' }} >Cancel Sponsorship </Button>
              </form>
          </Stack>
        </Box>
       
      </Box>
    );
}



export default function VerticalTabs(){
    
    const [tabIndex, setTabIndex] = useState("one");
    const handleTabIndex = (tabIndex,newValue) => {

      setTabIndex(newValue);
    };
    
    return(
        <TabContext value={tabIndex}>
                <TabList onChange={handleTabIndex} orientation="vertical" scrollButtons="auto" aria-label='scrollable auto tabs' TabIndicatorProps={{style : {background : 'yellow', left : 30, height : 58, fontSize : 'small'}}}  sx={{position : 'relative', top : '-2pc', height : 800,width : 500,  }}>
                  <Tab value="one" label="Account details"  icon={<Avatar sx={{background : '#343434', color : 'white'}}>
                        <UserIcon sx={{color : 'white', position : 'relative', left : '0pc', fontSize : 'small'}}></UserIcon>
                      </Avatar>} sx={{color : 'white', position : 'relative', left : '-3.2pc', top : '5pc', fontSize : 'small', textTransform : 'none', '&.Mui-selected': {outline: 'none'}}} iconPosition='start'></Tab>
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
                <TabPanel value="three">
                  <PaymentComponent></PaymentComponent>
                </TabPanel>
                <TabPanel value="four">
                  <Sponsorships></Sponsorships>
                </TabPanel>
        </TabContext>
    );

}