import React from 'react'
import styles from '../../styles/Contact.module.css'

const Contact = () => {
    return(
        <div className={styles.container}>
            <div className={styles.text}>
                <h2>Contact me</h2>
                <p>I'm interested in remote, presential or hybrid opportunities. However, if you have other request or question, don't hesitate to use the form </p>
            </div>
            
            <form className={styles.form} action="">
                <input className={styles.name} type="text" placeholder='Name' />
                <input className={styles.email} type="email" name="" id="" placeholder='Email' />
                <br />
                <input className={styles.subject} type="text" name="" id="" placeholder='Subject' />
                <br />
                <textarea className={styles.message} name="" id="" cols="30" rows="10"></textarea>
            </form>
        </div>
    )
}

export default Contact