import React from 'react';
import PropTypes from 'prop-types';
import styles from './VitaComponent.module.css';

const VitaComponent = () => (
  <div className={styles.VitaComponent} data-testid="VitaComponent">
    VitaComponent Component
  </div>
);

VitaComponent.propTypes = {};

VitaComponent.defaultProps = {};

export default VitaComponent;
