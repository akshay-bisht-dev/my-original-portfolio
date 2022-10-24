import React from 'react'
import '../components/Skills.css'

const Skills = () => {
  return (
    <>
      <div class="skills">
        <h1>My Skills</h1>

        <div class="skill-list">
          <li>
            <h3>HTML5</h3>
            <span class="bar"><span class="html"></span></span>
          </li>

          <li>
            <h3>CSS3</h3>
            <span class="bar"><span class="css3"></span></span>
          </li>

          <li>
            <h3>Bootstrap</h3>
            <span class="bar"><span class="boot"></span></span>
          </li>

          <li>
            <h3>SASS</h3>
            <span class="bar"><span class="tail"></span></span>
          </li>

          <li>
            <h3>Material UI</h3>
            <span class="bar"><span class="material-ui"></span></span>
          </li>

          <li>
            <h3>JAvaScript</h3>
            <span class="bar"><span class="js"></span></span>
          </li>

          <li>
            <h3>React Js</h3>
            <span class="bar"><span class="react"></span></span>
          </li>

          <li>
            <h3>Rest API</h3>
            <span class="bar"><span class="restapi"></span></span>
          </li>

          <li>
            <h3>GIT</h3>
            <span class="bar"><span class="git"></span></span>
          </li>
        </div>
      </div>
    </>
  )
}

export default Skills