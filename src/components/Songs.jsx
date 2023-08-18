import React from 'react'
import Song from './Song'

const Songs = ({allSongs,fn}) => {
    console.log(allSongs);
    return (<>
        {allSongs.map((currentSong,index)=>
            <Song fn = {fn} key = {index} currentSong={currentSong}/>
        )}
     </> )
}

export default Songs