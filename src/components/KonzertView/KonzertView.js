import React, { useState } from 'react';
import styles from './KonzertView.module.css';
import KonzertListComponent from '../KonzertListComponent/KonzertListComponent';

function KonzertView(props) {
    const [display, setDisplayState] = useState('next');

    return <div className={styles.KonzertView} data-testid="KonzertView">
      <div className={styles.viewSelectorContainer}>
        <h1 className='title' style={{marginRight: '40px'}}>Konzerte</h1>
        <select name="cars" id="cars" className={styles.selector}>
          <option onClick={() => setDisplayState('next')}>nächstes</option>
          <option onClick={() => setDisplayState('actual')}>aktuelle</option>
          <option onClick={() => setDisplayState('past')}>vergangene</option>
        </select>
      </div>
      <div className={styles.list}>
        <KonzertListComponent displayState={display}></KonzertListComponent>
      </div>      
    </div>
}

export default KonzertView;
