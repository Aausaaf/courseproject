
export  const handleSubmit = async(seterrorEmail,email,setForgotPasswordErrors,ForgotPassword) => {

    if (email.length == 0) {
      seterrorEmail("Please Provide Email");
    } else if (!email.includes("@") || !email.includes(".")) {
      console.log("a");
      seterrorEmail("Please Enter Correct Email");
    } else {
      try {
        seterrorEmail("");
        setForgotPasswordErrors("");

        ForgotPassword({
          email:email
        })
      } catch (error) {
        
        console.log(error);
      }
    }
  }

export async function GetLogin(email,password,seterrorEmail,seterrorPassword,setLoginErrors,getLogin) {

    // console.log(email, password);
    if (email.length == 0) {

      seterrorEmail("Please Provide Email");

    } else if (password.length == 0) {

      seterrorPassword("Please Provide Password");

    } else if (!email.includes("@") || !email.includes(".")) {

      seterrorEmail("Please Enter Correct Email");

    } else if (password.length < 8) {

      seterrorPassword("please enter Atleast 8 digit password");

    } else {

      try {

        seterrorEmail("");
        seterrorPassword("");
        setLoginErrors("")
        getLogin({

          email:email,
          password:password

        })
      } catch (error) {

        console.log(error);
        
      }
    }
  }



export  async function CreateUser({seterrorEmail,password,DisplayUserName,email,seterrorPassword,checkboxactive,setcheckboxerror,getSignup,seterrorUsername,setSignUpErrors,setDisplayUserName}) {
    if (email.length == 0) {

      seterrorEmail("Please Provide Email");

    } else if (DisplayUserName.length == 0) {

      seterrorUsername("Please Provide Username");

    } else if (password.length == 0) {

      seterrorPassword("Please Provide Password");

    } else if (!email.includes("@") || !email.includes(".")) {

      seterrorEmail("Please Enter Correct Email");

    } else if (password.length < 8) {

      seterrorPassword("please enter Atleast 8 digit password");

    } else if (!checkboxactive) {

      setcheckboxerror("red");

    } else {
      try {
        
        seterrorEmail("");
        setSignUpErrors("")
        seterrorPassword("");
        setDisplayUserName(DisplayUserName);
        getSignup({

          username:DisplayUserName,
          email:email,
          password:password

        })
        
      
      } catch (error) {
       
        console.log(error);

      }
    }
  }


 export  const handleChangePassword = ({password,confirmpassword,seterrorConfirmPassword,seterrorPassword,getChangePassword}) => {
   
  if(password.length == 0)
    {
      return seterrorPassword("Please set password")
    }
    else if(password != confirmpassword) 
    {
     return  seterrorConfirmPassword("Confirm Password is Incorrect")
    }
    else if (password.length < 8 )
    {
       return seterrorPassword("Password should be atlest 8 digit")
    }
    getChangePassword({

      otp:JSON.parse(localStorage.getItem("forgetPasswordOtp")),
      email:JSON.parse(localStorage.getItem("forgetPasswordToken"))
      ,password:password
      
    })
   }