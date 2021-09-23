import React, { useState } from 'react';
import styles from './BaseComponent.module.css';
import mainStyles from '../mainStyle.module.css';
import PropTypes from 'prop-types';
import { getVitaImage } from '../../services/image.service';
import AdminEdit from '../AdminEdit/AdminEdit';
import EditPopup from '../EditPopup/EditPopup';

function backGroundImageIfSelected(props) {
  if(props.hasBackGroundImage) return getVitaImage([mainStyles.backgroundImage, mainStyles.hideOnPhones].join(' '));
}

function backGroundEnableIfSelected(props) {
  return props.hasBackground ? [mainStyles.mainCenteredInlayDiv, styles.BaseComponent].join(' ') : mainStyles.mainCenteredInlayDiv;
}

function BaseComponent(props) {
  const [editMode, setEditMode] = useState(false);

  return <div className={mainStyles.componentMainStyle} data-testid="BaseCompoent">
    <div className={[mainStyles.mainDivHorizontalCenteredChildren]}>
      {backGroundImageIfSelected(props)}
      <div className={backGroundEnableIfSelected(props)}>
        {props.element}
        {editMode ? <EditPopup>
          {props.editElements}
        </EditPopup> : ""}
        <AdminEdit user={props.user} editMode={() => setEditMode(!editMode)}/>
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
