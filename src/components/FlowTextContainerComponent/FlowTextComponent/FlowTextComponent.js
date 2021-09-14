import React from 'react';
import { FlowTextType } from '../../../models/flowtext/flowtextparagraph.model';
import styles from './FlowTextComponent.module.css';

function FlowTextComponent(props) {
  switch(props.flowTextParagraph.type) {
    case FlowTextType.PARAGRAPH: 
      return <p className={styles.paragraphLine}>{props.flowTextParagraph.text}</p>
    case FlowTextType.TITLE:
      return <h1 className={styles.titleLine}>{props.flowTextParagraph.text}</h1>
    case FlowTextType.LINK:
      return <a href={props.flowTextParagraph.value} className={styles.flowTextLink}>{props.flowTextParagraph.text}</a> ;
    default:
      break;
  }
}

export default FlowTextComponent;
