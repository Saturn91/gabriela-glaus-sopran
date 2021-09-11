import React from 'react';
import styles from './VitaComponent.module.css';
import FlowTextContainerComponent from '../FlowTextContainerComponent/FlowTextContainerComponent';
import { getVita } from '../../services/vita.service';
import BaseComponent from '../BaseComponent/BaseComponent';

function VitaComponent() {
  return <BaseComponent 
    element={<div className={styles.textbox}>
    <FlowTextContainerComponent flowText={getVita()}></FlowTextContainerComponent>
  </div>}>
  </BaseComponent>
}

export default VitaComponent;
