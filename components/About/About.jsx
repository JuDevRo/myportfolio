import React from 'react'
import styles from '../../styles/About.module.css'

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
            <h2>Me, About JuDevRo</h2>
            <p>I'm a Fullstack Developer located in Barcelona. I have a serious passion for Technologies and software development.
            <br />
            <br />
            Well-organised person, problem solver, high attention to detail. Fan of sports, E-sports, Music and literature. A young person finding grow on IT enviroment.
            <br />
            <br />
            Interested in the entire frontend-backend spectrum and working on ambitious projects with positive people.
            <br />
            <a href="">Let's make something special</a>
            </p>
            </div>
            <div className={styles.creative}>
                <div className={styles.box}>
                    <div className={styles.card} id={styles.front}>
                            <h2 className={styles.ht}>HTML5</h2>
                        
                            <h2 className={styles.cs}>CSS3</h2>
                        
                            <h2 className={styles.js}>JS</h2>
                        </div>
                    <div className={styles.card} id={styles.back}>BACK</div>
                    <div className={styles.card} id={styles.left}>
                        <h2 className={styles.ht}>REACT</h2>
                        <h2 className={styles.cs}>TS</h2>
                        <h2 className={styles.js}>NEXT</h2>
                    </div>
                    <div className={styles.card} id={styles.right}>
                        <h2 className={styles.ht}>NODE</h2>
                        <h2 className={styles.cs}>NEST</h2>
                        <h3 className={styles.js}>SOCKET</h3>
                    </div>
                    <div className={styles.card} id={styles.top}>
                        <h2 className={styles.ht}>GIT</h2>
                        <h2 className={styles.cs}>NPM</h2>
                        <h2 className={styles.js}>JEST</h2>
                    </div>
                    <div className={styles.card} id={styles.bottom}>
                        <h2 className={styles.ht}>MONGO</h2>
                        <h2 className={styles.cs}>PSQL</h2>
                        <h2 className={styles.js}>MYSQL</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About