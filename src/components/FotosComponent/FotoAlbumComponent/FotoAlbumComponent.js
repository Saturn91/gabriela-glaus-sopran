import React, { useState } from 'react';
import styles from './FotoAlbumComponent.module.css';

function getPreviewImageStyle(image, actualImage) {
    let style = styles.previewImage;
    if(image === actualImage) style = [styles.previewImage, styles.previewImageSeclected].join(' ');
    return style;
}

function FotoAlbumComponent(props){
  const [actual_image, setImage] = useState(props.collection.images[0]);
  return <div className={styles.FotoAlbumComponent} data-testid="FotoAlbumComponent">
    <div>
      <div className={styles.titleImageContainer}>
        <img src={actual_image.url} alt={actual_image.description} className={styles.titleImage}></img>
      </div>      
      <div className={styles.imageList}>
        <h1 className={styles.albumTitle}>{props.collection.name}</h1>
        {props.collection.images.map(image => 
          <div style={{display: "inline-block"}} key={image.description + Math.random()}>
            <div className={styles.previewImageContainer} onClick={() => setImage(image)}>
              <img src={image.url} alt={image.description} className={getPreviewImageStyle(actual_image, image)}></img>
            </div>
          </div>                  
        )}
      </div>
    </div>    
  </div>
}

export default FotoAlbumComponent;
