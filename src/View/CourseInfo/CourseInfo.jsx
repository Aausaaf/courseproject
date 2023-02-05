import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useProductContext } from '../../ApiIntegration/CoursesApi/CoursesApi'
import CourseInfoBanner from '../../Components/CourseInfoBanner/CourseInfoBanner'
import CourseInfoDetails from '../../Components/CourseInfoDetails/CourseInfoDetails'
import Navbar from '../../Components/Navbar/Navbar'
import Topbar from '../../Components/TopBar/Topbar'
import "./CourseInfo.css"

const CourseInfo = () => {

  const {id} = useParams()
  const {getPerticularCourse,getPerticularCourseData} = useProductContext()

  useEffect(()=>{
       getPerticularCourse(id)
  },[id])

  return (<div className="course_info_page_main_container">
           <Topbar/>
          <Navbar/>
          <CourseInfoBanner data={getPerticularCourseData} />
          <CourseInfoDetails data={getPerticularCourseData}/>
  </div>
  )
}

export default CourseInfo