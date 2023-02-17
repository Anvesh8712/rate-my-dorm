/**
 * 
 * This is the Header For Now!<br/>
    buttons <br/> 
        -{">"} contact Me(sends to bottom of page)
        -{">"} view Menu (opens Menu?)
        -{">"} Home {"("} Appears when scrolled down and takes you home {")"}
        logo <br/>
        -{">"} RateMyDorm logo
 */
import './Header.css'
import React from 'react'
import home_pic from './icons8-home-page-80.png'




function Header() {

return(
    <div className='Main'>
        <img src={home_pic} alt='home icon'></img>
        <h1 className='h1'>RATE MY DORM - UMASS</h1>
        <h1 className='h1'>Contact Us</h1>
    </div>
)
}


export default Header