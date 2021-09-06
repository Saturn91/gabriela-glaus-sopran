import React from 'react';
import styles from './FlowTextComponent.module.css';

function FlowTextComponent(props) {
  return props.flowTextParagraph.isTitle ? <h1 className={styles.titleLine}>{props.flowTextParagraph.text}</h1> : <p className={styles.paragraphLine}>{props.flowTextParagraph.text}</p>;
}

export default FlowTextComponent;
