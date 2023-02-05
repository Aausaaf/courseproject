import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import navbarLogo from "../../Assets/navbarIcon.png"
import { useMongoDbAuth } from '../MongoDBAuthContext/AuthContext'
import "./Navbar.css"
const Navbar = () => {
   const {loggedInData} = useMongoDbAuth()
   const navigate= useNavigate()

  return (
    <div className="navbar_comp_main_container_wrapper">
  <div className="navbar_comp_main_container">
         <div onClick={()=>{
             navigate("/")
         }} className="navbar_logo">
            <img src={navbarLogo} alt="" />
         </div>
         <ul>
         <li><Link to="/">Home</Link></li>
            <li><Link to="/courselist">Courses</Link></li>
            <li><Link to="/about">About Us</Link></li>

         </ul>
         <div className="navbar_search_box">
         <img src="https://img.icons8.com/external-others-royyan-wijaya/15/null/external-found-revamp-4-others-royyan-wijaya.png"/>
            <input type="search" placeholder="Search Courses" />
         </div>
           {
            loggedInData.length == 0? <div className="sign_up_login_button_container">
            <button onClick={()=>{
              navigate("/login")
            }}>Sign In</button>
            <button onClick={()=>{
              navigate("/signup")
            }}>Sign Up</button>
           </div>  : <><div className="logout_button">
            <h3><span>Welcome </span>&nbsp;{loggedInData.name}</h3> 
            <i className='fa fa-user'></i>
           </div>  <div onClick={()=>{
                navigate("/cart")
           }} className="cart_icon">
           <i class="fa fa-shopping-cart"></i> <p className="number">0</p></div> </> 
           }
         <div className="three_bar">
            <div className="bar1"></div>
            <div className="bar1"></div>
            <div className="bar1"></div>

         </div>
    </div>
    </div>
  
  )
}

export default Navbar