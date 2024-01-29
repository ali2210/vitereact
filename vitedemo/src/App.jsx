import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import Window from './Box.jsx';
import { yellow } from '@mui/material/colors';



function App() {

  //theme provider 
  const theme = createTheme({
    palette: {
      primary : yellow,
    }
  });
  
  
  
  return (
    <>
     <ThemeProvider theme={theme}>
      <Window sx={{flexGrow : 1, color : 'white'}}/>
      </ThemeProvider>
    </>
  )
}

export default App
