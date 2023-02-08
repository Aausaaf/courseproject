import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useMongoDbAuth } from '../../Components/MongoDBAuthContext/AuthContext'
import "./SignUp.css"
import icon from "../../Assets/navbarIcon.png"
import GoogleLogin from 'react-google-login';
const SignUp = () => {

  const [signupData,setSignupData] = useState({
    name:"",
    username:"",
    email:"",
    password:"",
    confirmPassword:""
  })

 const [checkPassword,setCheckPassword] = useState(false)
 const [errorApi,setErrorApi] = useState(false)
 const {  getSignup,loading, signupDatas,signupErrors, setSignUpErrors} = useMongoDbAuth()

const handleSubmit = () => {
    if(signupData.password != signupData.confirmPassword)
    {
     return  setCheckPassword(true)
    }
    else
    {
         getSignup(
            {
                name:signupData.name,
                password:signupData.password,
                email:signupData.email,
                username:signupData.username
            }
         )
    }

}



const responseGoogle = (response) => {
    console.log(response);
  }


  const navigate = useNavigate()

  return (<div className="signup_page_main_container">
        {
            loading ? <div className="buffer_body">
                
            </div> : <div className="signup_page_body_contianer">
         <img style={{
            width:"53px",
            height:"53px"
         }} src={icon} alt="" />

            {/* <svg xmlns="http://www.w3.org/2000/svg" width="53" height="56" viewBox="0 0 53 56" fill="none"><g clip-path="url(#clip0)"><path d="M19.6372 32.2298C19.6372 32.8476 19.3055 33.3483 18.8963 33.3483C18.487 33.3483 18.1553 32.8476 18.1553 32.2298C18.1553 31.6121 18.487 31.1113 18.8963 31.1113C19.3055 31.1113 19.6372 31.6121 19.6372 32.2298Z" fill="#754FFE"></path><path d="M33.3452 32.2298C33.3452 32.8476 33.6769 33.3483 34.0862 33.3483C34.4954 33.3483 34.8271 32.8476 34.8271 32.2298C34.8271 31.6121 34.4954 31.1113 34.0862 31.1113C33.6769 31.1113 33.3452 31.6121 33.3452 32.2298Z" fill="#754FFE"></path><path d="M28.0966 39.5002C26.8617 40.4944 25.1945 39.9973 24.7622 39.5002C24.8857 40.1216 25.355 40.9915 26.4912 40.9915C27.6273 40.9915 28.0349 39.9973 28.0966 39.5002Z" fill="#754FFE"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.9189 44.0288C23.9702 43.7942 24.2008 43.6459 24.434 43.6975L28.7969 44.6642C29.03 44.7158 29.1774 44.9479 29.126 45.1825C29.0747 45.4171 28.8441 45.5654 28.611 45.5138L24.2481 44.5471C24.015 44.4955 23.8676 44.2634 23.9189 44.0288Z" fill="#754FFE"></path><path d="M26.4295 54.3514C17.8342 54.4508 11.5277 46.4804 9.44886 42.4828C9.14014 41.8891 8.89317 41.7992 8.70792 41.9235C8.41153 42.1224 8.62556 42.5242 8.70789 42.7313C9.74525 45.1672 11.1572 47.2261 11.7335 47.951C9.7082 51.3314 9.03721 54.7035 8.95488 55.967C12.314 52.6364 15.706 52.7979 16.9821 53.295C26.9852 58.5147 32.5426 54.8485 35.6917 53.295C38.211 52.0522 42.134 54.4757 43.7806 55.8428C43.5831 52.7606 41.9282 49.3802 41.1255 48.0753C42.4222 46.3354 43.4719 44.2227 44.0276 43.1663C44.4722 42.3212 44.3364 41.9856 44.2129 41.9235C43.9165 41.7744 43.5542 42.2342 43.4102 42.4828C42.4839 44.0362 37.1736 54.2271 26.4295 54.3514Z" fill="#754FFE"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M47.5211 10.5107C50.621 14.4638 49.1828 22.0297 47.7604 25.6526C47.7735 25.6569 47.7866 25.6612 47.7997 25.6657L47.7706 25.6667L44.3193 25.4368C44.3193 25.431 44.319 25.4232 44.3193 25.4193C44.9913 17.6047 44.218 14.4755 43.4641 13.9454C34.4375 20.4736 26.3748 18.3986 23.8827 17.7572C23.2042 17.5826 22.9386 17.5142 23.179 17.7548C23.9116 18.4878 25.5786 19.3674 26.7672 19.9945L26.7681 19.995C27.0374 20.1371 27.282 20.2662 27.4857 20.3777C17.687 20.491 13.7477 15.7702 12.5895 14.3823C12.4714 14.2408 12.3822 14.1339 12.3187 14.0703C11.7535 13.5048 8.57378 11.5723 7.57513 15.2569C6.60783 18.8257 7.22043 23.0116 7.54381 25.2212C7.57185 25.4129 7.57517 25.4169 7.57517 25.4793L4.39198 25.6667L4.38368 25.6663C0.151882 15.8738 3.33276 10.3845 6.202 8.32497C6.202 3.5164 12.069 -1.1673 19.4965 0.518783C29.0119 3.23262 31.907 2.33336 35.3126 1.27552C36.6875 0.848462 38.1456 0.39555 40.1561 0.144098C49.3868 -1.0104 52.4935 5.05678 52.8888 8.20007C51.3409 7.3008 48.6654 9.32415 47.5211 10.5107ZM24.0104 3.12773C21.6178 2.29507 15.4532 1.41333 12.2138 4.75141C11.4973 5.48981 10.6535 6.87468 10.6535 6.87468C10.6535 6.87468 9.21791 9.49748 8.09443 8.37343C6.97095 7.24938 9.5924 3.87712 11.6521 2.87793C13.7118 1.87874 18.8299 0.130159 24.0104 3.12773Z" fill="#754FFE"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19.7257 28.1086H5.94171C4.90362 28.1086 4.06208 28.9288 4.06208 29.9406V36.1692C4.06208 37.181 4.90362 38.0012 5.94171 38.0012H19.7257C20.7638 38.0012 21.6053 37.181 21.6053 36.1692V29.9406C21.6053 28.9288 20.7638 28.1086 19.7257 28.1086ZM5.94171 25.666C3.5195 25.666 1.55591 27.5798 1.55591 29.9406V36.1692C1.55591 38.53 3.5195 40.4438 5.94171 40.4438H19.7257C22.1479 40.4438 24.1115 38.53 24.1115 36.1692V29.9406C24.1115 27.5798 22.1479 25.666 19.7257 25.666H5.94171Z" fill="#754FFE"></path><path d="M0 29.444C0 29.0758 0.329895 28.7773 0.736842 28.7773H1.59649C2.00344 28.7773 2.33333 29.0758 2.33333 29.444V31.2218C2.33333 31.59 2.00344 31.8885 1.59649 31.8885H0.736842C0.329895 31.8885 0 31.59 0 31.2218V29.444Z" fill="#754FFE"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M33.0127 28.1086H46.3213C47.3236 28.1086 48.1362 28.9288 48.1362 29.9406V36.1692C48.1362 37.181 47.3236 38.0012 46.3213 38.0012H33.0127C32.0104 38.0012 31.1979 37.181 31.1979 36.1692V29.9406C31.1979 28.9288 32.0104 28.1086 33.0127 28.1086ZM46.3213 25.666C48.66 25.666 50.5559 27.5798 50.5559 29.9406V36.1692C50.5559 38.53 48.66 40.4438 46.3213 40.4438H33.0127C30.674 40.4438 28.7781 38.53 28.7781 36.1692V29.9406C28.7781 27.5798 30.674 25.666 33.0127 25.666H46.3213Z" fill="#754FFE"></path><path d="M52.8889 29.444C52.8889 29.0758 52.4491 28.7773 51.9065 28.7773H50.7603C50.2177 28.7773 49.7778 29.0758 49.7778 29.444V31.2218C49.7778 31.59 50.2177 31.8885 50.7603 31.8885H51.9065C52.4491 31.8885 52.8889 31.59 52.8889 31.2218V29.444Z" fill="#754FFE"></path><path d="M29.5559 31.1673C29.5559 30.7071 29.2003 30.334 28.7616 30.334H24.128C23.6893 30.334 23.3337 30.7071 23.3337 31.1673V33.3895C23.3337 33.8498 23.6893 34.2229 24.128 34.2229H28.7616C29.2003 34.2229 29.5559 33.8498 29.5559 33.3895V31.1673Z" fill="#754FFE"></path></g><defs><clipPath id="clip0"><rect width="53" height="56" fill="white"></rect></clipPath></defs></svg>  */}
            <h1>Sign up</h1>
            <h2>Already have an account ? <span onClick={()=>{
               navigate("/login")
            }}>Sign in</span></h2>
            <div style={{
               visibility:signupErrors? "visible" : "hidden"
               , marginBottom:signupErrors? "0px":"",
               marginTop:signupErrors? "6px":""
            }}  className="error">
               <p>{signupErrors}</p>
            </div>
            <form  onSubmit={(e)=>{
               setSignUpErrors("")
               e.preventDefault()
               console.log(signupData)
               handleSubmit()
               
            }} >
               <div className="inputbox">
                   <p>Name</p>
                   <input value={signupData.name} onChange={(e)=>{
                       setSignupData({...signupData,name:e.target.value})
                       setSignUpErrors("")
   
                   }} type="text" placeholder='First Name' required />
               </div>
               <div className="inputbox">
                   <p>Username</p>
                   <input value={signupData.username} onChange={(e)=>{
                       setSignupData({...signupData,username:e.target.value})
                        setSignUpErrors("")
   
                   }} type="text" placeholder='Username' required />
               </div>
               <div className="inputbox">
                   <p>Email</p>
                   <input value={signupData.email} onChange={(e)=>{
                       setSignupData({...signupData,email:e.target.value})
                        setSignUpErrors("")
                   }} type="email" placeholder='Email' required />
               </div>
               <div className="inputbox">
                   <p>Password</p>
                   <input value={signupData.password} onChange={(e)=>{
                       setSignupData({...signupData,password:e.target.value})
                        setSignUpErrors("")
                        setCheckPassword(false)
                   }} type="password" placeholder='Password' required />
               </div>
               <div className="inputbox">
                   <p >Confirm Password</p>
                   <input style={{
                       border:checkPassword? "2px solid red":""
   
                   }} value={signupData.confirmPassword} onChange={(e)=>{
                       setSignupData({...signupData,confirmPassword:e.target.value})
                        setSignUpErrors("")
                        setCheckPassword(false)
   
                   }} type="text" placeholder='Confirm Password' required />
               </div>
   
               <button>Sign up</button>
               {/* <GoogleLogin
      clientId="561696235167-1n5kcj8u8tdn4gvim49d192oj777a2ab.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    /> */}
            </form>
          </div>
        }
  </div>
  )
}

export default SignUp