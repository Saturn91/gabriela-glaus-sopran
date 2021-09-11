import React from 'react';
import styles from './RepertoireEntryComponent.module.css';

function RepertoireEntryComponent(props) {
  const repertoireEntry = props.repertoireEntry;
  return <div className={styles.RepertoireEntryComponent} data-testid="RepertoireEntryComponent">
    <div className={styles.componist}>
      <h2>{repertoireEntry.componist.name}</h2>
      <p>{repertoireEntry.componist.lifeSpan}</p>
    </div>
    <div className={styles.songList}>
      {repertoireEntry.pieces.map(piece => <p key ={repertoireEntry.componist.name+piece.title}>{piece.title}</p>)}
    </div>
  </div>;
}

export default RepertoireEntryComponent;
