import React, { useRef } from 'react'

const Search = ({getArtist}) => {
    const Artist = useRef();

  return (
    <>
    <input ref = {Artist} type = 'text' className= 'form-control' placeholder='Type Artist'/>
    <button className="btn btn-primary" onClick={()=>{getArtist(Artist.current.value)}}>Search</button>
    <br/>
    <br/>
    </>
    
  )
}

export default Search