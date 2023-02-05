import React, { useState } from 'react'
import "./CourseInfoDetails.css"
import banner from "../../Assets/reactBannerImage.jpg"

const CourseInfoDetails = ({data}) => {

  const [showCirculum, setShowCirculum] = useState(true)
  const [showText, setShowText] = useState(false)
   const [showVideo, setShowVideo] = useState(false)

const Data = [
  {
    name:"Introduction",
    details:[{title:"What You will learn in this course",
  duration:"9m 34s"},
  {title:"An Overview of Web Development and React",
  duration:"4m 54s"},
  {title:" Course Repo and Software Installations",
  duration:"1h 9m 34s"},
  


  ]
      
  },
  {
    name:"Understanding React Native Fundamentals",

    details:[{title:"React Native For Absolute Beginners with React Hooks",
  duration:"2h 25m 27s"},
  {title:"Understanding React Native View, Text , StyleSheet",
  duration:"9m 38s"},
  {title:"Understanding React Native TextInput and Dimensions",
  duration:"1h 9m 34s"},
  {title:"Extra React Native Tagss",
  duration:"1h 9m 34s"},
  
  


  ]
      
  },
  {
    name:"Adding Stack amd Bottom Tab Navigation to our react native app",

    details:[{title:"",

  duration:"2h 25m 27s"},
  {title:"Intro to React Native Navigation",
  duration:"9m 38s"},
  {title:"Adding an npm package and configuring it",
  duration:"1h 9m 34s"},
  {title:"Navigating from one Stack screen to another",
  duration:"1h 9m 34s"},
  
  


  ]
      
  },
  {
    name:"Overview of React Hooks",

    details:[{title:"UseState Hook",


  duration:"2h 25m 27s"},
  {title:"UseState Hook",

  duration:"9m 38s"},
 
  
  


  ]
      
  },  {
    name:"Project",

    details:[{title:"Setting up login form",


  duration:"2h 25m 27s"},
  {title:"Finishing the project with signup form",

  duration:"9m 38s"},
 
  
  


  ]
      
  },
  {
    name:"Conclusion",

    details:[{title:"My next course",


  duration:"2h 25m 27s"},
  {title:"Conclusiony",

  duration:"9m 38s"},
 
  
  


  ]
      
  },
]


const CourseVideo = ({show}) => {
  return <div className="course_video_container">
    <h3 onClick={()=>{
      show(false)
    }}>×</h3>
    <iframe src={data?.data?.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
}

const CoursetitleDetails = ({title,duration}) => {
  return <>
   { title.map((data)=>{
       return <div className="course_title_details_container">
       <i className='fa fa-lock'></i>
       <h4>{data.title}</h4>
       <p>{data.duration}</p>
   </div>
    })
  }
  </>
}

const CourseDescription = () => {
  return <div className="course_description_container">
       <h5 style={{
          height: !showText? '250px' : "auto",
          
       }}>
        {
          data?.data?.description
        }.
        
       </h5>
       <h5 onClick={()=>{
        setShowText(!showText)
       }}>{showText?"Show Less" : "Show More"}</h5>
  </div>
}



// liverest  

const [showInfo, setShowInfo] = useState({
  0:true
});

const handleClick = (index)  => {
  // setShowInfo({})
  setShowInfo(state => ({
    ...state, // <-- copy previous state
    [index]: !state[index] // <-- update value by index key
  }));
};
console.log(showInfo)

  return (<div className="course_info_details_comp_main_contianer">
      <div className="course_info_details_comp_main_contianer_item">
        <div className="course_info_details_comp_main_contianer_details">
          <div className="course_info_details_comp_main_contianer_details_header">
            <h5 onClick={()=>{
                 setShowCirculum(true)
            }}>Curriculum</h5>
            <h5 onClick={()=>{
                 setShowCirculum(false)
            }} >Description</h5>
          </div>
          <div className="course_info_details_comp_main_contianer_details_list">
           {
            showCirculum ?  
              data?.data?.syllabus?.map((data,i)=>{
                return   <>
                <div  onClick={()=>{
                      handleClick(i)
                }} className="course_info_details_comp_main_contianer_details_list_item">
                <h3>{data.name}</h3>
                <i onClick={()=>{
                    handleClick(i)
                }} className='fa fa-chevron-down'></i>
              </div>
               {
                showInfo[i]?<CoursetitleDetails   title={data.details}/>:""
               }
              </>
              })
             : <CourseDescription/>
           }
          </div>
        </div>
        <div className="course_info_details_comp_main_contianer_video_container">
          <div className="course_info_details_comp_main_contianer_video_item">
              <div className="course_info_details_comp_main_contianer_video_item_video">
               <img src={banner} alt="" />
                <i onClick={()=>{
                  setShowVideo(!showVideo)
                }} className='fa fa-play'></i>
              </div>
              <h2>Free</h2>
               <button>Enroll Course</button>
               <button>Add to Cart</button>
          </div>
          <div className="course_info_details_comp_main_contianer_include">
            <div className="course_info_details_comp_main_contianer_include_header">
              <h5>What's included</h5>
            </div>
              <div className="course_info_details_comp_main_contianer_include_list">
                <div className="course_info_details_comp_main_contianer_include_list_item">
                  <i className='fa fa-play'></i>
                  <h3>12 hours video</h3>
                </div>
                <div className="course_info_details_comp_main_contianer_include_list_item">
                  <i style={{
                    color:"#37cda9"
                  }}  className='fa fa-certificate'></i>
                  <h3>Certificate</h3>
                </div>
                <div className="course_info_details_comp_main_contianer_include_list_item">
                  <i style={{
                    color:"#37cda9"
                  }}  className= "fa fa-newspaper-o"></i>
                  <h3>12 Article</h3>
                </div>
                <div className="course_info_details_comp_main_contianer_include_list_item">
                  <i style={{
                    color:"#d0cfd0"
                  }}  className= "fa fa-video-camera"></i>
                  <h3>Watch Offline</h3>
                </div>
                <div style={{
                  border:"none"
                }} className="course_info_details_comp_main_contianer_include_list_item">
                  <i style={{
                    color:"#ffaa6f"
                  }}  className= "fa fa-clock-o"></i>
                  <h3>Lifetime access</h3>
                </div>
              </div>
          </div>
        </div>

      </div>
    {
      showVideo ?    <CourseVideo show = {setShowVideo}/>  : ""
    }
  </div>
  )
}

export default CourseInfoDetails