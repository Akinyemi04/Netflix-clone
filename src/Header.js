import React, { useEffect, useState } from 'react'
import netflix from './images/netflix_official.png'
import avatar from './images/avatar.png'
const Header = () => {
    const[scroll,setScroll]=useState(false)
    const windows= window.screen.width
    useEffect(()=>{
        if (windows > 440 ){
            window.addEventListener('scroll',()=>{
                if(window.scrollY > 250){
                    setScroll(true)
                }
                else{
                    setScroll(false)
                }
            })
        }
        else{
            window.addEventListener('scroll',()=>{
                if(window.scrollY > 80){
                    setScroll(true)
                }
                else{
                    setScroll(false)
                }
            })

        }
        return ()=>{
            window.removeEventListener('scroll',null)
        };
    },[windows])
  return (
    <div className={`header ${scroll && 'header_scroll'}`}>
        <img src={netflix} className='netflix' alt="Netflix Logo"  />
        <img src={avatar} className='avatar' alt="Netflix Logo" />
    </div>
  )
}

export default Header;