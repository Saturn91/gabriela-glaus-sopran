import React from 'react';
import styles from './RepertoireCategoryComponent.module.css';
import RepertoireEntryComponent from './RepertoireEntryComponent/RepertoireEntryComponent';

function RepertoireCategoryComponent(props){
  return <div className={styles.RepertoireCategoryComponent} data-testid="RepertoireCategoryComponent">
    <h1>{props.repertoireCategorie.title}</h1>
    {props.repertoireCategorie.repetoireEntries.map(
      repertoirEntry => <RepertoireEntryComponent repertoireEntry = {repertoirEntry} key={props.repertoireCategorie.title + repertoirEntry.componist.name}></RepertoireEntryComponent>)}    
  </div>
}

export default RepertoireCategoryComponent;
