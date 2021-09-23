import styles from './VitaComponent.module.css';
import FlowTextContainerComponent from '../FlowTextContainerComponent/FlowTextContainerComponent';
import BaseComponent from '../BaseComponent/BaseComponent';
import { FlowText } from '../../models/flowtext/flowtext.model';
import { getVita } from '../../services/vita.service';
import { useEffect, useState } from 'react';

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
      <p>Hello</p>
    }>
  </BaseComponent>
}

export default VitaComponent;
