import React from 'react'
import '../components/Internship.css'

const internshipData = [
  {
    id: 1,
    name: "Web Development",
    img: "https://wallpapercave.com/wp/wp9641875.jpg",
    desc: "8 Weeks Training Course",
    title: "Internshala",
    skills: "HTML, CSS, JS, Bootstrap, React"
  },
  {
    id: 2,
    name: "UI Developer",
    img: "https://cdn.mindmajix.com/courses/ui-developer-training.png",
    desc: "6 Month Internship",
    title: "MNF Pvt. Ltd.",
    skills: "HTML, CSS, JS, Bootstrap, React"
  }
]

const Internship = () => {
  return (
    <>
    <div className="internship">
      <div className="internship-data">
      {
        internshipData.map((int, index) => {
              return (
                <div className="card" key={index}>

                  <img src={int.img} alt="my love" />

                  <div className="intern">
                    <div className='intern-data'>
                      <h3 className="intern-heading">{int.name}</h3>
                      <h3 className="intern-heading">{int.desc}</h3>
                      <h3 className="intern-heading">{int.title}</h3>
                      <p className='intern-para'>{int.skills}</p>
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

export default Internship