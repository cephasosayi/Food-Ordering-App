import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Featured from '../components/Featured';
import ProductList from '../components/productList';



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza App </title>
        <meta name="description" content="Best Pizza app in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <div>
     <Featured />
     
     <ProductList />
     </div>

    </div>
  )
}
