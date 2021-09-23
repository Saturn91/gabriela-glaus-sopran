import styles from './VitaComponent.module.css';
import FlowTextContainerComponent from '../FlowTextContainerComponent/FlowTextContainerComponent';
import BaseComponent from '../BaseComponent/BaseComponent';
import { FlowText } from '../../models/flowtext/flowtext.model';
import { getVita } from '../../services/vita.service';
import { useEffect, useState } from 'react';
import EditFlowTextComponent from '../EditFlowTextComponent/EditFlowTextComponent';

function VitaComponent(props) {
  const [vitaFlowText, setVitaFlowText] = useState(new FlowText([]));
  useEffect(() => {
    if(vitaFlowText.flowTextParagraphs.length <= 0) {
      getVita().then((flowText) => setVitaFlowText(flowText));
    }    
  });

  return <BaseComponent 
    user = {props.user}
    element=
    {<div className={styles.textbox}>
      <FlowTextContainerComponent flowText={vitaFlowText}></FlowTextContainerComponent>
    </div>}
    editElements={
      <EditFlowTextComponent flowText={vitaFlowText}></EditFlowTextComponent>
    }>
  </BaseComponent>
}

export default VitaComponent;
