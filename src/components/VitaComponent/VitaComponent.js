import styles from './VitaComponent.module.css';
import FlowTextContainerComponent from '../FlowTextContainerComponent/FlowTextContainerComponent';
import BaseComponent from '../BaseComponent/BaseComponent';
import { FlowText } from '../../models/flowtext/flowtext.model';
import { getVita } from '../../services/vita.service';
import { useEffect, useState } from 'react';

function VitaComponent() {
  const [vitaFlowText, setVitaFlowText] = useState(new FlowText([]));
  useEffect(() => {
    if(vitaFlowText.flowTextParagraphs.length <= 0) {
      getVita().then((flowText) => setVitaFlowText(flowText));
    }    
  });
  return <BaseComponent 
    element={<div className={styles.textbox}>
    <FlowTextContainerComponent flowText={vitaFlowText}></FlowTextContainerComponent>
  </div>}>
  </BaseComponent>
}

export default VitaComponent;
