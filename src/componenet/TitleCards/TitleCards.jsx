import { useRef,useEffect,useState } from 'react'
import './TitleCards.css';
import{Link} from 'react-router-dom';
// import cards_data from '../../assets/cards/Cards_data'


const TitleCards = ({title,category}) => {
  const[apiData,setApiData]=useState([]);
  const cardsRef=useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjBjOGU5ZDA3MTMyYjQzOWEwM2VlOWZkOTA3NjE4MiIsInN1YiI6IjY2NDA4YzhkN2IxOTUyOGY2MDU5YWIxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ew5vg_xg8YJazSb7Skh5pQulTJ15XXvhF46zR7X5snU'
    }
  };
  

  const handleWheel=(e)=>{
    e.preventDefault();
    cardsRef.current.scrollLeft+=e.deltaY;
  }
  useEffect(()=>{
    cardsRef.current.addEventListener('wheel',handleWheel)

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
    
  },[])
  return (
    <div className='titleCards'>
      <h2>{title?title:"Popular on MoviFlix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {
          apiData.map((card,index)=>{
            return(
              <Link key={index} to={`/player/${card.id}`}><div className="card" >
                <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
                <p>{card.original_title}</p>
              </div></Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default TitleCards