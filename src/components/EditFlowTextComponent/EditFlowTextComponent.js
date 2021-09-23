import React from 'react';
import styles from './EditFlowTextComponent.module.css';
import EditFlowTextParagraph from './EditFlowTextParagraph/EditFlowTextParagraph';

function EditFlowTextComponent(props){
 return <div className={styles.EditFlowTextComponent} data-testid="EditFlowTextComponent">
    {props.flowText.flowTextParagraphs.map((flowTextParagraph) => (
      <EditFlowTextParagraph flowTextParagraph={flowTextParagraph} key={flowTextParagraph.text}></EditFlowTextParagraph>
    ))}
  </div>
} 

export default EditFlowTextComponent;
