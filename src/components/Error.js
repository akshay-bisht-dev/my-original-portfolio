import React from 'react'
import '../components/Error.css'
import { useNavigate } from 'react-router-dom'
import errorImg from '../img/error.gif'

const Error = () => {

  const goToHome = () =>{
    navigate('/')
  }



  const navigate = useNavigate();
  const goToContact = () =>{
    navigate('/contact');
  }
  return (
    <>
    <div className="error">
      <div className="error-data">

      <img src={errorImg} alt="error-img" />
      <h1>404 ERROR</h1>
      <h3>OOPS! PAGE NOT FOUND</h3>
      <p>Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.</p>
      <div className="error-btn">
      <button onClick={goToHome}>Home</button>
      <button onClick={()=> goToContact()}>Contact US</button>
      </div>
      </div>
    </div>
    </>
  )
}

export default Error