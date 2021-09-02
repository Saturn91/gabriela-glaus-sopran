import React from 'react';
import { getImageCollections } from '../../services/image.service';
import FotoAlbumComponent from '../FotoAlbumComponent/FotoAlbumComponent';
import mainStyles from '../mainStyle.module.css';
import styles from './FotosComponent.module.css';


function FotosComponent() {
  let imageCollections = getImageCollections();

  return <div className={mainStyles.componentMainStyle} data-testid="FotosComponent">
    <div className={[mainStyles.mainDivHorizontalCenteredChildren]}>
      <div className={[mainStyles.mainCenteredInlayDiv, styles.FotosComponent].join(' ')}>
        <div>
          {imageCollections.map(imageCollection => <FotoAlbumComponent collection={imageCollection} key={imageCollection.name}></FotoAlbumComponent>)}
        </div>
      </div>
    </div>
  </div>
};

export default FotosComponent;
