import React from 'react';
import styles from './AudioComponent.module.css';
import mainStyles from '../mainStyle.module.css';
import PlayAudioComponent from './PlayAudioComponent/PlayAudioComponent';
import { getVitaImage } from '../../services/image.service';
import {getTestAudio} from '../../services/audio.service';

function AudioComponent(){
  return <div className={[mainStyles.componentMainStyle, styles.AudioComponent].join(' ')} data-testid="AudioComponent">
    <div className={[mainStyles.mainDivHorizontalCenteredChildren]}>
      {getVitaImage([mainStyles.backgroundImage, mainStyles.hideOnPhones].join(' '))}
      <div className={mainStyles.mainCenteredInlayDiv}>
        {getTestAudio().map(audio => <PlayAudioComponent audio={audio} key={audio.title}></PlayAudioComponent>)}        
      </div>      
    </div>    
  </div>
}

export default AudioComponent;
