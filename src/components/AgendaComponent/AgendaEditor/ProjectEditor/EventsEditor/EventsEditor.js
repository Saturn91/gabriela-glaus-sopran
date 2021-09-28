import React from 'react';
import EventEditor from './EventEditor/EventEditor';
import styles from './EventsEditor.module.css';
import mainStyle from '../../../../mainStyle.module.css';

function EventsEditor(props) {
  
  return <div className={styles.EventsEditor} data-testid="EventsEditor">
    <h3>Dates</h3>
      <br/>
      {props.events.map(event =>
          <EventEditor event={event}></EventEditor>
      )}
      <div className={styles.EventHolder}>
        <button className={mainStyle.green} type='button'>Add new Event</button>
      </div>      
  </div>
}

export default EventsEditor;
