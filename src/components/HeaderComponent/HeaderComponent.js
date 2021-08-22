import React from 'react';
import styles from './HeaderComponent.module.css';
import {
  Link
} from "react-router-dom";

const HeaderComponent = () => (
  <div className={styles.HeaderComponent} data-testid="HeaderComponent">    
    <Link to="/">Home</Link>
    <Link to="/vita">Vita</Link>
    <Link to="/agenda">Agenda</Link>
    <Link to="/fotos">Fotos</Link>
    <Link to="/audio">Audio</Link>
    <Link to="/press">Pressestimmen</Link>
    <Link to="/repertoire">Repertoire</Link>
    <Link to="/lessons">Unterricht</Link>
    <Link to="/contact">Kontakt</Link>
  </div>
);

HeaderComponent.propTypes = {};

HeaderComponent.defaultProps = {};

export default HeaderComponent;
