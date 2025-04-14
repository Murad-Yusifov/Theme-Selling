import React, { useEffect, useState } from "react";
import styles from "./Sections.module.scss";
import { FaHeart, FaStar } from "react-icons/fa";
import axios from "axios";

const Section2 = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
       <div className={styles.text}>
          <p>Popular Products</p>
          <h1>Our Products</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
            consequatur laboriosam ipsam.
          </p>
        </div>
      <section className={styles.section2}>
    
        <div className={styles.wrapper}>
          <div className={styles.container1}>
            {product.slice(0, 3).map((item) => (
              <div className={styles.card1} key={item.id}>
                <div className={styles.imageContainer}>
                  <img
                    src={item.image}
                    className={styles.img}
                    alt={item.title}
                  />
                </div>
                <p>{item.title}</p>
                <div>
                  <span>
                    <FaStar style={{ color: "yellow" }} /> 5.4
                  </span>
                  <span>
                    <FaHeart /> 0.4
                  </span>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className={styles.btns}>
                  <button className={styles.btn1}>Cart</button>
                  <button className={styles.btn2}>View</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
