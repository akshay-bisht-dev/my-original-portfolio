import React from 'react'
import '../components/Projects.css'
import projectData from './projects.json'


const Projects = () => {
  return (
    <>
      <div className='project' id='project'>
        <div className='project-items'>

          {
            projectData.map((pro, index) => {
              return (
                <div className="card" key={index}>

                  <img src={pro.img} alt="my love" />

                  <div className="pro">
                    <div className='pro-data'>
                      <h3 className="pro-heading">{pro.name}</h3>
                      <p className='pro-para'>{pro.skills}</p>
                      <button><a href={pro.url} target="_blank">Visit Now</a></button>
                    </div>
                  </div>

                </div>
              )
            })
          }
        </div>
      </div>




    </>
  )
}

export default Projects