import "./Profile.css"
import { useState } from 'react'

import { useEffect } from "react"
import Navbar from "../../Components/Navbar/Navbar"
import Topbar from "../../Components/TopBar/Topbar"
const Profile = ({userData}) => {

   
   const [showPassoword,setshowPassword] = useState(false)
   const [isShowPopUp,setIsShowPopUp] = useState(false)
  const [ischangePasswordDisplay,setchangePasswordDisplay] = useState(false)
  





   
  





  return (<>
  <Topbar/>
  <Navbar/>
  <div style={{


}} className='profile_page_main_container'>
 
    <div  className="container">
    
      <div className="middle">
        <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="" class="user-pic" />
        <h4 className="name">

            { userData?.name }
            
            </h4>
      </div>
     
      <div className="footer">
         <h2>Email : {userData?.email}</h2>
   
    </div>
       
      
      </div>
      </div></>
  
     

    

  )
}

export default Profile