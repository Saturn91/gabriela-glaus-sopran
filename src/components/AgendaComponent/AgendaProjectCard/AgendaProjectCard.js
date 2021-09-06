import React from 'react';
import { formatDate } from '../../../services/date.service';
import styles from './AgendaProjectCard.module.css';

function AgendaProjectCard(props) {
  return <div className={styles.AgendaProjectCard} data-testid="AgendaprojectCard">
    <div className={[styles.horizontalElement, styles.spaceBetween].join(' ')}>
      <h2>{props.project.title}</h2>
      <a href={props.project.info} className={styles.link}>Details</a>
    </div>
    <div className={styles.horizontalElement} style={{marginTop: "20px"}}>
      <p>{props.project.description}</p>
    </div>

    <div style={{marginTop: "20px"}}>
      <h3>Aufführungen</h3>
      {props.project.events.map(event =>
        <div className={[styles.horizontalElement, styles.darkText].join(' ')} key={event.toString() + event.date.toString()}>
          <p style={{minWidth: '300px'}}>{formatDate(event.date, true)}</p>
          <p style={{fontWeight: 'bold'}}>{event.location}</p>
        </div>      
      )}
    </div>      
  </div>;
}

export default AgendaProjectCard;
