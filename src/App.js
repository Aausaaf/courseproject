import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Topbar from './Components/TopBar/Topbar';
import HomePageBanner from './Components/HomePageBanner/HomePageBanner';
import CyberShiksha from './Components/CyberShiksha/CyberShiksha';
import CyberVidya from './Components/CyberVidya/CyberVidya';
import SignUp from './View/SignUp/SignUp';
import Login from './View/Login/Login';
import { Route, Routes } from 'react-router';
import Home from './View/Home/Home';
import CourseInfo from './View/CourseInfo/CourseInfo';
import OtpVerification from './View/SignUp/OtpVerification';
import { useEffect } from 'react';
import { useMongoDbAuth } from './Components/MongoDBAuthContext/AuthContext';
import Courselist from './View/Courselist/Courselist';
import Aboutus from './View/Aboutus/Aboutus';
import Cart from "./View/Cart/Cart"
import Profile from './View/Profile/Profile';
function App() {
   
  const {getLoggedIn,loggedInData} =useMongoDbAuth()
  useEffect(()=>{
    if(localStorage.getItem('UserToken')){
       let token = JSON.parse(localStorage.getItem('UserToken'));
          getLoggedIn(token);
    }
  },[])
  console.log(loggedInData)


  return (
   <div className="App">

   






          {/* <Topbar/>
          <Navbar/> 
          <HomePageBanner/>
          <CyberShiksha/>
          <CyberVidya/> */}
          {/* <SignUp/> */}
      
          <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/courseinfo/:id' element={<CourseInfo/>}/>
            <Route path="/verification" element={<OtpVerification/>}/>
            <Route path="/courselist" element={<Courselist/>}/>
            <Route path="/about" element={<Aboutus/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/profile" element={<Profile userData={loggedInData}/>}/>
          </Routes>
   </div>
   

  );
}

export default App;


