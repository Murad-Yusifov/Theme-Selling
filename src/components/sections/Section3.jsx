import React, { useEffect, useState } from 'react'
import styles from "./Sections.module.scss";
import axios from 'axios';
import { FaHeart, FaStar } from 'react-icons/fa';


const Section3 = () => {
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
        <section className={styles.section3} id="product">
              <div className={styles.wrapper}>
                      <div className={styles.container1}>
                        {product.slice(6, 9).map((item) => (
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
  )
}

export default Section3