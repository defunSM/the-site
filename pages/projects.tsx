import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import ProjectDiv from '../components/Projects'
import Title from '../components/Title'
import Footer from '../components/Footer'

const Projects: NextPage = () => {
    return (
  
        <div className={styles.container}>

        <Head>
          <title>defunSM</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main className={styles.main}>
          <Title />
          <NavBar />
          
          <div className="top"></div>
          <ProjectDiv />
          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.tsx</code>
          </p>
        </main>
  
        <Footer />
      </div>
    )
}

export default Projects