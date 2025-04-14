import React from "react";
import styles from "../sections/Sections.module.scss";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Section8 = ({item}) => {
  return (<div>
    <div className={styles.wrapper}> 
      <section className={styles.section8} id="test">
        <div className={styles.container5}>
          <div className={styles.card1}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <p>Co-Founder, President</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <FaFacebookF />
              </div>
              <div className={styles.icon}>
                <FaTwitter />
              </div>
              <div className={styles.icon} >
                <FaInstagram />
              </div>
              <div className={styles.icon}>
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Section8;
