import React from "react";
import "./Aboutus.css";
import img1 from "../../Assets/aboutusimg1.jpg";
import img2 from "../../Assets/aboutusimg2.jpg";
import img3 from "../../Assets/aboutusimg3.jpg";
import img4 from "../../Assets/aboutusimg4.jpg";
import img5 from "../../Assets/aboutusimg5.jpg";
import img6 from "../../Assets/aboutusimg6.jpg";
import cap from "../../Assets/CAP.png";
import linechart from "../../Assets/LINECHART.png";
import people from "../../Assets/people.png";
import avatar1 from "../../Assets/avatar-1.jpg";
import avatar2 from "../../Assets/avatar-2.jpg";
import avatar3 from "../../Assets/avatar-3.jpg";
import avatar4 from "../../Assets/avatar-4.jpg";
import avatar5 from "../../Assets/avatar-5.jpg";
import avatar6 from "../../Assets/avatar-6.jpg";
import avatar7 from "../../Assets/avatar-7.jpg";
import avatar8 from "../../Assets/avatar-8.jpg";
import avatar9 from "../../Assets/avatar-9.jpg";
import avatar10 from "../../Assets/avatar-10.jpg";
import avatar11 from "../../Assets/avatar-11.jpg";
import avatar12 from "../../Assets/avatar-12.jpg";
import Topbar from "../../Components/TopBar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
const Aboutus = () => {
  return (<>
        <Topbar/>
        <Navbar/>
   <div className="aboutus_Main_Container">
      <div className="aboutus_header_wrapper_container">
        <div className="aboutus_header_container">
          <h1>
            Hi there,we're <span>TG</span>
          </h1>
          <h2>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
          </h2>
          <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slight
          </p>
        </div>
      </div>
      <div className="aboutus_image_conatiner">
        <div className="aboutus_image_wrapper_container1">
          <img className="abutusimg1" src={"https://picsum.photos/seed/picsum/200/300"} alt="...Loading" />
          <img className="abutusimg2" src={"https://picsum.photos/id/125/1500/1000"} alt="...Loading" />
          <img className="abutusimg3" src={"https://picsum.photos/id/122/4147/2756"} alt="...Loading" />
        </div>
        <div className="aboutus_image_wrapper_container2">
          <img className="abutusimg4" src={img4} alt="...Loading" />
          <img className="abutusimg5" src={"https://picsum.photos/id/142/4272/2848"} alt="...Loading" />
          <img className="abutusimg6" src={"https://picsum.photos/id/176/2500/1662"} alt="...Loading" />
        </div>
      </div>
      <div className="aboutus_global_reach_conatiner">
        <div className="aboutus_global_reach_wrapper_container">
          <h2>Our global reach</h2>
          <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature 
          from 45 BC,
          </p>
        </div>
        <div className="aboutus_global_reach_info_conatainer">
          <div className="aboutus_global_reach_info_wrapper_container">
            <div className="info_container">
              <h1>0M</h1>
              <p>LEARNERS</p>
            </div>
            <div className="info_container">
              <h1>0k</h1>
              <p>INSTRUCTOR</p>
            </div>
            <div className="info_container">
              <h1>0K</h1>
              <p>COURSES</p>
            </div>
            <div className="info_container">
              {" "}
              <h1>0M</h1>
              <p>COURSE ENROLLMENTS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutus_our_core_values_container">
        <div className="aboutus_our_core_values_wrapper_container">
          <div className="aboutus_core_values_header">
            <h1> Our core values</h1>
            <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
            </p>
          </div>
          <div className="aboutus_core_values_card_container">
            <d  iv className="core_values_card_1">
              <div className="core_values_inner_card1">
                <img src={cap} alt="...Loading" />
                <h3>Make Education Accessible</h3>
                <p>
                  Quis cursus turpis in habitant sagittis amet dolor malesuada
                  ut. Volutpat nunc id blanvolutpat nunc.
                </p>
              </div>
            </d>
            <div className="core_values_card_1">
              <div className="core_values_inner_card2">
                <img src={people} alt="...Loading" />
                <h3>Learn and Grow</h3>
                <p>
                  Quis cursus turpis in habitant sagittis amet dolor malesuada
                  ut. Volutpat nunc id blanvolutpat nunc.
                </p>
              </div>
            </div>
            <div className="core_values_card_1">
              <div className="core_values_inner_card3">
                <img src={linechart} alt="...Loading" />
                <h3>Make Education Accessible</h3>
                <p>
                  Quis cursus turpis in habitant sagittis amet dolor malesuada
                  ut. Volutpat nunc id blanvolutpat nunc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutus_our_team_conatiner">
        <div className="aboutus_our_team_wrapper_container">
          <div className="aboutus_our_team_header_container">
            <h2>Our Team</h2>
            <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
            </p>
            <button>Openings</button>
          </div>
          <div className="aboutus_our_team_image_conatiner">
            <div className="our_team_image_conatiner1">
              <img src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} alt="...Loading" />
              <img src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} alt="...Loading" />
              <img src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} alt="...Loading" />
              <img src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} alt="...Loading" />
              <img src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} alt="...Loading" />
              <img src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} alt="...Loading" />
            </div>
            <div className="our_team_image_conatiner2">
              <img src={"https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699__340.png"} alt="...Loading" />
              <img src={"https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699__340.png"} alt="...Loading" />
              <img src={"https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699__340.png"} alt="...Loading" />
              <img src={"https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699__340.png"} alt="...Loading" />
              <img src={"https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699__340.png"} alt="...Loading" />
              <img src={"https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699__340.png"} alt="...Loading" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <Footer/>
    </>
   
  );
};

export default Aboutus;
