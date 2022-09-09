import { useEffect, useState } from "react"

const useFetch = (content)=>{
    const[val,setVal]=useState(null)
    const[error,setError]=useState(null)
    const[ispending,setIsPendding]=useState(true)
    useEffect(()=>{
        const abortc= new AbortController()
         fetch(`https://api.themoviedb.org/3${content}`)
        .then(res=>{
            if(!res.ok){
                throw Error('could not fetch data from resources')
            }
            return res.json()})
        .then(data=>{
            setIsPendding(false)
            setVal(data.results)
            //console.log(data)
            setError(null)
        })
        .catch(err=>{
            if(err.name === 'AbortError'){
                console.log('fetch aborted')
            }
            else{
                setIsPendding(false)
                  setError(err.message)
            }
            
        })
        return()=> abortc.abort()
    },[content])
    return[val,ispending,error]
}
export default useFetch