import React from 'react'
import styles from './Sections.module.scss'
import Shop from '../button/Shop'
import Club from '../button/Club'

const Section1 = () => {
  return (
    <div className={styles.container}>
        <section>
        <h1>Shop With Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestiae, necessitatibus aut culpa numquam a.</p>
        <div className={styles.btn}>
        <Shop />
        <Club />
        </div>
        </section>
       
    </div>
  )
}

export default Section1