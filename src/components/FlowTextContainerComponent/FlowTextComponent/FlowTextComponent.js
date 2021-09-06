import React from 'react';
import styles from './FlowTextComponent.module.css';

function FlowTextComponent(props) {
  return props.flowText.isTitle ? <h1 className={styles.titleLine}>{props.flowText.text}</h1> : <p className={styles.paragraphLine}>{props.flowText.text}</p>;
}

export default FlowTextComponent;
