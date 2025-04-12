import React from "react";
import styles from "./Button.module.scss";

const Club = () => {
  return (<div className={styles.container}>
     <button className={styles.shop}>Shop Now</button>
     <button className={styles.club}>Club membership</button>
  </div>
)};

export default Club;
