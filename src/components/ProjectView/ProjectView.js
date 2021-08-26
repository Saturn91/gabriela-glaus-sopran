import React, { useState } from 'react';
import styles from './ProjectView.module.css';
import ProjectListComponent from '../ProjectListComponent/ProjectListComponent';

function ProjectView() {
  const [display, setDisplayState] = useState('actual');

  return <div className={styles.ProjectView} data-testid="ProjectView">
    <div className={styles.viewSelectorContainer}>
      <h1 className={['title', styles.spacerTop].join(' ')}>Aktuelle Projekte</h1>
      <select name="cars" id="cars" className={styles.selector}>
        <option onClick={() => setDisplayState('actual')}>aktuelle</option>
        <option onClick={() => setDisplayState('past')}>vergangene</option>
      </select>
    </div>
    <div className={styles.list}>
      <ProjectListComponent displayState={display}></ProjectListComponent>
    </div>      
  </div>
}

export default ProjectView;
