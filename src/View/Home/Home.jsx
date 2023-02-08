import React from 'react'
import CyberShiksha from '../../Components/CyberShiksha/CyberShiksha'
import CyberVidya from '../../Components/CyberVidya/CyberVidya'
import Footer from '../../Components/Footer/Footer'
import HomePageBanner from '../../Components/HomePageBanner/HomePageBanner'
import Navbar from '../../Components/Navbar/Navbar'
import Topbar from '../../Components/TopBar/Topbar'

const Home = () => {
  return (<>
   <Topbar/>
   <Navbar/>
   <HomePageBanner/>
   <CyberShiksha/>
   <CyberVidya/>
   <Footer/>
  </>
  )
}

export default Home