import React from "react";
import "./Cart.css";
import { BsCaretDown } from "react-icons/bs";
import Addcourse from "../../Components/Addcourse/Addcourse";
import Topbar from "../../Components/TopBar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

 const Cart = () => {
  return (<>
  <Topbar/>
   <Navbar/>
   <div className="cart_main_container">
      <div className="cart_wrapper_container">
        <div className="cart_header_container">
          <h1>Course Cart</h1>
          {/* <span>
            Sort by : price <BsCaretDown />
          </span> */}
        </div>
        <div className="cart_add_course_container">
          <Addcourse />
          <Addcourse />
          <Addcourse />
          <Addcourse />
        </div>
        <div className="cart_discount_coupn_code_container">
          <div className="cart_discount_wrapper_container">
            <div className="cart_discount_input_conatiner">
              <input type="text" placeholder="Discount Code" />
              <button>APPLY</button>
            </div>
          </div>
        </div>
        <div className="cart_Proceed_To_Pay_container">
          <div className="cart_Proceed_To_Pay_wrapper_container">
            <div className="cart_Proceed_To_Pay_button_conatiner">
              <button>Proceed To Pay</button>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default Cart;