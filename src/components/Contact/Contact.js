import React from 'react'
import "./contact.scss"
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <motion.div layout animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}}>
      <div className='bg-contact'>
        <iframe className='iframe__map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d95867.67066591202!2d69.36330240000001!3d41.3335552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1645118541913!5m2!1sru!2s" width="100%" height="400" allowfullscreen="" loading="lazy" title='1'></iframe>
      </div>
      <div className='container'>
        <div>
          <h1 className='contact-title'>Don’t shy to Contact us.</h1>
          <div className='parent-second-of-container'>
            <div className='parent__contact__second'>
              <div className='child__contact__main'>
                <div className='parent-contact__inputs'>
                  <input className='contact__input' type="text" placeholder='Your Name' />
                  <input className='contact__input' type="email" placeholder='Your E-mail' />
                </div>
                <div>
                  <textarea className='contact__input__message' placeholder='Message' />
                  <button className='btn-contact-send'>Send</button>
                </div>
              </div>
              <div>
                <div>
                  <h1 className='subtitle__contact'>Location</h1>
                  <p className='text__contact'>Baker Street 223 B, London 423668</p>
                </div>
                <div className='child__title-contact'>
                  <h1 className='subtitle__contact'>Phone</h1>
                  <p className='text__contact'>+1 623-812-4957</p>
                </div>
                <div className='child__title-contact'>
                  <h1 className='subtitle__contact'>E-mail</h1>
                  <p className='text__contact'>support@promo-theme.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact