import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>xtine quiz</title>
        <meta name="description" content="A place to try out scrollytelling with code." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
         xtine quiz
        </h1>
      </main>
      <footer className={styles.footer}>
        <span>links will go here</span>
      </footer>
    </div>
  )
}