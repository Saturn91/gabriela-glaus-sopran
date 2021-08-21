import React from 'react';
import styles from './FooterComponent.module.css';

const FooterComponent = () => (
  <div className={styles.FooterComponent} data-testid="FooterComponent">
    <p className='copyright'><span>&#169;</span> Gabriela Glaus</p>
  </div>
);

FooterComponent.propTypes = {};

FooterComponent.defaultProps = {};

export default FooterComponent;
