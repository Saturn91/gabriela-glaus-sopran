import React from 'react';
import { getTestImage } from '../../services/image.service';
import styles from './HomeComponent.module.css';

const divStyle = {
  height: 'calc(100vh - 100px)'
}

const HomeComponent = () => (
  <div className={styles.HomeComponent} data-testid="HomeComponent">
    <div className='card-layout dark huge-text' style={{width: '700px', marginTop: '600px', marginLeft: '20px', position: 'fixed'}}>
      <h1 style={{textAlign: 'center'}}>Gabriela Glaus - Sopran</h1>
    </div> 
    <div>
      {getTestImage(styles.imageFill, divStyle)}
    </div>   
  </div>
);

HomeComponent.propTypes = {};

HomeComponent.defaultProps = {};

export default HomeComponent;
