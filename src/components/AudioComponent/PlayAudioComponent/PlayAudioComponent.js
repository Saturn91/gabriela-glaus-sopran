import React from 'react';
import styles from './PlayAudioComponent.module.css';
import defaultImage from '../../../icons/music.png';
import CostumAudioPlaySliderComponent from './CostumAudioPlaySliderComponent/CostumAudioPlaySliderComponent';

function getAudioImage(audioDTO) {
  return audioDTO.image ? audioDTO.image : defaultImage; 
}

function PlayAudioComponent(props) {
  return <div className={styles.PlayAudioComponent} data-testid="PlayAudioComponent">
    <div className={styles.audioHeader}>
      <img className={styles.audioImg} src={getAudioImage(props.audio)} alt='playbarImage'></img>
      <div className={styles.audioHeaderTextContainer}>
        <p className={styles.pieceTitle}>{props.audio.work} - {props.audio.title}</p>
        <p className={styles.musiciansText}>{props.audio.musicians}</p>
        <CostumAudioPlaySliderComponent audio={props.audio.audioUrl}></CostumAudioPlaySliderComponent>
      </div>
    </div>    
  </div>;
}

export default PlayAudioComponent;
