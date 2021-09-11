import React from 'react';
import RepertoireCategoryComponent from './RepertoireCategoryComponent/RepertoireCategoryComponent';
import styles from './RepertoireComponent.module.css';
import { GetRepetoire } from './services/repertoire.service';
import mainStyles from '../mainStyle.module.css';
import { getVitaImage } from '../../services/image.service';

function RepertoireComponent() {
  const repertoireCategories = GetRepetoire();
  return <div className={mainStyles.componentMainStyle} data-testid="RepertoireComponent">
  <div className={[mainStyles.mainDivHorizontalCenteredChildren]}>
    {getVitaImage([mainStyles.backgroundImage, mainStyles.hideOnPhones].join(' '))}
    <div className={[mainStyles.mainCenteredInlayDiv, styles.RepertoireComponent].join(' ')}>
        <RepertoireCategoryComponent repertoireCategorie={repertoireCategories[0]}></RepertoireCategoryComponent>
    </div>
  </div>
</div>;
}

export default RepertoireComponent;
