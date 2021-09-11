import React from 'react';
import styles from './BaseComponent.module.css';
import mainStyles from '../mainStyle.module.css';
import { getVitaImage } from '../../services/image.service';

function BaseComponent(props) {
  return <div className={mainStyles.componentMainStyle} data-testid="BaseCompoent">
    <div className={[mainStyles.mainDivHorizontalCenteredChildren]}>
      {getVitaImage([mainStyles.backgroundImage, mainStyles.hideOnPhones].join(' '))}
      <div className={[mainStyles.mainCenteredInlayDiv, styles.BaseComponent].join(' ')}>
        {props.element}
      </div>
    </div>
  </div>
}

BaseComponent.propTypes = {};

BaseComponent.defaultProps = {};

export default BaseComponent;
