import React from 'react';
import styles from './AgendaEventCardDetailed.module.css';

function AgendaEventCardDetailed(props) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return <div className={styles.AgendaEventCard} data-testid="AgendaEventCard">
    <div className={[styles.horizontalElement, styles.spaceBetween].join(' ')}>
      <h2>{props.event.title}</h2>
      <a href={props.event.info} className={styles.link}>Details</a>
    </div>
    <div className={[styles.horizontalElement, styles.darkText].join(' ')}>
      <p style={{minWidth: '300px'}}>{props.event.date.toLocaleDateString(undefined, options)}-{props.event.date.getHours()}:{props.event.date.getMinutes()}</p>
      <p style={{fontWeight: 'bold'}}>{props.event.location}</p>
    </div>
    <div className={styles.horizontalElement} style={{marginTop: "20px"}}>
      <p>{props.event.description}</p>
    </div>      
  </div>;
}
  

AgendaEventCardDetailed.propTypes = {};

AgendaEventCardDetailed.defaultProps = {};

export default AgendaEventCardDetailed;
