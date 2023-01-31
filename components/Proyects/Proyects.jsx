import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Proyects.module.css'
import Avocado from '../SVGIcons/Avocado'
import avo from '../../assets/avo.png'


const Proyects = () => {
    //size="58px" <Avocado  size="116px"/> 
    return(
        <div className={styles.container}>
            <div className={styles.uno}>
               <div className={styles.tapa}>
                    <h2><a target='blank' href="https://avo-store-12oo2wufy-judevro.vercel.app/">View<br/>Project</a></h2>
                </div>
            </div>
            <div className={styles.dos}>
                <div className={styles.tapa}>
                    <h2><a target='blank' href="https://github.com/JuDevRo/Batata-bit">View<br/>Project</a></h2>
                </div>
            </div>
            <div className={styles.tres}>
                <div className={styles.tapa}>
                    <h2><a target='blank' href="https://github.com/JuDevRo/SPA-EpicMovies">View<br/>Project</a></h2>
                </div>
            </div>
            <div className={styles.cuatro}>
                <div className={styles.tapa}>
                    <h2><a target='blank' href="https://github.com/JuDevRo/JestReact">View<br/>Project</a></h2>
                </div>
            </div>
            <div className={styles.cinco}>
                <div className={styles.tapa}>
                    <h2><a target='blank' href="https://tod-os-react.vercel.app/">View<br/>Project</a></h2>
                </div>
            </div>
            <div className={styles.seis}>
                <div className={styles.tapa}>
                    <h2><a target='blank' href="https://pokedux-psi.vercel.app/">View<br/>Project</a></h2>
                </div>  
            </div>
        </div>
    )
}

export default Proyects