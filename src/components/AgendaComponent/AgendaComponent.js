import React from 'react';
import styles from './AgendaComponent.module.css';
import KonzertView from '../KonzertView/KonzertView';
import ProjectView from '../ProjectView/ProjectView';

function AgendaComponent(){
  return <div className={styles.AgendaComponent} data-testid="AgendaComponent">
    <KonzertView></KonzertView>
    <div className={styles.spacer}></div>
    <ProjectView></ProjectView> 
  </div>
}

export default AgendaComponent;
