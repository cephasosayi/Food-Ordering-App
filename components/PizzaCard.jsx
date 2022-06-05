import Image from 'next/image';
import React from 'react'
import styles from '../styles/PizzaCard.module.css';

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src='/img/pizza.png' alt='' width='500' height='500' /> 
      <h1 className={styles.title}>Fiori Di Zucca</h1>
      <span className={styles.price}>&#x20A6;1200</span>
      <p className='desc'>
      Lorem ipsum dolor sit amet,    aliquip ex ea commodo consequat. </p>
    </div>
  )
}

export default PizzaCard