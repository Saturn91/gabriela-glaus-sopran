import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactComponent.module.css';

const ContactComponent = () => (
  <div className={styles.ContactComponent} data-testid="ContactComponent">
    ContactComponent Component
  </div>
);

ContactComponent.propTypes = {};

ContactComponent.defaultProps = {};

export default ContactComponent;
