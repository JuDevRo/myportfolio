import React from 'react'
import styles from '../../styles/Courses.module.css'
import coursesDo from '../../db/courses'
import Link from 'next/link'

const Courses = () => {
    return(
        <div className={styles.container}>
            {coursesDo.map((co) => (
                <div className={styles.card}>
                <h3>{co.subject}</h3>
                <Link href={`/curso/${co.link}`}><h2>{co.title}</h2></Link>
                <p>{co.resume}</p>
            </div>
            ))}
             
            
        </div>
    )
}

export default Courses