import React, { useEffect } from 'react'
import requests from './request'
import useFetch from './useFetch'
import { useDispatch, useSelector } from 'react-redux'
import { homers } from './store'
const Banner = () => {
   const data = useSelector((val)=>{
    return( val.home.data)
   })
   const random= useSelector((val)=>{
    return( val.home.random)
   })
   
    const [banner,...others] = useFetch(requests.fetchNetflixOriginal)
    
    console.log(others)
    const dispatch = useDispatch()
     useEffect(()=>{
        if(banner){
            dispatch(homers.fill(banner))
            if(data){
            dispatch(homers.randoms(data[Math.floor(Math.random()*data.length -1)]))
            }
            
        }
    },[banner,dispatch,data])

    function truncate(str,n){
        return str?.length > n ? str.substr(0, n-1) + '...' : str;
    }

    if(random !== null || random ==='underfined' ){
        
        return (
            <div className='banner' >
                {random.backdrop_path?
                    <section style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${random.backdrop_path})` }}>
                        <h1>
                            {random.title || random.name ||random.original_name}
                        </h1>
                        <div className="banner_button">
                            <button>Play</button>
                            <button>My List</button>
                        </div>
                        
                        <p>{truncate(random?.overview,200)}</p>
                        <div className='empty'></div>
                    </section>
                    : dispatch(homers.randoms(data[Math.floor(Math.random()*data.length -1)]))
                    }
                    
            </div>
        
        )
    }
}

export default Banner