import React from 'react';
import styles from './BaseComponent.module.css';
import mainStyles from '../mainStyle.module.css';
import PropTypes from 'prop-types';
import { getVitaImage } from '../../services/image.service';

function backGroundImageIfSelected(props) {
  if(props.hasBackGroundImage) return getVitaImage([mainStyles.backgroundImage, mainStyles.hideOnPhones].join(' '));
}

function backGroundEnableIfSelected(props) {
  return props.hasBackground ? [mainStyles.mainCenteredInlayDiv, styles.BaseComponent].join(' ') : mainStyles.mainCenteredInlayDiv;
}

function BaseComponent(props) {
  return <div className={mainStyles.componentMainStyle} data-testid="BaseCompoent">
    <div className={[mainStyles.mainDivHorizontalCenteredChildren]}>
      {backGroundImageIfSelected(props)}
      <div className={backGroundEnableIfSelected(props)}>
        {props.element}
      </div>
    </div>
  </div>
}

BaseComponent.propTypes = {
  hasBackground: PropTypes.bool, 
  hasBackGroundImage: PropTypes.bool
};

BaseComponent.defaultProps = {
  hasBackground: true, 
  hasBackGroundImage: true
};

export default BaseComponent;
