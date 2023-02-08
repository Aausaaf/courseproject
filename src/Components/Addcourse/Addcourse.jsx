import React, { useState } from "react";
import "./Addcourse.css";
import img from "../../Assets/courseimg.png";
import { AiFillDelete } from "react-icons/ai";
// AiFillDelete
const Addcourse = () => {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }
  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }
  const data = [
    {
      title: "title",
    },
    {
      duration: "duration",
    },
    {
      price: "$499.00",
    },
  ];
  return (
    <div className="Addcourse_main_container">
      <div className="Addcourse_wrapper_container">
        <div className="Addcourse_image_detail_wrapper_container">
          <div className="Addcourse_image_container">
            <img src={img} alt="...Loading" />
          </div>
          <div className="Addcourse_details_container">
            <h4>Title</h4>
            <h4>Duration</h4>
          </div>
        </div>
        <div className="Addcourse_addordeleteitem_container">
          <button onClick={decrement}>-</button>
          <div className="Addcourse_addordeleteitem_wrapeer_container">
            <span>{count}</span>
          </div>
          <button onClick={increment}>+</button>
        </div>
        <div className="Addcourse_price_container">
          <h3>$499.00</h3>
        </div>
        <div className="Addcourse_deleteitem_container">
          <AiFillDelete />
        </div>
      </div>
   
    </div>
  );
};

export default Addcourse;
