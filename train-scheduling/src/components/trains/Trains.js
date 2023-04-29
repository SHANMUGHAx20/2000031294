import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';



const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

function Trains() {

  const Item = styled(Paper)(() => ({
    backgroundColor: '#98d6a9',
    padding: 8,
    textAlign: 'center',
    color: 'black',
  }));

  return (
    <>
    <Navbar/>
      <Grid container spacing={4}>

        <Grid item xs={6}>
        <div style={{margin: '10px 5px 55px 100px'}}>
    <Card sx={{ maxWidth: 800}} variant='outlined'>
      <CardContent>
        <Typography variant='h3'  gutterBottom>
          Train 1
        </Typography>
        <Typography variant="h4" component="div">
         Departure time:10:00AM
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          TRAIN IS HEADING FROM HYD TO BEN
        </Typography>
        <Typography variant="body1">
          Coaches Available are
          <br />
          {'"AC,Sleeper"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/train">
        <Button size="small">Book Tickets</Button>
        </Link>
       
      </CardActions>
    </Card>
    </div>
        </Grid>

        <Grid item xs={6}>
        <div style={{margin: '10px 5px 55px 100px'}}>
    <Card sx={{ maxWidth: 800}} variant='outlined'>
      <CardContent>
        <Typography variant='h3'  gutterBottom>
          Train 2
        </Typography>
        <Typography variant="h4" component="div">
         Departure time:11:00AM
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          TRAIN IS HEADING FROM VIJ TO HYD
        </Typography>
        <Typography variant="body1">
          Coaches Available are
          <br />
          {'"AC,Sleeper"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book Tickets</Button>
      </CardActions>
    </Card>
    </div>
        </Grid>

        <Grid item xs={6}>
        <div style={{margin: '10px 5px 55px 100px'}}>
    <Card sx={{ maxWidth: 800}} variant='outlined'>
      <CardContent>
        <Typography variant='h3'  gutterBottom>
          Train 3
        </Typography>
        <Typography variant="h4" component="div">
         Departure time:12:00PM
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          TRAIN IS HEADING FROM GNT TO VIJ
        </Typography>
        <Typography variant="body1">
          Coaches Available are
          <br />
          {'"AC,Sleeper"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book Tickets</Button>
      </CardActions>
    </Card>
    </div>
        </Grid>

        <Grid item xs={6}>
        <div style={{margin: '10px 5px 55px 100px'}}>
    <Card sx={{ maxWidth: 800}} variant='outlined'>
      <CardContent>
        <Typography variant='h3'  gutterBottom>
          Train 4
        </Typography>
        <Typography variant="h4" component="div">
         Departure time:1:00PM
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          TRAIN IS HEADING FROM GNT TO HYD
        </Typography>
        <Typography variant="body1">
          Coaches Available are
          <br />
          {'"AC,Sleeper"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book Tickets</Button>
      </CardActions>
    </Card>
    </div>
        </Grid>

        <Grid item xs={6}>
        <div style={{margin: '10px 5px 55px 100px'}}>
    <Card sx={{ maxWidth: 800}} variant='outlined'>
      <CardContent>
        <Typography variant='h3'  gutterBottom>
          Train 5
        </Typography>
        <Typography variant="h4" component="div">
         Departure time:2:00PM
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          TRAIN IS HEADING FROM HYD TO GNT
        </Typography>
        <Typography variant="body1">
          Coaches Available are
          <br />
          {'"AC,Sleeper"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book Tickets</Button>
      </CardActions>
    </Card>
    </div>
        </Grid>

        <Grid item xs={6}>
        <div style={{margin: '10px 5px 55px 100px'}}>
    <Card sx={{ maxWidth: 800}} variant='outlined'>
      <CardContent>
        <Typography variant='h3'  gutterBottom>
          Train 6
        </Typography>
        <Typography variant="h4" component="div">
         Departure time:3:00PM
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          TRAIN IS HEADING FROM HYD TO TIR
        </Typography>
        <Typography variant="body1">
          Coaches Available are
          <br />
          {'"AC,Sleeper"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book Tickets</Button>
      </CardActions>
    </Card>
    </div>
        </Grid>

      </Grid>
    </>
  )
}

export default Trains;