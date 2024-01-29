import { Typography } from "@mui/material";

function Boldness(){

    return(
        <h5>
                My account
        </h5>
    );
}


export default function MainTypo(){

    return (
        <Typography variant="h5" component="div" sx={{position : 'relative', top : '5pc' , left : '-37pc', fontSize : '36px'}}>
            <Boldness sx={{color : 'white'}}></Boldness>
        </Typography>
    );
}