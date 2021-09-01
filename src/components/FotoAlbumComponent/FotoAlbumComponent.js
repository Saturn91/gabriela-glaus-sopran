import React from 'react';
import styles from './FotoAlbumComponent.module.css';

function FotoAlbumComponent(props){
  return <div className={styles.FotoAlbumComponent} data-testid="FotoAlbumComponent">
    {props.collection.name}
    {props.collection.images[0].getImage(styles.titleImage)}
  </div>
}

export default FotoAlbumComponent;
