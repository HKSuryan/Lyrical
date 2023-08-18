import axios from 'axios';
async function GetSongs(artist_name){
    const URL = `https://itunes.apple.com/search?term=${artist_name}&limit=25`;
    console.log(URL);
    const songs = await axios.get(URL);
    return songs.data['results'];
}
export default GetSongs;