import React from 'react';
import { getEvents } from '../../services/event.service';
import AgendaEventCardDetailed from '../AgendaEventCardDetailed/AgendaEventCardDetailed';
import styles from './AgendaComponent.module.css';

function AgendaComponent(){
  return <div className={styles.AgendaComponent} data-testid="AgendaComponent">
    <h1 className={styles.title}>Events</h1>
    {getEvents().map(event => (
        <AgendaEventCardDetailed event={event}></AgendaEventCardDetailed>
    ))}
  </div>
}

AgendaComponent.propTypes = {};

AgendaComponent.defaultProps = {};

export default AgendaComponent;
