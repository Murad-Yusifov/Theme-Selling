import React, { useEffect, useState } from 'react'
import styles from './Header2.module.scss'

const Header2 = () => {
    const [section, setSection] = useState("");

    useEffect(() => {
      const handleScroll = () => {
        const sections = document.querySelectorAll("section");
        let current = "";
  
        // Find the section currently in the viewport
        sections.forEach((section) => {
          const sectionTop = section.offsetTop - 60; // Adjust for navbar height
          const sectionHeight = section.offsetHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
          }
        });
  
        setSection(current);
      };
  
      // Add event listener for scroll
      window.addEventListener("scroll", handleScroll);
  
      // Cleanup on component unmount
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
    <div className={styles.wrapper}>
        <header>
            <span>Selling</span>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#product">Products</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#special">Special</a></li>
                    <li><a href="#test">Testionials</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header2