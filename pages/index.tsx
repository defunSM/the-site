import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import ProjectDiv from '../components/Projects'
import Title from '../components/Title'
import Footer from '../components/Footer'



/* 
TODO: Implement a navbar that has posts, projects, github
SPEC: The navbar should be vertical but one phone should turn into a menu bar
      
*/

/* 
TODO: Load custom font 
TODO: Add to vercel
TODO: Google Analytics
TODO: Add an A record to defunsm.ml 
*/

const Home: NextPage = () => {
  return (
    
    <div className={styles.container}>


      <Head>
        <title>defunSM</title>
        <meta name="description" content="defunSM's personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <Title />
        <NavBar />
        
        <div className="top"></div>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>
      </main>

    <Footer />
    </div>
  )
}

export default Home
