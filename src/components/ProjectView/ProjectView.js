import React, { useState } from 'react';
import styles from './ProjectView.module.css';
import ProjectListComponent from '../ProjectListComponent/ProjectListComponent';

export const displayStates = {
  ACTUAL: 'actual',
  PAST: 'past'
}

function ProjectView() {
  const [display, setDisplayState] = useState(displayStates.ACTUAL);

  return <div className={styles.ProjectView} data-testid="ProjectView">
    <div className={styles.viewSelectorContainer}>
      <h1 className={['title', styles.spacerTop].join(' ')}>Projekte</h1>
      <select className={styles.selector}>
        <option onClick={() => setDisplayState(displayStates.ACTUAL)}>aktuelle</option>
        <option onClick={() => setDisplayState(displayStates.PAST)}>vergangene</option>
      </select>
    </div>
    <div className={styles.list}>
      <ProjectListComponent displayState={display}></ProjectListComponent>
    </div>      
  </div>
}

export default ProjectView;
