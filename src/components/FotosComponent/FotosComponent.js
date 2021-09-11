import React from 'react';
import { getImageCollections } from '../../services/image.service';
import FotoAlbumComponent from './FotoAlbumComponent/FotoAlbumComponent';
import BaseComponent from '../BaseComponent/BaseComponent';


function FotosComponent() {
  let imageCollections = getImageCollections();
  return <BaseComponent 
    hasBackGroundImage={false} 
    hasBackground={false}
    element={imageCollections.map(imageCollection => <FotoAlbumComponent collection={imageCollection} key={imageCollection.name}></FotoAlbumComponent>)}>
  </BaseComponent>
};

export default FotosComponent;
