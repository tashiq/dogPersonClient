import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Navigation from '../components/Navigation'
import styles from '../styles/Home.module.css'
import Products from '../components/products';
import BestProduct from '../components/BestProduct'

export default function Home() {
  return (
    <div className={styles.main}>
      <Banner></Banner>
      <Products></Products>
      <BestProduct></BestProduct>
    </div>
  )
}
