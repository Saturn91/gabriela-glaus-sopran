import React from 'react';
import { getTestImage } from '../../services/image.service';
import styles from './HomeComponent.module.css';
import mainStyles from '../mainStyle.module.css';
import { getSinger } from '../../services/singer.service';

const HomeComponent = () => (
  <div className={mainStyles.componentMainStyle} data-testid="HomeComponent">
    <div className={styles.imageContainer}>
      {getTestImage(styles.imageFill)}
    </div>  
    <div className={styles.bannerContainer}>
      <h1 className={styles.banner}>{`${getSinger().name} - ${getSinger().voice}`}</h1>
    </div>  
  </div>
);

HomeComponent.propTypes = {};

HomeComponent.defaultProps = {};

export default HomeComponent;
