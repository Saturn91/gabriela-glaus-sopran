import React  from 'react';
import { useState } from 'react';
import styles from './EventEditor.module.css';
import mainStyle from '../../../../../mainStyle.module.css';
import { Timestamp } from '@firebase/firestore';
import { updateEvent } from '../../../../../../services/event.service';

function EventEditor(props){
  const [location, setLocation] = useState(props.event.location)
  const [date, setDate] = useState(props.event.date.toISOString().substring(0, 10));
  const [time, setTime] = useState(props.event.date.toLocaleTimeString());

  return <div className={styles.EventEditor} key={props.event.toString() + props.event.date.toString()}>
    <div className={styles.EventHolder}>
      <button 
        className={mainStyle.red} 
        type='button'
        onClick={props.onDelete}
      >Delete Event</button>
      <button 
        className={mainStyle.green} 
        type='button'
        onClick={() => {
          updateEvent(props.event, location, Timestamp.fromDate(new Date(date+"T"+time)));
        }}
      >Update Event</button>           
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
      <div className={styles.lineProperty}>
        <label>time:</label>
        <input 
          type='time' 
          value={time} 
          className={styles.dateInput}
          onChange={(event) => {setTime(event.target.value)}}></input>
      </div>
    </div>    
  </div>
}

export default EventEditor;
