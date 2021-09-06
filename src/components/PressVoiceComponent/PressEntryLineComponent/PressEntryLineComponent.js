import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { formatDate } from '../../../services/date.service';
import { openLink } from '../../../services/link.service';
import FlowTextContainerComponent from '../../FlowTextContainerComponent/FlowTextContainerComponent';
import styles from './PressEntryLineComponent.module.css';

function getImage(image) {
  return image ? <img src={image.url} alt="pressImage" className={styles.pressImage}></img> : undefined;
}

function getLink(link) {
  return link ? <button onClick={() => openLink(link)}>mehr</button> : undefined;
}

function PressEntryLineComponent(props) {
  const [link, setLink] = useState('');
  useEffect(() => setLink(props.pressEntry.link ? props.pressEntry.link : props.pressEntry.pdf), [props.pressEntry]);

  return <div className={styles.PressEntryLineComponent} data-testid="PressEntryLineComponent">
    <div className={styles.imageComponent}>
      {getImage(props.pressEntry.image)}
    </div>    
    <p>{formatDate(props.pressEntry.date)}</p>
    <FlowTextContainerComponent flowText={props.pressEntry.flowText}></FlowTextContainerComponent>
    {getLink(link)}
  </div>
}

export default PressEntryLineComponent;
