import React, { useState } from 'react';
import styles from './KonzertView.module.css';
import KonzertListComponent from '../KonzertListComponent/KonzertListComponent';

export const displayStates = {
  NEXT: 'next',
  ACTUAL: 'actual',
  PAST: 'past'
}

function KonzertView() {
    const [display, setDisplayState] = useState(displayStates.NEXT);

    return <div className={styles.KonzertView} data-testid="KonzertView">
      <div className={styles.viewSelectorContainer}>
        <h1 className='title'>Konzerte</h1>
        <select name="cars" id="cars" className={styles.selector}>
          <option onClick={() => setDisplayState(displayStates.NEXT)}>nächstes</option>
          <option onClick={() => setDisplayState(displayStates.ACTUAL)}>aktuelle</option>
          <option onClick={() => setDisplayState(displayStates.PAST)}>vergangene</option>
        </select>
      </div>
      <div className={styles.list}>
        <KonzertListComponent displayState={display}></KonzertListComponent>
      </div>      
    </div>
}

export default KonzertView;
