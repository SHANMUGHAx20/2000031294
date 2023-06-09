import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <h3>Train Name</h3>
      </Typography>
      <Typography variant="h5" component="div">
        Number of seats available : 50  
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Coach: AC
      </Typography>
      <Typography variant="body2">
        <TextField
  hiddenLabel
  id="filled-hidden-label-small"
  defaultValue="Enter number of seats"
  variant="filled"
  size="small"
/>
      </Typography>
    </CardContent>
    <CardActions>
        <center style={{margin:'50px 50px 50px 920px'}}> <Button size="small">Book</Button></center>
    </CardActions>
  </React.Fragment>
);



const card2 = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h3>Train Name</h3>
        </Typography>
        <Typography variant="h5" component="div">
          Number of seats available : 50  
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Coach: Sleeper
        </Typography>
        <Typography variant="body2">
          <TextField
    hiddenLabel
    id="filled-hidden-label-small"
    defaultValue="Enter number of seats"
    variant="filled"
    size="small"
  />
        </Typography>
      </CardContent>
      <CardActions>
          <center style={{margin:'50px 50px 50px 920px'}}> <Button size="small">Book</Button></center>
      </CardActions>
    </React.Fragment>
  );

export default function OutlinedCard() {
  return (
    <>
     <h1>More Details about booking tickets and availability of seats is mentioned in this page</h1>

<Box sx={{ minWidth: 275 }}>
  <Card variant="outlined">{card}</Card>
  <Card variant="outlined">{card2}</Card>

</Box></>
   
  );
}