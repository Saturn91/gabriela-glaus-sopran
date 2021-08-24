import React from 'react';
import FlowTextComponent from '../FlowTextComponent/FlowTextComponent';
import styles from './FlowTextContainerComponent.module.css';

function FlowTextContainerComponent(props) {
    return <div style={styles.FlowTextComponent}>
      {props.flowTexts.map(flowText => (
        <FlowTextComponent flowText={flowText}></FlowTextComponent>
      ))}
    </div>
}

export default FlowTextContainerComponent;
