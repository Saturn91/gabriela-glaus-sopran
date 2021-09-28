import React from 'react';
import styles from './EventEditor.module.css';
import { useState } from 'react/cjs/react.development';
import mainStyle from '../../../../../mainStyle.module.css';

function EventEditor(props){
  const [location, setLocation] = useState(props.event.location)
  const [date, setDate] = useState(props.event.date.toISOString().substring(0, 10));
  return <div className={styles.EventEditor} key={props.event.toString() + props.event.date.toString()}>
    <div className={styles.EventHolder}>
      <button className={mainStyle.red} type='button'>Delete Event</button>
      <div className={styles.lineProperty}>
        <label>location:</label>      
        <input 
          type='text' 
          value={location} 
          className={styles.locationInput}
          onChange={(event) => {setLocation(event.target.value)}}></input>
      </div>
      <div className={styles.lineProperty}>
        <label>date:</label>
        <input 
          type='date' 
          value={date} 
          className={styles.dateInput}
          onChange={(event) => {setDate(event.target.value)}}></input>
      </div>      
    </div>    
  </div>
}

export default EventEditor;
