import React from 'react';
import styles from './PlayAudioComponent.module.css';
import defaultImage from '../../../icons/music.png';

function getAudioImage(audioDTO) {
  console.log(audioDTO.image);
  return audioDTO.image ? audioDTO.image : defaultImage; 
}

function PlayAudioComponent(props) {
  return <div className={styles.PlayAudioComponent} data-testid="PlayAudioComponent">
    <div className={styles.audioHeader}>
      <img className={styles.audioImg} src={getAudioImage(props.audio)} alt='playbarImage'></img>
      <div className={styles.audioHeaderTextContainer}>
        <p>{props.audio.work} - {props.audio.title}</p>
        <p className={styles.musiciansText}>{props.audio.musicians}</p>
        <audio controls class={styles.playAudio}>    
          <source src={props.audio.audioUrl} type="audio/mpeg"/>
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>    
  </div>;
}

export default PlayAudioComponent;
