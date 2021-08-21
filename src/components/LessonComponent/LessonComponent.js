import React from 'react';
import PropTypes from 'prop-types';
import styles from './LessonComponent.module.css';

const LessonComponent = () => (
  <div className={styles.LessonComponent} data-testid="LessonComponent">
    LessonComponent Component
  </div>
);

LessonComponent.propTypes = {};

LessonComponent.defaultProps = {};

export default LessonComponent;
