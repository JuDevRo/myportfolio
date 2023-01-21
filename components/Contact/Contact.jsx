import React, {useState} from 'react'
import Image from 'next/image'
import maps from '../../assets/map.png'
import Map, {FullscreenControl, GeolocateControl, Marker, NavigationControl} from 'react-map-gl'; 
import styles from '../../styles/Contact.module.css'

const Contact = () => {
    const [lng, setLng] = useState(2.15899)
    const [lat, setLat] = useState(41.38879)
    const a = 3
//<Image className={styles.mimg} src={maps}></Image>
    return(
        <div className={styles.container}>
            <div className={styles.con}>
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