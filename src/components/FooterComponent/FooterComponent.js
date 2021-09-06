import React from 'react';
import styles from './FooterComponent.module.css';
import { getSinger } from '../../services/singer.service';

const FooterComponent = () => (
  <div className={styles.FooterComponent} data-testid="FooterComponent">
    <p className='copyright'><span>&#169;</span>{getSinger().name}</p>
  </div>
);

FooterComponent.propTypes = {};

FooterComponent.defaultProps = {};

export default FooterComponent;
