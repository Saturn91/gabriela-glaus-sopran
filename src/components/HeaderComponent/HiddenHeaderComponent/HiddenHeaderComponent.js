import React, { useState } from 'react';
import styles from './HiddenHeaderComponent.module.css';
import burgerIcon from '../../../icons/burgerIcon.png';
import { routes, getStyle } from '../HeaderComponent';
import { Link } from 'react-router-dom';

function showRoutes(showMenu) {
  return showMenu? styles.showRoutes : styles.hideRoutes;
}

function HiddenHeaderComponent(props) {
  const [showMenu, toggle] = useState(false);

  return <div data-testid="HiddenHeaderComponent" className={styles.HiddenHeaderComponent} onClick={() => {toggle(!showMenu)}}>
    <img src={burgerIcon} className={styles.burgerIcon} alt='burgerItem'></img>
    <div className={showRoutes(showMenu)}>
      {routes.map(route => 
        <Link to={route.route} key={route.route} 
          className={getStyle(route.route, props.actualRoute)} 
          onClick={() => props.setActualRoute(route.route)}>{route.linkName}</Link>)}
    </div>    
  </div>
}

export default HiddenHeaderComponent;