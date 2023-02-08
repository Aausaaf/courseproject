import React, { useState } from 'react'
import { useProductContext } from '../../ApiIntegration/CoursesApi/CoursesApi'
import "./Footer.css"
const Footer = () => {


  const {addCustomerEmail,customerEmail,customerEmailError} = useProductContext()

  const [email,setEmail] = useState("")

  const handleSubmit = (data) => {
           addCustomerEmail({
            email})
           console.log(data)
           setEmail("")
  }



  return <footer className="padding_4x">
  <div className="flex">
    <section className="flex-content padding_1x">
      <h3>Top Products</h3>
      <a href="/courselist">React JS</a>
      <a href="/courselist">Angular JS</a>
      <a href="#">Power Tools</a>
      <a href="#">Marketing Service</a>
    </section>
    <section className="flex-content padding_1x">
      <h3>Quick Links</h3>
      <a href="/">Home</a>
      <a href="/courselist">Courses List</a>
      <a href="/about">About Us</a>
      <a href="#">Terms of Service</a>
    </section>
    <section className="flex-content padding_1x">
      <h3>Features</h3>
      <a href="#">Jobs</a>
      <a href="#">Brand Assets</a>
      <a href="#">Investor Relations</a>
      <a href="#">Terms of Service</a>
    </section>
    <section className="flex-content padding_1x">
      <h3>Resources</h3>
      <a href="#">Guides</a>
      <a href="#">Research</a>
      <a href="#">Experts</a>
      <a href="#">Agencies</a>
    </section>
    <section className="flex-content padding_1x">
      <h3>Newsletter</h3>
      <p>You can trust us. we only send promo offers,</p>
      <fieldset className="fixed_flex">
        <form onSubmit={(e)=>{
          e.preventDefault();
          handleSubmit(email)
        }} action="">
        <input onChange={(e)=>{
          setEmail(e.target.value)
        }} required type="email" value={email} name="newsletter" placeholder="Your Email Address"/>
        <button type='submit' className="btn btn_2">Subscribe</button>
        </form>
      </fieldset>
    </section>
  </div>
  <div className="flex">
    <section className="flex-content padding_1x">
    </section>
    <section className="flex-content padding_1x">
      <a href="#"><i className="fa fa-facebook"></i></a>
      <a href="#"><i className="fa fa-twitter"></i></a>
      <a href="#"><i className="fa fa-dribbble"></i></a>
      <a href="#"><i className="fa fa-linkedin"></i></a>
    </section>
  </div>
</footer>
  
}

export default Footer