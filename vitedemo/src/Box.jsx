
import Box from '@mui/material/Box';
import MyAppbar from './Appbar.jsx';
import MainTypo from './MainTypography.jsx';
import { Stack } from '@mui/material';
import VerticalTabs from './VerticalTabs.jsx';


function TabStackWindow(){

    return(
        <Stack direction="row" spacing={10}>
            <VerticalTabs></VerticalTabs>            
        </Stack>
    );
}

function TabWindow(){

    return (
        <Box>
            <TabStackWindow/>
        </Box>
    );
}

function Subwindow(){

    return(
        <Box sx={{background : '#28282B', color : 'white', position : 'relative', top : '-1.5pc', width : '90pc', height : '80pc', left : '-2pc'}}>
            <MainTypo></MainTypo>
            <TabWindow sx={{width : '300pc', position : 'relative', top : '2pc', left : '0pc', p : 5}}></TabWindow>
        </Box>
    );
}





export default function MainWindow(){
   return(

        <Box >
            <MyAppbar sx={{background : '#1B1212'}}/>
            <Subwindow>               
            </Subwindow>
        </Box>
   ); 
}