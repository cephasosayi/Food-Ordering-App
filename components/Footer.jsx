import React from 'react'
import styles from '../styles/Footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
       <div className={styles.item}>
          <Image src='/img/bg.png' layout='fill' alt='' />
      </div>
      <div className={styles.item}>
          <div className={styles.card}>
            <h2 className={styles.moto}>
              Oh Yes, We Did. The Lama Pizza, Well Baked Slice of Pizza
            </h2>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}> Find Our Restaurants</h1>
            <p className={styles.text}>
            2345 S. Wuse, Ademola Adetokumbo crescent #235
            <br/> Abuja, 456789
            <br /> +(234) 567 5678 234
            </p>

            <p className={styles.text}>
            2345 S. Wuse, Ademola Adetokumbo crescent #235
            <br/> Abuja, 456789
            <br /> +(234) 567 5678 234
            </p>
          </div>
          <div className={styles.card}>
          <h1 className={styles.title}> Working Hours</h1>
          <p className={styles.text}>
           MONDAY UNTIL FRIDAY
            <br/> 9:00 - 24:00
            </p>

            <p className={styles.text}>
           SATURDAY - SUNDAY
            <br/> 12:00 - 24:00
            </p>

          </div>

      
      </div>
    </div>
  )
}

export default Footer