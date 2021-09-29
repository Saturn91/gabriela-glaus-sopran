import React, { useState } from 'react';
import EventEditor from './EventEditor/EventEditor';
import styles from './EventsEditor.module.css';
import mainStyle from '../../../../mainStyle.module.css';
import { deleteEvent } from '../../../../../services/event.service.js';

function EventsEditor(props) {
  const [events, setEvents] = useState(props.events);

  const deleteEventIfMoreThan1 = (event) => {
    if(events.length > 1) {
      events.splice(events.indexOf(event), 1);
      setEvents(events);
      //deleteEvent(event);
      alert('yop');
    } else {
      alert('Can not delete last event in project!');
    }   
  }
  
  return <div className={styles.EventsEditor} data-testid="EventsEditor">
    <h3>Dates</h3>
      <br/>
      {events.map(event =>
          <EventEditor 
              event={event} 
              onDelete={() => {deleteEventIfMoreThan1(event)}}
          ></EventEditor>
      )}
      <div className={styles.EventHolder}>
        <button className={mainStyle.green} type='button'>Add new Event</button>
      </div>      
  </div>
}

export default EventsEditor;
