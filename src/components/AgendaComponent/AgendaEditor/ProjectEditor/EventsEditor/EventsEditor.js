import React, { useState } from 'react';
import EventEditor from './EventEditor/EventEditor';
import styles from './EventsEditor.module.css';
import mainStyle from '../../../../mainStyle.module.css';
import { deleteEvent, addEventToProject } from '../../../../../services/event.service.js';
import { Timestamp } from '@firebase/firestore';
import { showPrompt, showYesNowPrompt } from '../../../../PromptComponent/services/prompt.service';

function EventsEditor(props) {
  const [events, setEvents] = useState(props.events);

  const deleteEventIfMoreThan1 = (event) => {
    if(events.length > 1) {
      showYesNowPrompt('By clicking [Yes] you will delete this event, are you sure?', 'Deleting Event?', () => {
        events.splice(events.indexOf(event), 1);
        setEvents([...events]);
        deleteEvent(event);
      }, () => {});      
    } else {
      showPrompt('You can not delete the last event in a Project, please edit the last event or delete the project as a whole!', 'A Project needs at least one event!');
    }   
  }

  const addEvent = () => {
    addEventToProject(props.project.url+"/Events", 'Luzern?', Timestamp.fromDate(new Date()));
    props.reload();
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
        <button className={mainStyle.green} type='button' onClick={addEvent}>Add new Event</button>
      </div>      
  </div>
}

export default EventsEditor;
