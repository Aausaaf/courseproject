import React from 'react'
import "./CourseInfoBanner.css"
const CourseInfoBanner = ({data}) => {
  console.log(data)
  return (<div className="course_info_banner_comp_main_container">
        <div className="course_info_banner_comp_main_container_item">
           <div className="course_info_banner_comp_main_container_item_header">
              <h1>{data?.data?.name}</h1>
              <div className="course_info_banner_comp_main_container_item_paragraph">
              <h3>Bootcamp on the React.js essentials. Gain a strong foundation
                of the core concept, and build exciting and useful apps ! 
              </h3>
              </div>
              <div className="course_info_banner_comp_main_container_item_time">
                <h4><i className='fa fa-clock-o'></i>&nbsp; {data?.data?.duration}</h4>
<h4><i className='fa fa-user'></i>&nbsp; 20</h4>
<div className="course_banner_star">
         <img src="https://img.icons8.com/tiny-color/15/null/star.png"/>
         <img src="https://img.icons8.com/tiny-color/15/null/star.png"/>
         <img src="https://img.icons8.com/tiny-color/15/null/star.png"/>
         <img src="https://img.icons8.com/tiny-color/15/null/star.png"/>
         <img src="https://img.icons8.com/metro/15/red/star.png"/>
         4.6
         </div>

              </div>
            </div> 
        </div>
  </div>
  )
}

export default CourseInfoBanner