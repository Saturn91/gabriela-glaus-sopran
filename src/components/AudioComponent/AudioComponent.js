import React from 'react';
import PropTypes from 'prop-types';
import styles from './AudioComponent.module.css';

const AudioComponent = () => (
  <div className={styles.AudioComponent} data-testid="AudioComponent">
    AudioComponent Component
  </div>
);

AudioComponent.propTypes = {};

AudioComponent.defaultProps = {};

export default AudioComponent;
