import { AppBar, Toolbar, Typography } from "@mui/material";
import MyAppTabs from './AppTabs';


function AppTypography(){

    return(
        <Typography >
            SWISS
        </Typography>
    );
}


function AppToolbar(){

    return(

        <Toolbar>
            <AppTypography variant="h6" component="div" sx={{flexGrow : 1, position : 'relative', left : '-38pc'}}>                
            </AppTypography>
        </Toolbar>
    );
}

export default function MyAppbar(){

    return(
        
        <AppBar sx={{position : '2pc', top : '0pc', background : 'black', zIndex : '2', color : 'white', height : '3pc'}}>
            <AppToolbar>
            </AppToolbar>
            <MyAppTabs></MyAppTabs>
        </AppBar>
    );
}