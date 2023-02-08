import React from "react";
import "./Courselist.css";
import { AiOutlineAppstore } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { CoursesCartComp } from "../../Components/CyberVidya/CyberVidya";
import Image from "../../Assets/reactBannerImage.jpg"
import Topbar from "../../Components/TopBar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";
import { useProductContext } from "../../ApiIntegration/CoursesApi/CoursesApi";
import { useNavigate } from "react-router";
const Courselist = () => {


 const { getCourseSiksha, getCourseVidya, CourseSiksha, CourseVidya} = useProductContext()
const navigate = useNavigate();


  useEffect(()=>{
      getCourseSiksha()
      getCourseVidya()
  },[])

  const data = [
    {
      name: "Angular",
    },
    {
      name: "Bootstrap",
    },
    {
      name: "CSS3",
    },
    {
      name: "GateBy",
    },
    {
      name: "GraphQL",
    },
    {
      name: "Javascript",
    },
    {
      name: "Node",
    },
    {
      name: "Python",
    },
    {
      name: "React",
    },
    {
      name: "Wordpress",
    },
  ];
  const data2 = [
    {
      name: "Beginner",
    },
    {
      name: "Intermediate",
    },
    {
      name: "Expert",
    },
  ];
  return (
    <>
    <Topbar/>
    <Navbar/>
      <div className="course-list-main-container">
      <div className="course-list-header-container">
        <div className="course-list-inner-conatiner">
          <h1>Learn</h1>
        </div>
      </div>
      <div className="course-list-content-container">
        <div className="course-list-header-wrapper-container">
          <div className="course-list-content-header-conatiner1">
            <h4>Showing 1-9 of courses</h4>
          </div>
          <div className="course-list-content-header-container2">
            <div className="course-list-content-header-container2-view-container">
              <button>
                <AiOutlineAppstore />
              </button>
              <button>
                <AiOutlineBars />
              </button>
            </div>
            <div className="course-list-content-header-container2-dropdown">
              <select>
                <option value="0">Release Date(newest first)</option>
                <option value="1">Release Date (oldest first)</option>
                <option value="2">Course Title(a-z)</option>
                <option value="3">Course title(z-a)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="course-list-content-filter-container">
        <div className="filter-inner-container1">
          <div className="filter-inner-conatiner1-heading">
            <h4>Filter</h4>
            <div className="filter-inner-container1-cancel-section">
              <MdOutlineCancel />
              <h4>Clear</h4>
            </div>
          </div>
          <div className="course_list_border"></div>
          <div className="filter-inner-conatiner1-checkbox-conatiner">
            <h4>CATEGORY</h4>

            {data.map((data) => {
              return (
                <div className="filter-inner-chckbox-text">
                  <input type="checkbox" />
                  <p>{data.name}</p>
                </div>
              );
            })}
          </div>
          <div className="inner_conatiner1_border"></div>
          <div className="filate_inner_conatainer1_level_container">
            <h4>LEVEL </h4>
            {data2.map((data) => {
              return (
                <div className="filter_inner_container1_checkbox_text">
                  <input type="checkbox" />
                  <p>{data.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="filter-inner-container2">
          <div className="filter_inner_conatiner2_course_container">
          {
            CourseSiksha?.data?.map((course)=>{
              return   <div onClick={()=>{
                navigate(`/courseinfo/${course._id}`)

              }} className="course_list_item_list">
                <div className="course_list_item_banner_list">
                    <img src={course?.image} alt="" />
                </div>
                <div className="course_list_item_details_list">
                    <h2>Free</h2>
                    <h1>{"How you an easily create a website using React"}</h1>
                     <div className="course_list_item_star_list">
                     <img src="https://img.icons8.com/tiny-color/18/null/star.png"/>
                     <img src="https://img.icons8.com/tiny-color/18/null/star.png"/>
                     <img src="https://img.icons8.com/tiny-color/18/null/star.png"/>
                     <img src="https://img.icons8.com/tiny-color/18/null/star.png"/>
                     <img src="https://img.icons8.com/metro/18/red/star.png"/>
                     </div>
                     <h4>({"12"} Reviews)</h4>
                      <div className="course_list_item_border_list">
            
                      </div>
                      <div className="course_list_item_time">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 50 50">
            <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 37.039062 10.990234 A 1.0001 1.0001 0 0 0 36.265625 11.322266 L 26.183594 22.244141 A 3 3 0 0 0 25 22 A 3 3 0 0 0 22 25 A 3 3 0 0 0 25 28 A 3 3 0 0 0 25.5 27.958984 L 29.125 34.486328 A 1.0010694 1.0010694 0 1 0 30.875 33.513672 L 27.246094 26.984375 A 3 3 0 0 0 28 25 A 3 3 0 0 0 27.652344 23.599609 L 37.734375 12.677734 A 1.0001 1.0001 0 0 0 37.039062 10.990234 z"></path>
            </svg>
            <h5> 10<span>hours</span> 20 <span>minutes</span></h5>
                      </div>
                </div>
            </div>
               
            })
          }   
          {
            CourseVidya?.data?.map((course)=>{
              return   <div onClick={()=>{
                navigate(`/courseinfo/${course._id}`)

              }} className="course_list_item_list">
                <div className="course_list_item_banner_list">
                    <img src={course?.image} alt="" />
                </div>
                <div className="course_list_item_details_list">
                    <h2>Free</h2>
                    <h1>{"How you an easily create a website using React"}</h1>
                     <div className="course_list_item_star_list">
                     <img src="https://img.icons8.com/tiny-color/18/null/star.png"/>
                     <img src="https://img.icons8.com/tiny-color/18/null/star.png"/>
                     <img src="https://img.icons8.com/tiny-color/18/null/star.png"/>
                     <img src="https://img.icons8.com/tiny-color/18/null/star.png"/>
                     <img src="https://img.icons8.com/metro/18/red/star.png"/>
                     </div>
                     <h4>({"12"} Reviews)</h4>
                      <div className="course_list_item_border_list">
            
                      </div>
                      <div className="course_list_item_time">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 50 50">
            <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 37.039062 10.990234 A 1.0001 1.0001 0 0 0 36.265625 11.322266 L 26.183594 22.244141 A 3 3 0 0 0 25 22 A 3 3 0 0 0 22 25 A 3 3 0 0 0 25 28 A 3 3 0 0 0 25.5 27.958984 L 29.125 34.486328 A 1.0010694 1.0010694 0 1 0 30.875 33.513672 L 27.246094 26.984375 A 3 3 0 0 0 28 25 A 3 3 0 0 0 27.652344 23.599609 L 37.734375 12.677734 A 1.0001 1.0001 0 0 0 37.039062 10.990234 z"></path>
            </svg>
            <h5> 10<span>hours</span> 20 <span>minutes</span></h5>
                      </div>
                </div>
            </div>
               
            })
          }   
          </div>
          <div className="filter_inner_container_pagnition_container">
            <a href="#">&laquo;</a>
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">&raquo;</a>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  
  );
};

export default Courselist;
