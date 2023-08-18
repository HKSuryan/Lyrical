import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';



export default function Song({currentSong,fn}) {
    //const[playerFlag,setPlayerFlag] = useState(false);
    const showPlayer=()=>{
        fn(true,currentSong);
    }

  return (
    <div className='col-4'>
   
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
          <IconButton aria-label="play/pause" onClick={showPlayer}>
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
        </Box>
      </Box>
    </Card></div>
  );
}