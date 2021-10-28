import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MBHS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.navbar}>
            <div className={styles.menu}>Home</div>
            <div className={styles.menu}>
                  <p className={styles.dropbtn}>About</p>
                  <div className={styles.dropcnt}>
                      <p>Directions</p>
                      <p>History</p>
                      <p>Traffic Cams</p>
                      <p>Fun Facts</p>
                  </div>
            </div>
            <div className={styles.menu}>Students</div>
            <div className={styles.menu}>Parents</div>
            <div className={styles.menu}>Alumni</div>
            <div className={styles.menu}>Academies</div>
            <div className={styles.menu}>Counseling</div>
            <div className={styles.menu}>PTSA</div>
            <div className={styles.menu}>SGA</div>
            <div className={styles.menu}>Calendar</div>
            <div className={styles.menu}>News</div>
            <div className={styles.menu}>Directory</div>
            <div className={styles.menu}>
            <input type="text" className={styles.search} placeholder="Search"/>
            </div>
        </div>
        <div>
            <Image className={styles.panorama} priority src="/../public/images/header-school-blair.jpg" width='1583' height='550' alt="Panorama of MBHS front entrance"/>
                  <div className={styles.pictitle}>
                      <h1>Montgomery Blair High School</h1>
                      <p>51 University Blvd East<br></br>
                      Silver Spring Maryland 20901-2451<br></br>
                      (301) 649-2800</p>
                  </div>
        </div>
        <div className={styles.spotlight}>
            <h2>Blazer Spotlight</h2>
            <Image className={styles.spotlightImage} src="/../public/images/2020team.jpg" width="455" height="319" alt="robo team"/>
        </div>
        <div className={styles.info}>
            <h2>Important Info</h2>
            <p>Info here!</p>
        </div>
        </main>
        </div>
  )
}
