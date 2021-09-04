import React, { useState, useEffect } from 'react';
import styles from './CostumAudioPlaySliderComponent.module.css';

import playBtn from '../../../../icons/play.png'
import volumeIcon from '../../../../icons/volume.png'

let currentSong; 

function stopAudio(audio) {
  audio.pause();
  audio.currentTime = 0;
}

function playAudio(audio) {
  if(audio.paused) {
    if(currentSong) stopAudio(currentSong);
    audio.play();
    currentSong = audio;
  } else {
    stopAudio(audio); 
  } 
}

function formatDuration(duration) {
  let minutes = Math.round((duration- duration % 60) / 60);
  let secondes = Math.round(duration % 60);
  if(secondes === 60) {
      minutes +=1;
      secondes = 0;
  }
  let secondsText = ''+secondes;
  if(secondes < 10) {
      secondsText = '0' + secondes;
  }
  return minutes + ":" + secondsText;
}

function CostumAudioPlaySliderComponent(audioUrl) {
  const volumeSliderID = "volumeSlider_" + audioUrl.audio;
  const [audio] = useState(new Audio(audioUrl.audio));
  const [volume, setVolume] = useState(50);  
  const [endPosition, setEndPosition] = useState(formatDuration(0));
  const [actualPosition, setActualPosition] = useState(formatDuration(0));

  useEffect(() => {
    audio.oncanplaythrough = () => {
      setEndPosition("/ " + formatDuration(audio.duration));
      audio.volume = volume / 100;
      setVolume(audio.volume*100);   
      audio.ontimeupdate = () => {
        setActualPosition(formatDuration(audio.currentTime));
      }
    }    
  });

  return <div className={styles.CostumAudioPlaySliderComponent} data-testid="CostumAudioPlaySliderComponent">
    <img className={styles.icon} src={playBtn} alt='play' onClick={() => playAudio(audio)} style={{pointerEvents: "all"}}></img>
    <div className={styles.slidercontainer}>
        <input type="range" min="1" max="10000" className={styles.slider} id='audioPositionSlider'/>
    </div>
    <div className={styles.progressDisplay}>
        <p className={styles.actualPosition}>{actualPosition}</p>
        <p className={styles.endPosition}>{endPosition}</p>
    </div>
    <img className={styles.icon} src={volumeIcon} alt='volume'/>
    <div className={styles.volumeSliderContainer}>
        <input type="range" min="1" max="100" value={volume} onInput={() => setVolume(document.getElementById(volumeSliderID).value)} className={styles.volumeSlider} id={volumeSliderID}/>
    </div>  
  </div>
}

export default CostumAudioPlaySliderComponent;
