
import "./Topbar.css"
const Topbar = () => {
  return (<div className="top_bar_main_container">
      {/* <h3>aausafalam585@gmail.com</h3>
      <h3>7033432213</h3> */}
      <h3><span><i className="fa fa-envelope"></i></span>&nbsp; aausafalam585@gmail.com</h3>
      <h3><span><i className="fa fa-phone"></i></span>&nbsp;7033432213</h3>
      <div className="top_bar_icon_box">
      <a href="https://www.facebook.com/home.php"><i className="fa fa-facebook"></i></a>
      <a href="https://www.twiter.com/"><i className="fa fa-twitter"></i></a>
      <a href="https://www.twiter.com/"><i className="fa fa-dribbble"></i></a>
      <a href="https://www.twiter.com/"><i className="fa fa-linkedin"></i></a>
      </div>

  </div>
  )
}

export default Topbar