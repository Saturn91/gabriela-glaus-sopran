import React from 'react';
import styles from './PressVoiceComponent.module.css';
import mainStyles from '../mainStyle.module.css';
import PressEntryLineComponent from './PressEntryLineComponent/PressEntryLineComponent';
import { getPressEntries } from '../../services/pressentry.service';
import { getVitaImage } from '../../services/image.service';

function PressVoiceComponent() {
  return <div className={mainStyles.componentMainStyle} data-testid="AgendaComponent">
    <div className={[mainStyles.mainDivHorizontalCenteredChildren]}>
      {getVitaImage([mainStyles.backgroundImage, mainStyles.hideOnPhones].join(' '))}
      <div className={[mainStyles.mainCenteredInlayDiv, styles.PressVoiceComponent].join(' ')}>
        {getPressEntries().map(pressEntry => <PressEntryLineComponent pressEntry={pressEntry} key={Math.random()}></PressEntryLineComponent>)}
      </div>
    </div>
  </div>
}

export default PressVoiceComponent;
