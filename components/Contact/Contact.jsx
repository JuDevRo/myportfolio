import React, {useState} from 'react'
import Image from 'next/image'
import maps from '../../assets/map.png'
import Map, {FullscreenControl, GeolocateControl, Marker, NavigationControl} from 'react-map-gl'; 
import styles from '../../styles/Contact.module.css'
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [description, setDescription] = useState("")
  
    const posting = async () => {
        await  axios.post('https://myportfoliobackend.herokuapp.com/contact', {
        name: name,
        email: email,
        subject: subject,
        description: description
      }).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }
    


    const [lng, setLng] = useState(2.15899)
    const [lat, setLat] = useState(41.38879)
    const a = 3
//<Image className={styles.mimg} src={maps}></Image>
    return(
        <div className={styles.container}>
            <div className={styles.con}>
                <div className={styles.text}>
                    <h2>Contact me</h2>
                    <p>I`m interested in remote, presential or hybrid opportunities. However, if you have other request or question, don`t hesitate to send a message</p>
                </div>
            
                <form className={styles.form} action="">
                    <input className={styles.name} onChange={(event) => setName(event.target.value)} type="text" id="name" placeholder='Name' />
                    <input className={styles.email} onChange={(event) => setEmail(event.target.value)} type="email" name="email" id="" placeholder='Email' />
                    <br />
                    <input className={styles.subject} onChange={(event) => setSubject(event.target.value)} type="text" name="" id="subject" placeholder='Subject' />
                    <br />
                    <textarea className={styles.message} onChange={(event) => setDescription(event.target.value)} name="" id="description" cols="30" rows="10"></textarea>
                </form>
                <button type='submit' className={styles.enviar} onClick={posting}>Enviar</button>
            </div>
            <div className={styles.map} id='map'>
      <Map
        mapboxAccessToken="pk.eyJ1IjoibnJvdWdlciIsImEiOiJjbGQyMGJoOW4wMHU0M3FvZGMzNHE5ejgzIn0.Px_UmUuGrBjIx8YMNsELUQ"
        viewState={{
          longitude: lng,
          latitude: lat,
          zoom: a
        }}
        style={{ 
                width: "39vw",
                height: "98vh",
                borderRadius: "15px",
                border: "2px solid white"
              }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        className={styles.mapiboxi}
        
        >
          <Marker 
            longitude={lng}
          latitude={lat}
        />
        <NavigationControl 
          position='bottom-right'
        />
        <GeolocateControl />
        <FullscreenControl />
        </Map>
      
    </div>
        </div>
    )
}

export default Contact