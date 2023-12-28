import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu,setMenu]=useState("shop")
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img className='logo' src='https://scontent.xx.fbcdn.net/v/t1.15752-9/394772639_1719280545260149_5556521275597880690_n.jpg?stp=dst-jpg_s261x260&_nc_cat=105&ccb=1-7&_nc_sid=510075&_nc_ohc=oiaMrNj_tEEAX_PkIsB&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQo6EJTif0En_Biq7dF6KQvMh0HgHsxoOkkje5H1ba91A&oe=656380B9' alt=""/>
            <p>StarStore</p>

        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none'}}to='/mens'>Men</Link> {menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womans")}}><Link style={{textDecoration: 'none'}}to="/womans">Woman</Link> {menu==="womans"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}}to='/kids'>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/register'><button>register</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className='nav-count'>0</div>

        </div>


    </div>
  )
}

export default Navbar