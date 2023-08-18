import React, { useState } from 'react'
import Search from '../components/Search'
import GetSongs from '../services/api-client';
import Songs from '../components/Songs';
import Player from '../components/Player';
import Appbar from '../shared/Appbar';

const SearchPage = () => {
    const[allSongs,setSong] = useState([]);
    const[player,setPlayer] = useState(false);
    const[song,setPlayerSong] = useState(null);
    const togglePlayer=(player,songarg)=>{
        setPlayerSong(songarg);
        setPlayer(player);
    }
    const getArtist=async(name)=>{
        console.log(name);
        const allSongs = await GetSongs(name);
        setSong(await allSongs);
    }
    const jsx = <><Search getArtist={getArtist}/>
    <div className='row'>
    <Songs fn = {togglePlayer} allSongs={allSongs}/></div></>
  return (
    <div className='container'>
            <Appbar/>
            <br/>
 
        {player?<Player currentSong={song} fn = {togglePlayer}/>:jsx}
 
    </div>

  )
}

export default SearchPage