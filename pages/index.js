import React from 'react'
import Entrada from '../components/Entrada/Entrada'
import styles from '../styles/Home.module.css'
import About from '../components/About/About'
import Proyects from '../components/Proyects/Proyects';
import Courses from '../components/Courses/Courses';
import Contact from '../components/Contact/Contact';
import 'mapbox-gl/dist/mapbox-gl.css';
import Image from 'next/image';

import git from '../assets/gitlogo.png';
import ln from '../assets/linkedinlogo.png'

export default function Home() {

  function scrollHome() {
    var elem = document.getElementById("Home");
    elem.scrollIntoView()
  }

  function scrollAbout() {
    var elem = document.getElementById("About");
    elem.scrollIntoView()
  }

  function scrollProyects() {
    var elem = document.getElementById("Proyects");
    elem.scrollIntoView()
  }

  function scrollCourses() {
    var elem = document.getElementById("Courses");
    elem.scrollIntoView()
  }

  function scrollContact() {
    var elem = document.getElementById("Contact");
    elem.scrollIntoView()
  }
  //<div className={styles.git}></div>
  //<div className={styles.ln}></div>
  return (
    <div className={styles.container}>
      <div className={styles.aside}>
        <h3 onClick={scrollHome}>JUDEVRO</h3>
        <button className={styles.first} onClick={scrollAbout}>About</button>
        <button className={styles.second} onClick={scrollProyects}>Proyects</button>
        <button className={styles.third} onClick={scrollCourses}>Courses</button>
        <button className={styles.four} onClick={scrollContact}>Contact</button>
        <a target='_'  href='https://github.com/JuDevRo'><Image src={git} className={styles.git}/></a>
        <a target='_' href='https://www.linkedin.com/in/juan-r-4116a5223/'><Image src={ln} className={styles.ln}/></a>
      </div>
      
      <div id="Home">
        <Entrada/>
      </div>
      <div id="About">
        <About/>
      </div>  
      <div id="Proyects">
        <Proyects/>
      </div>
      <div id="Courses">
        <Courses />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
    
  )
}
