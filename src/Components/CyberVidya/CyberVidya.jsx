import React, { useEffect } from 'react'
import "./CyberVidya.css"
import "swiper/css/bundle";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import {Zoom, Navigation,Autoplay, Pagination, Scrollbar, A11y } from "swiper";
import { FreeMode } from "swiper";
import courseBannerImage1 from "../../Assets/cybervidyacoursebanner1.jpg"
import courseBannerImage2 from "../../Assets/cybervidyacoursebanner2.jpg"
import courseBannerImage3 from "../../Assets/cybervidyacoursebanner3.jpg"
import courseBannerImage4 from "../../Assets/cybervidyacoursebanner4.jpg"
import courseBannerImage5 from "../../Assets/cybervidyacoursebanner5.jpg"
import courseBannerImage6 from "../../Assets/cybervidyacoursebanner6.jpg"
import { useProductContext } from '../../ApiIntegration/CoursesApi/CoursesApi';


export const CoursesCartComp = ({
    image,
    price,
    title,
    duration,
    review,

}) => {


  



    return <div className="course_list_item">
    <div className="course_list_item_banner">
        <img src={image} alt="" />
    </div>
    <div className="course_list_item_details">
        <h2>{price}</h2>
        <h1>{title}</h1>
         <div className="course_list_item_star">
         <img src="https://img.icons8.com/tiny-color/18/null/star.png"/>
         <img src="https://img.icons8.com/tiny-color/18/null/star.png"/>
         <img src="https://img.icons8.com/tiny-color/18/null/star.png"/>
         <img src="https://img.icons8.com/tiny-color/18/null/star.png"/>
         <img src="https://img.icons8.com/metro/18/red/star.png"/>
         </div>
         <h4>({review} Reviews)</h4>
          <div className="course_list_item_border">

          </div>
          <div className="course_list_item_time">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="20" height="20"
viewBox="0 0 50 50">
<path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 37.039062 10.990234 A 1.0001 1.0001 0 0 0 36.265625 11.322266 L 26.183594 22.244141 A 3 3 0 0 0 25 22 A 3 3 0 0 0 22 25 A 3 3 0 0 0 25 28 A 3 3 0 0 0 25.5 27.958984 L 29.125 34.486328 A 1.0010694 1.0010694 0 1 0 30.875 33.513672 L 27.246094 26.984375 A 3 3 0 0 0 28 25 A 3 3 0 0 0 27.652344 23.599609 L 37.734375 12.677734 A 1.0001 1.0001 0 0 0 37.039062 10.990234 z"></path>
</svg>
<h5> {duration?.split(" ")[0]}<span>hours</span> {duration?.split(" ")[2]} <span>minutes</span></h5>
          </div>
    </div>
</div>
}
const Data = [
    {
        title:"How to easily create a website with React",
        duration:"20 hours 10 minutes",
        price:"Free",
        review:"12",
        image:courseBannerImage1

    },
    {
        title:"GraphQL: introduction to graphQL for beginners",
        duration:"20 hours 10 minutes",
        price:"₹ 1000",
        review:"14",
        image:courseBannerImage2

    },
    {
        title:"Angular: the complete guide for beginners",
        duration:"20 hours 10 minutes",
        price:"₹ 500",
        review:"17",
        image:courseBannerImage3

    },
    {
        title:"The Python Course : build a web application",
        duration:"20 hours 10 minutes",
        price:"₹ 7000",
        review:"14",
        image:courseBannerImage4

    },
    {
        title:"Gatsby JS: build app with GraphQL and React",
        duration:"20 hours 10 minutes",
        price:"₹ 1000",
        review:"14",
        image:courseBannerImage5

    }
    
    
    
]




const CyberVidya = () => {

    const {CourseVidya,getCourseVidya} = useProductContext()

    useEffect(()=>{
        getCourseVidya()
    },[])

  return (<div className="cyber_vidya_comp_main_container">
      <div className="cyber_vidya_comp_header">
         <div className="border1_vidya"></div>
         <h1>CYBER VIDYA</h1>
         <div className="border2_vidya"></div>
        </div> 
        
        <div className="cyber_vidya_comp_course1">
            <h2>Recommended to you</h2>
            <div className="course_list">
            <Swiper
    grabCursor={true}
    modules={[Zoom,FreeMode, Navigation, A11y,Autoplay]}
    slidesPerView={3}
    spaceBetween={0}
   
    zoom={true}
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log("slide change")}
    loop={true}
    autoplay={{
        delay: 5000,
        disableOnInteraction: false
    }}
    breakpoints={{
        0: {
          slidesPerView: 1,
        
        },
        700: {
          slidesPerView:2 ,
         
        },
        1000:{
            slidesPerView:3 
        }
       
      }}
  >

  {
    CourseVidya?.data?.map((item)=>{
          return <SwiperSlide>
                 <CoursesCartComp
                 title={item.name}
                 price={item.price}
                 duration={item.duration}
                 image={item.image}/>
          </SwiperSlide>
    })
  }    
    
                </Swiper>
            </div>
            </div> 



     
            <div style={{
                marginTop:"5rem"
            }} className="cyber_vidya_comp_course1">
            <h2>Popular Courses</h2>
            <div className="course_list">
            <Swiper
    grabCursor={true}
    modules={[Zoom,FreeMode, Navigation, A11y,Autoplay]}
    slidesPerView={3}
    spaceBetween={0}
   
    zoom={true}
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log("slide change")}
    loop={true}
    autoplay={{
        delay: 3000,
        disableOnInteraction: false
    }}
    breakpoints={{
        0: {
          slidesPerView: 1,
        
        },
        700: {
          slidesPerView:2 ,
         
        },
        1000:{
            slidesPerView:3 
        }
       
      }}
  >

  {
    CourseVidya?.data?.reverse()?.map((item)=>{
          return <SwiperSlide>
                 <CoursesCartComp
                 title={item.title}
                 price={item.price}
                 duration={item.duration}
                 image={item.image}/>
          </SwiperSlide>
    })
  }    
    
                </Swiper>
            </div>
            </div> 






  </div>
  )
}

export default CyberVidya