import React, { useState } from 'react'
import styles from './Header2.module.scss'

const Header2 = () => {

    return (
    <div className={styles.wrapper}>
        <header>
            <span>Selling</span>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Priducts</li>
                    <li>About Us</li>
                    <li>Special</li>
                    <li>Testionials</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header2