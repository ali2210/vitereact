import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import './App.css'
import {Tab } from '@mui/material';

function App() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={1}>
      <p class='description'> Grid Example </p>
      <Grid container spacing={2}>
          <h4 class="heading">
              Hello ViteReact.js
          </h4>
          <h6 class="steps">
              $ npm create vite@latest
          </h6>
          <Box sx={2}>
              <div class="install">
                $ npm install
              </div>
              <div class="start">
                $ npm run dev
              </div>
              <p class="additional">
                MU5 npm package added in project
              </p>
          </Box>
      </Grid>
    </Box>
  )
}

export default App
