import React from 'react'
import Entrada from '../components/Entrada/Entrada'
import styles from '../styles/Home.module.css'
import About from '../components/About/About'
import Proyects from '../components/Proyects/Proyects';
import Courses from '../components/Courses/Courses';
import Contact from '../components/Contact/Contact';
import 'mapbox-gl/dist/mapbox-gl.css';

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

  return (
    <div className={styles.container}>
      <div className={styles.aside}>
        <h3 onClick={scrollHome}>JUDEVRO</h3>
        <button className={styles.first} onClick={scrollAbout}>About</button>
        <button className={styles.second} onClick={scrollProyects}>Proyects</button>
        <button className={styles.third} onClick={scrollCourses}>Courses</button>
        <button className={styles.four} onClick={scrollContact}>Contact</button>
        <a href=''><div className={styles.git}></div></a>
        <a href=''><div className={styles.ln}></div></a>
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
