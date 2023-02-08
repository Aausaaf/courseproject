import React from 'react'
import "./HomePageBanner.css"
import "swiper/css/bundle";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import {Zoom, Navigation,Autoplay, Pagination, Scrollbar, A11y } from "swiper";
import { FreeMode } from "swiper";
import { useNavigate } from 'react-router';
const HomePageBanner = () => {

const navigate = useNavigate();




  return (
    <Swiper
    grabCursor={true}
    modules={[Zoom,FreeMode, Navigation, A11y,Autoplay]}
    slidesPerView={1}
    spaceBetween={0}
    navigation
    zoom={true}
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log("slide change")}
    loop={true}
    autoplay={{
        delay: 5000,
        disableOnInteraction: false
    }}
  >

      
<SwiperSlide>
        <div  className="home_page_banner_main_container">
        <div className="home_page_banner_main_container_div">
        <h3>START LEARNING FROM HOME</h3>
        <h1>Connect With Our Expert And Start <br />  Learning Today</h1>
        <h5>we are providing high-quantity online courses to improve 
            your skill . Our all instructors <br /> are highly experienced and experts.
        </h5>
        <div className="home_page_banner_button_container">
            <button onClick={()=>{
              navigate("/courselist")
              console.log("oiwhfduo")
              window.scrollTo(0,0)
            }}>FIND COURSES</button>
            <button onClick={()=>{
              navigate("/courselist")
              console.log("oiwhfduo")
              window.scrollTo(0,0)
            }}>EXPLORE MORE</button>
        </div>

      </div>
  </div>
        </SwiperSlide>  <SwiperSlide>
        <div  className="home_page_banner_main_container">
        <div  id="home_page_banner_main_container_div" className="home_page_banner_main_container_div">
        <h3>BEST ONLINE LEARNING PLATFORM </h3>
        <h1>Start Learning from home with  <br /> expert instructors</h1>
        <h5>we are providing high-quantity online courses to improve 
            your skill . Our all instructors <br /> are highly experienced and experts.
        </h5>
        <div className="home_page_banner_button_container">
            <button onClick={()=>{
              navigate("/courselist")
              console.log("oiwhfduo")
              window.scrollTo(0,0)
            }}>FIND COURSES</button>
            <button  onClick={()=>{
              navigate("/courselist")

            }}>EXPLORE MORE</button>
        </div>

      </div>
  </div>
        </SwiperSlide>
        
     
  </Swiper>
 
  )
}

export default HomePageBanner