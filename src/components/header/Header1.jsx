import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import styles from './Header1.module.scss'

const Header1 = () => {
  return (
    <div className={styles.headerContainer}>
        <header>
            <nav className={styles.icons}>
                <div className={styles.icon}><FaFacebookF /></div>
                <div  className={styles.icon}><FaTwitter /></div> 
                <div  className={styles.icon} ><FaInstagram /></div>
                <div  className={styles.icon}><FaLinkedinIn /></div> 
            </nav>
            <nav className={styles.contacts}>
                <div className={styles.number}>
                   <FaPhoneAlt /> <span>(+1) 234 5678 9101</span> 
                  <IoMail /> <span> shop@yourdomain.com</span>

                </div>
            </nav>

        </header>
    </div>
  )
}

export default Header1