import React from 'react'
import "./Home.css";
import icon1 from '../home/linkedin.jpg'
import icon2 from '../home/Github_logo.png'
import icon3 from '../home/insta.png'
import icon4 from '../home/email.png'





const Home = () => {
  return (
    <>
      <div className="outterHome" id='home'>
        <div className="innerHome">
        <div className="profile"></div>
        <div className="name"> <h1 className='na' >Chithambaraselvan</h1></div>
        <div className="parag"><p>I'm a front-end developer</p></div>
        </div>
      </div>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/chithambaraselvan-p-a4074931a/"><img className='ico1' src={icon1} alt="" /></a>
        <a href="https://github.com/CHITHAMBARASELVAN"><img className='ico2' src={icon2} alt="" /></a>
        <a href="https://www.instagram.com/_chithambu_/?igsh=MWQyNG9iOGxkd2Q0OQ=="><img className='ico3' src={icon3} alt="" /></a>
        <a href="https://mail.google.com/mail/u/0/?login#inbox"><img className='ico4' src={icon4} alt="" /></a>

                
      </div>
    </>
  )
}

export default Home