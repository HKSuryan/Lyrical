import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const Player = ({currentSong,fn}) => {
    console.log(currentSong);
  return (<div>
        <button onClick ={()=>{fn(false,null)}}className='btn btn-success'>back</button>
        <div className='col-12'>
   
   <Card variant ='outlined' sx={{ display: 'flex', borderRadius: '16px',borderColor: 'primary.main'  }}>
     <Box sx={{ display: 'flex', flexDirection: 'column'  } }>
     <CardMedia
       component="img"
       sx={{ width: 151 }}
       image={currentSong.artworkUrl100}
       alt="Live from space album cover"
     />
       <CardContent sx={{ flex: '1 0 auto' }}>
         <Typography component="div" variant="h6">
           {currentSong.trackName}
         </Typography>
         <Typography variant="subtitle1" color="text.secondary" component="div">
           {currentSong.artistName}
         </Typography>
       </CardContent>
       <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
         <IconButton aria-label="play/pause" >
         <audio controls>
        <source src = {currentSong?.previewUrl} type ="audio/mp4"/>
        Your browser does not support the audio element
    </audio>

         </IconButton>
       </Box>
     </Box>
   </Card></div>

</div>
  )
}

export default Player