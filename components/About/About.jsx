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
            <a href="">Let's make something special</a>
            </p>
            </div>
            <div className={styles.creative}>
                <p>Something Else</p>
            </div>
        </div>
    )
}

export default About