import React from 'react';
import { getCurrentProjects, getCurrentEvents } from '../../services/event.service';
import AgendaProjectCard from '../AgendaProjectCard/AgendaProjectCard';
import styles from './AgendaComponent.module.css';
import KonzertView from '../KonzertView/KonzertView';

function AgendaComponent(){
  return <div className={styles.AgendaComponent} data-testid="AgendaComponent">
    <KonzertView events={getCurrentEvents()}></KonzertView>
    <h1 className={['title', styles.spacerTop].join(' ')}>Aktuelle Projekte</h1>
    {getCurrentProjects().map(project => 
        <AgendaProjectCard project={project}/>
    )}    
  </div>
}

export default AgendaComponent;
