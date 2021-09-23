import React from 'react';
import PlayAudioComponent from './PlayAudioComponent/PlayAudioComponent';
import {getTestAudio} from '../../services/audio.service';
import BaseComponent from '../BaseComponent/BaseComponent';

function AudioComponent(props){
  return <BaseComponent 
    user = {props.user}
    element =    
        {getTestAudio().map(audio => <PlayAudioComponent audio={audio} key={audio.title}></PlayAudioComponent>)}>   
  </BaseComponent>
}

export default AudioComponent;
