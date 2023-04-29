import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
  
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Train from './trains/Trains';
import { Link } from 'react-router-dom';


export default function Navbar() {
   


  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Train Scheduling
          </Typography>
          <Link to="/trains">
          <Button color="inherit" >Display trainss</Button>
          </Link>
         
        </Toolbar>
      </AppBar>
    </Box>
    This is train scheduling
    </>
    

    
    
  );
}