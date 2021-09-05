import React, { useState, useEffect } from 'react';
import styles from './CostumAudioPlaySliderComponent.module.css';

import playBtn from '../../../../icons/play.png';
import volumeIcon from '../../../../icons/volume.png';
import mutedVolumeIcon from '../../../../icons/volume_mute.png';

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

function setAudioVolume(audio, volume, callBack, flag) {
  let audioVolume = volume / 100;
  if(volume > 95) audioVolume = 1;
  if(volume < 10) audioVolume = 0;
  callBack(audioVolume, flag);
  audio.volume = audioVolume;
}

function toggleMute(audio, callback, flag) {
    if(audio.volume > 0.2) {
      audio.volume = 0;
    } else {
      audio.volume = 0.5;
    }
    callback(audio.volume, flag);
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
  const positionSliderID = "positionSlider_" + audioUrl.audio;
  const [audio] = useState(new Audio(audioUrl.audio));
  const [volume, setVolume] = useState(50);  
  const [endPosition, setEndPosition] = useState(0.1);
  const [actualPosition, setActualPosition] = useState(1);
  const [actualVolumeIcon, setActualVolumeIcon] = useState(volumeIcon);

  useEffect(() => {
    audio.oncanplaythrough = () => {
      setEndPosition(audio.duration);
      audio.volume = volume / 100;
      setVolume(audio.volume*100);
    }    
  });

  useEffect(() => audio.ontimeupdate = () => setActualPosition(audio.currentTime / endPosition * 10000), [endPosition, audio]);

  function updateVolumeIcon(value, flagSetVolume) {
    if (value >= 0.2) {
      setActualVolumeIcon(volumeIcon);
    } else {
      setActualVolumeIcon(mutedVolumeIcon);
    }
    if(flagSetVolume) setVolume(value*100);
  }

  return <div className={styles.CostumAudioPlaySliderComponent} data-testid="CostumAudioPlaySliderComponent">
    <img className={styles.icon} src={playBtn} alt='play' onClick={() => playAudio(audio)} style={{pointerEvents: "all"}}></img>
    <div className={styles.slidercontainer}>
        <input 
          type="range"
          min="1" max="10000"
          value={actualPosition} 
          className={styles.slider}
          onInput={() => {
            setActualPosition(document.getElementById(positionSliderID).value);
            audio.currentTime = (actualPosition-1) / 10000 * endPosition;
          }}
          id={positionSliderID}
          />
    </div>
    <div className={styles.progressDisplay}>
        <p className={styles.actualPosition}>{formatDuration((actualPosition-1) / 10000 * endPosition)}</p>
        <p className={styles.endPosition}>{"/ " +formatDuration(endPosition)}</p>
    </div>
    <img className={styles.icon} src={actualVolumeIcon} alt='volume' onClick={() => toggleMute(audio, updateVolumeIcon, true)} style={{pointerEvents: "all"}}/>
    <div className={styles.volumeSliderContainer}>
        <input type="range" min="1" max="100" value={volume} onInput={() => {
          setVolume(document.getElementById(volumeSliderID).value);
          setAudioVolume(audio, volume, updateVolumeIcon, false);
        }} 
        className={styles.volumeSlider} 
        id={volumeSliderID}/>
    </div>  
  </div>
}

export default CostumAudioPlaySliderComponent;
