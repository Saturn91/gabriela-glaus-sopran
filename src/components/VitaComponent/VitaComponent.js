import React from 'react';
import styles from './VitaComponent.module.css';
import FlowTextContainerComponent from '../FlowTextContainerComponent/FlowTextContainerComponent';
import { getVita } from '../../services/vita.service';
import { getVitaImage } from '../../services/image.service';
import mainStyles from '../mainStyle.module.css';

function VitaComponent() {
  return <div className={[mainStyles.componentMainStyle, styles.VitaComponent].join(' ')} data-testid="VitaComponent"> 
    {getVitaImage(mainStyles.backgroundImage)}
    <div className={styles.textbox}>
      <FlowTextContainerComponent flowText={getVita()}></FlowTextContainerComponent>
    </div>
  </div>
}

export default VitaComponent;
