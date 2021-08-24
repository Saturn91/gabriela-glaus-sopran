import React from 'react';
import styles from './VitaComponent.module.css';
import FlowTextContainerComponent from '../FlowTextContainerComponent/FlowTextContainerComponent';
import { getVita } from '../../services/vita.service';
import { getHeadShot } from '../../services/image.service';

const divStyle = {
  width: '20vw'
}

function VitaComponent() {

  return <div className={styles.VitaComponent} data-testid="VitaComponent">
    <div>
      {getHeadShot(styles.imageCenter, divStyle)}
    </div>  
    <div className={styles.textbox}>
      <FlowTextContainerComponent flowTexts={getVita()}></FlowTextContainerComponent>
    </div>    
  </div>
}

export default VitaComponent;
