import axios from "axios";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { BASE_URL } from "../../env";

export const MongoDbAuthContext = createContext()

export function useMongoDbAuth ()
{
    return useContext(MongoDbAuthContext)
}




  export function MongoDBAuthProvider({children}){
      
    const [signupErrors,setSignUpErrors] = useState("")
    const [loginErrors,setLoginErrors] = useState("")
    const [verifyOtpErrors,setVerifyOtpErrors] = useState("")
    const [forgotPasswordErrors,setForgotPasswordErrors] = useState("")
    const [forgotPasswordVerifyOtpErrors,setForgetPasswordVerifyOtpErrors] = useState("")
    const [changePasswordErrors,setChangePasswordErrors] = useState("")
    const [loggedInErrors,setloggedInErrors] = useState("")
    const [contectUSErrors,setContectUsErrors] = useState("")
    const [changePasswordProfilePageError,setChangePasswordProfilePageError] = useState("")
    const [DisplayUserName,setDisplayUserName] = useState("")
    const [navbarUsername,setNavbarUsername] = useState("")
    const [loading,setLoading] = useState(false)
    const [signupDatas,setSignUpData] = useState("")
    const [loginDatas,setLoginData] = useState("")
    const [verifyOtpData,setVerifyOtpData] = useState("")
    const [forgotPasswordData,setForgotPasswordData] = useState("")
    const [forgotPasswordVerifyOtpData,setForgetPasswordVerifyOtpData] = useState("")
    const [changePasswordData,setChangePasswordData] = useState("")
    const [loggedInData,setLoggedInData] = useState("")
    const [contectUsData,setContectUsData] = useState("") 
    const [changePasswordProfilePageData,setChangePasswordProfilePageData] = useState("") 
    const [getContectInfoData,setContectUsInfoData] = useState({})
     const navigate = useNavigate()

      const [isnavigateVerifyPage,setnavigateVerifypage] = useState(false)
      const [isnavigateSignupPage,setnavigateSignuppage] = useState(false)
      const [isnavigateForgetPage,setnavigateForgetpage] = useState(false)
      const [isnavigateChangePage,setnavigateChangepage] = useState(false)
      const [isnavigateVerifyforgotPasswordPage,setnavigateVerifyForgetPasswordpage] = useState(false)
      
      const [landingPageButtontext, setLandingPageButtontext] = useState("Overview");
      const [isLoggedIn,setIsLoggedIn] = useState(false)
      const [showPopUp,setShowPopUp] = useState(false)
      

     const getSignup  = (data) => {
          //  setLoading(true)
        axios.post(`${BASE_URL}/postsignupdata`,data)
        .then((res)=>{
      
          console.log(res.data)
          setSignUpData(res.data) 
           setnavigateVerifypage(true)
           setnavigateSignuppage(false)
           setLoading(false)
            localStorage.setItem("Verifyemail",JSON.stringify(data.email))
            navigate("/verification")
            
        }).catch((err)=>{
      
          console.log(err)
          setSignUpErrors(err.response.data.message)
          
        })
      
      }
      
       const getVerifyOtp = (data) => {

         
          axios.post(`${BASE_URL}/verifyotp`,data)
          .then((res)=>{
            
              console.log(res.data)
              setVerifyOtpData(res.data)
              localStorage.setItem("UserToken",JSON.stringify(res.data.token))
              setLandingPageButtontext("Analyze")
               setNavbarUsername(res.data.user.username)
               setIsLoggedIn(true)
              navigate("/")

            }).catch((err)=>{
          
              console.log(err)
              setVerifyOtpErrors(err.response.data.message)
              
            })
      }
      
       const getLogin = (data) => {
        
          axios.post(`${BASE_URL}/login`,data)
          .then((res)=>{
      
              console.log(res.data)
              setLoginData(res.data)
              localStorage.setItem("UserToken",JSON.stringify(res.data.token))
              setLandingPageButtontext("Analyze")
              setNavbarUsername(res.data.name)
              setIsLoggedIn(true)
              navigate("/")
          
            }).catch((err)=>{
          
              console.log(err)
              setLoginErrors(err.response.data.message)
          
            })
      }
      
       const getLoggedIn = (token) => {
      
          const config = {
      
            headers: {
              Authorization: `Bearer ${token}`,
            },
      
          };

          axios
            .get(`${BASE_URL}/loggedin`, config)
            .then((res) => {
      
              console.log(res.data);
               setLoggedInData(res.data)
               setLandingPageButtontext("Analyze")
               setNavbarUsername(res.data.username)
               setIsLoggedIn(true)

            })
            .catch((err) => {
              
              console.log(err);
              setloggedInErrors(err.response.data.message)
      
            });
      
        };
      
      
         const ForgotPassword = (data) => {
      
          axios.post(`${BASE_URL}/forgotpassword`,data)
          .then((res) => {
      
              console.log(res.data);
             setForgotPasswordData(res.data)
             setnavigateVerifyForgetPasswordpage(true)
             setnavigateForgetpage(false)
             localStorage.setItem("forgetPasswordToken",JSON.stringify(res.data.email))

            })
            .catch((err) => {
              
              console.log(err);
              setForgotPasswordErrors(err.response.data.message)
      
            });
        }  
      
         const forgetPasswordOtpVerify = (data) => {
      
          axios.post(`${BASE_URL}/verifyforgetpasswordotp`,data)
          .then((res) => {
      
              console.log(res.data);
              setForgetPasswordVerifyOtpData(res.data)
               setnavigateChangepage(true)
               setnavigateVerifyForgetPasswordpage(false)
               localStorage.setItem("forgetPasswordOtp",JSON.stringify(res.data.otp))

            })
            .catch((err) => {
              
              console.log(err);
              setForgetPasswordVerifyOtpErrors(err.response.data.message)
      
            });
        
        }
      
         const getChangePassword = (data) => {
      
          axios.post(`${BASE_URL}/changepassword`,data)
          .then((res) => {
      
              console.log(res.data);
             setChangePasswordData(res.data)
             localStorage.setItem("UserToken",JSON.stringify(res.data.token))
              setLandingPageButtontext("Analyze")
               setNavbarUsername(res.data.user.username)
               setIsLoggedIn(true)
             navigate("/")

            })
            .catch((err) => {
              
              console.log(err);
              setChangePasswordErrors(err.response.data.message)
      
            });
        
        }

        const postContectUsData = (data) => {

          axios.post(`${BASE_URL}/postcontectmessage`,data)
          .then((res)=>{

            console.log(res.data)
            setContectUsData(res.data)

            setShowPopUp(true)
          }).catch((err)=>{

            console.log(err)
            setContectUsErrors(err)

          })
        }

        const getChangePasswordFromProfilePage = (data) => {
           
          let token =  JSON.parse(localStorage.getItem("UserToken"))

          const config = {
      
            headers: {
              Authorization: `Bearer ${token}`,
            },
      
          };

          axios.post(`${BASE_URL}/changepasswordfromprofilepage`,data,config)
          .then((res)=>{

            console.log(res.data)
            setChangePasswordProfilePageData(res.data.message)

          }).catch((err)=>{

            console.log(err.response.data.message)
            setChangePasswordProfilePageError(err.response.data.message)

          })
        }

       const getContectInfo = () => {
        axios.get(`${BASE_URL}/contectinfo`).
        then((res)=>{
       //   console.log(res.data[0])
          setContectUsInfoData(res.data[0])
        }).catch((error)=>{
          console.log(error)
        })
       }




        return (
            <MongoDbAuthContext.Provider 
            value={{

               getSignup,
               getVerifyOtp,
               getLogin,
               getLoggedIn,
               ForgotPassword,
               forgetPasswordOtpVerify,
               getChangePassword,
               setSignUpErrors,
               setLoginErrors,
               setVerifyOtpErrors,
               setForgetPasswordVerifyOtpErrors,
               setChangePasswordErrors,
               setForgotPasswordErrors,
               setDisplayUserName,
               postContectUsData,
               getChangePasswordFromProfilePage,
               getContectInfo,
               
              signupDatas,
              signupErrors,
              verifyOtpData,
              verifyOtpErrors,
              loginDatas,
              loginErrors,
              forgotPasswordData,
              contectUsData,
              forgotPasswordErrors,
              forgotPasswordVerifyOtpData,
              forgotPasswordVerifyOtpErrors,
              changePasswordData,
              changePasswordErrors,
              contectUSErrors,
              loggedInData,
              changePasswordProfilePageData,
              changePasswordProfilePageError,
              loggedInErrors,
              DisplayUserName,
              getContectInfoData,
              
              isnavigateVerifyPage,
              isnavigateChangePage,
              isnavigateForgetPage,
              isnavigateSignupPage,
              isnavigateVerifyforgotPasswordPage,

              setnavigateSignuppage,
              setnavigateForgetpage,
               loading,
              landingPageButtontext,
              isLoggedIn,
              setIsLoggedIn,
              setLandingPageButtontext,
              showPopUp,
              setShowPopUp,
              navbarUsername,
              setChangePasswordProfilePageError,
              setChangePasswordProfilePageData
            }}>
                {children}
            </MongoDbAuthContext.Provider>
        )

  } 