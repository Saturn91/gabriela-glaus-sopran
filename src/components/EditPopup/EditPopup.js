import React from 'react';
import PropTypes from 'prop-types';
import styles from './EditPopup.module.css';

const EditPopup = (props) => (
  <div className={styles.EditPopup} data-testid="EditPopup">
    {props.children}
  </div>
);

EditPopup.propTypes = {};

EditPopup.defaultProps = {};

export default EditPopup;
