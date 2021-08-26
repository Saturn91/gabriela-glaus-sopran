import React from 'react';
import { getTestImage } from '../../services/image.service';
import styles from './HomeComponent.module.css';
import defaultStyle from '../../index.css';

const HomeComponent = () => (
  <div className={styles.HomeComponent} data-testid="HomeComponent">
    <div className={styles.imageContainer}>
      {getTestImage(styles.imageFill)}
    </div>  
    <div className={styles.bannerContainer}>
      <h1 className={styles.banner}>Gabriela Glaus - Sopran</h1>
    </div>  
  </div>
);

HomeComponent.propTypes = {};

HomeComponent.defaultProps = {};

export default HomeComponent;
