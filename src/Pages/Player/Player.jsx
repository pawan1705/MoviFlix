import React, { useEffect, useState } from 'react'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import './Player.css';
import { useNavigate, useParams } from 'react-router-dom';
const Player = () => {
  const navigate=useNavigate();
  const{id}=useParams()
  const[apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  });
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjBjOGU5ZDA3MTMyYjQzOWEwM2VlOWZkOTA3NjE4MiIsInN1YiI6IjY2NDA4YzhkN2IxOTUyOGY2MDU5YWIxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ew5vg_xg8YJazSb7Skh5pQulTJ15XXvhF46zR7X5snU'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])

  return (
    <div className='player'>
      <img src={back_arrow_icon} onClick={()=>navigate(-2)} alt="" />
      <iframe style={{"width":"90%","height":"90%"}} src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0'>allowFullScreen</iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player