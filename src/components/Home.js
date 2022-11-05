import React from 'react'
import '../components/Home.css'
import homeImg from '../img/home.png'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  const navigate = useNavigate();
  
  const goToContact = () => {
    navigate("/contact")
  } 
  return (
    <>
    <div className="home">
    <div className="home-data">
      <div className="home-left">
        <h3>HEY THERE!</h3>
        <h1>I'M AKSHAY BISHT</h1>
        <p>I'm Web Developer. I am Bachelor of Technology student and my branch Computer Science & Engineering. I'm in final year. I have a lots of Skill such as : HTML5, CSS3, Bootstrap, SASS, Material UI,JavaScript, ReactJS, Git and so on. </p>
        <button onClick={() => goToContact()}>HIRE ME</button>
      </div>
      <div className="home-right">
        <img src={homeImg} alt="my-profile" />
      </div>
      </div>
    </div>

    </>
  )
}

export default Home
