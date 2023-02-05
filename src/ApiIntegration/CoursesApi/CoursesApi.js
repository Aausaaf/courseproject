import axios from "axios"
import { createContext, useContext, useState } from "react"
import { BASE_URL } from "../../env"


export const ProductContext = createContext()

export function useProductContext ()
{
    return useContext(ProductContext)
}


export function ProductProvider ({ children }) {
    const [CourseSiksha, setCourseSiksha] = useState([])
    const [CourseSikshaError, setCourseSikshaError] = useState("")
    const [CourseVidya, setCourseVidya] = useState([])
    const [CourseVidyaError, setCourseVidyaError] = useState("")
    const [customerEmail,setCustomerEmail] = useState({})
    const [customerEmailError,setCustomerEmailError] = useState({})
    const [getPerticularCourseData, setGetPerticularCourseData] = useState({})
    const [getPerticularCourseErrorData, setGetPerticularCourseErrorData] = useState({})

    const getCourseSiksha = () => {
        axios.get(`${BASE_URL}/getcourse/CYBER SHIKSHA`)
        .then((response) => {
            console.log(response.data)
            setCourseSiksha(response.data)
        }).catch((error) => {
            console.log(error)
            setCourseSikshaError(error)

        })
    }

   
    const getCourseVidya = () => {
        axios.get(`${BASE_URL}/getcourse/CYBER VIDYA`)
        .then((response) => {
            console.log(response.data)
            setCourseVidya(response.data)
        }).catch((error) => {
            console.log(error)
            setCourseVidyaError(error)

        })
    }

     
    const addCustomerEmail = (data) => {
        axios.post(`${BASE_URL}/addemail`,data)
        .then((response) => {
             setCustomerEmail(response.data)
        }).catch((error) => {
            console.log(error)
            setCustomerEmailError(error.message)
            
        })
    }
    
    const getPerticularCourse = (id) => {
        axios.get(`${BASE_URL}/getcourses/${id}`)
        .then((response) => {
            //console.log(response.data)
            setGetPerticularCourseData(response.data)
        }).catch((error) => {
            console.log(error)
            setGetPerticularCourseErrorData(error)

        })
    }


    return (
        <ProductContext.Provider
         value={{


          
             getCourseSiksha,
             getCourseVidya,
             addCustomerEmail,
             getPerticularCourse,
             CourseSiksha,
             CourseSikshaError,
             CourseVidya,
             CourseVidyaError,
             customerEmail,
             customerEmailError,
             getPerticularCourseData,
             getPerticularCourseErrorData


             }}
         >
            {children}
        </ProductContext.Provider>)
}