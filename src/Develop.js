import useFetch from "./useFetch"
import YouTube from "react-youtube"
import { useState } from "react"
import movieTrailer from "movie-trailer"
const Develop = (props) => {
  const[condition,setCondition]= useState(false)
  const[url,setUrl]= useState(null)
    const[data,...others]=useFetch(props.url)
    const option={
      height:'70%',
      width:'100%',
      playerVars:{
        autoplay:1
      }
    }
    const base_url ='https://image.tmdb.org/t/p/original/'

    function handleClick(val){
      if(condition){
        setCondition(false)
      }
      else{
        movieTrailer(null ,{ tmdbId: val.id })
        .then((url)=>{
          const urlParam = new URLSearchParams(new URL(url).search)
          setUrl(urlParam.get('v'))
          //console.log(urlParam.get('v'))
          setCondition(true)
        })
        .catch((err)=>{
          console.log(err)
        })
        
      }
    }
  return (
    <div className="develop">
        <h1 className="dv">
            {props.category}
        </h1>
        <div className={`image  ${props.islarge && 'large' }` }>
          { data && data.map((val)=>{
            if(val.poster_path && val.backdrop_path){
              return(
                 <img onClick={()=>{handleClick(val)}} className={` ${props.islarge && 'large' }`} key={val.id} src={`${base_url}${props.islarge? val.poster_path:val.backdrop_path}`}/>
              )
            }
          })}
        </div>
        { condition  && <YouTube videoId={url} opts={option}/>}
    </div>
  )
}

export default Develop