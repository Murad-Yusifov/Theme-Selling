import React from "react";
import styles from "./Sections.module.scss";

const Section4 = () => {
  return (
    <div>
      <section className={styles.section4}>
        <span>Get notified on each updates.</span>
        <label htmlFor="" >
          <input type="text" name="" id="" placeholder="Enter your email address"/>
          <button>Subscribe</button>
        </label>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi veniam doloremque ducimus tempora.</p>
      </section>
    </div>
  );
};

export default Section4;
