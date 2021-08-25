import React from 'react';
import { getCurrentEvents, getCurrentProjects } from '../../services/event.service';
import AgendaEventCardDetailed from '../AgendaEventCardDetailed/AgendaEventCardDetailed';
import AgendaProjectCard from '../AgendaProjectCard/AgendaProjectCard';
import styles from './AgendaComponent.module.css';

function AgendaComponent(){
  return <div className={styles.AgendaComponent} data-testid="AgendaComponent">
    <h1 className={styles.title}>Nächstes Konzert</h1>
    <AgendaEventCardDetailed event={getCurrentEvents()[0]}></AgendaEventCardDetailed>
    <h1 className={[styles.title, styles.spacerTop].join(' ')}>Aktuelle Projekte</h1>
    {getCurrentProjects().map(project => 
        <AgendaProjectCard project={project}/>
    )}    
  </div>
}

export default AgendaComponent;
