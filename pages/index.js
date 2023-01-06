import React from 'react'
import Entrada from '../components/Entrada/Entrada'
import styles from '../styles/Home.module.css'
import About from '../components/About/About'

export default function Home() {

  function scrollHome() {
    var elem = document.getElementById("Home");
    elem.scrollIntoView()
  }

  function scrollAbout() {
    var elem = document.getElementById("a");
    elem.scrollIntoView()
  }

  return (
    <div className={styles.container}>
      <div className={styles.aside}>
        <h3 onClick={scrollHome}>JUDEVRO</h3>
        <button onClick={scrollAbout}>About</button>
      </div>
      
      <div id="Home">
        <Entrada/>
      </div>
      <div id="a">
        <About/>
      </div>  
      
      
    </div>
    
  )
}
