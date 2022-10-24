import React from 'react'
import '../components/Contact.css'
import contactImg from '../img/contact.png'
import { FaInstagramSquare, FaYoutubeSquare, FaLinkedin, FaWhatsappSquare, FaGithubSquare } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
    <div className="contact">
      <div className="contact-data">
        <div className="contact-left">
          <img src={contactImg} alt="contact" />
        </div>
        <div className="contact-right">

          <h1>Get in Touch</h1>
          <p>If you have any query so you can ask me any question -</p>
          <div className="details">
          <form action="https://formspree.io/f/xgeqnevd" method='POST'>
            <input type="text" placeholder='Your Name*' required name='name' autoComplete='off' /><br />
            <input type="text" placeholder='Your Email*' required name='email' autoComplete='off' /><br />
            <input type="text" placeholder='Your message*' required name='message' autoComplete='off' /><br />

            <button>SEND</button>
            </form>
          </div>
        </div>
      </div>


      <div className="contact-icons">
      <a href="https://www.instagram.com/akshay_bisht_official_brand/" target='_blank'><FaInstagramSquare className='social-contact-items'/></a>
      <a href="https://www.youtube.com/channel/UCYheI2bYIAWudlzySQW27lg" target='_blank'><FaYoutubeSquare className='social-contact-items'/></a>
      <a href="https://www.linkedin.com/in/akshay-bisht-dev/" target='_blank'><FaLinkedin className='social-contact-items'/></a>
      <a href="tel:+91 9068822661" target='_blank'><FaWhatsappSquare className='social-contact-items'/></a>
      <a href="https://github.com/akshay-bisht-dev" target='_blank'><FaGithubSquare className='social-contact-items'/></a>
      </div>
    </div>
    </>
  )
}

export default Contact