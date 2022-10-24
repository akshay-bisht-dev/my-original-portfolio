import React from 'react'
import '../components/About.css'
import aboutImg from '../img/about-pic.png'

const About = () => {
  return (
    <>
    <div className="about">
      <div className="about-data">
          <img src={aboutImg} alt="about-img" /> <br /><br />
        <p>Let me introduce myself, I am a frontend web developer who has 1 years of experience in this Field. I am very experienced in various UI develop coding styles and I have made various projects using HTML5, CSS3, Bootstrap, SASS, Material UI, React JS and so on. I had completed 8 weeks Web Development course from Internshala and also completed 6 month Internship of UI Development (WFH) in Software Company. I'm Still now Working in this company. That's all about me. Thank You!!! </p>

        <p>- AKSHAY BISHT -</p>
      </div>
    </div>
    </>
  )
}

export default About