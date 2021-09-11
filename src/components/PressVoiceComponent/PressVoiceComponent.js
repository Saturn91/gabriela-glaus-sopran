import React from 'react';
import PressEntryLineComponent from './PressEntryLineComponent/PressEntryLineComponent';
import { getPressEntries } from '../../services/pressentry.service';
import BaseComponent from '../BaseComponent/BaseComponent';

function PressVoiceComponent() {
  return <BaseComponent 
    hasBackGroundImage={false}
    hasBackground={false}
    element={getPressEntries().map(pressEntry => <PressEntryLineComponent pressEntry={pressEntry} key={Math.random()}></PressEntryLineComponent>)}>
  </BaseComponent>
}

export default PressVoiceComponent;
