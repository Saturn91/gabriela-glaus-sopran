import React, {useState} from 'react';
import styles from './HeaderComponent.module.css';
import { Link } from "react-router-dom";
import { RouteDto } from './route';

const routes = [
  new RouteDto('/', "Home"),
  new RouteDto('/vita', "Vita"),
  new RouteDto('/agenda', "Agenda"),
  new RouteDto('/fotos', "Fotos"),
  new RouteDto('/audio', "Audio"),
  new RouteDto('/press', "Pressestimmen"),
  new RouteDto('/repertoire', "Repetoire"),
  new RouteDto('/contact', "Kontakt")
]

function getStyle(route, actualRoute) {
  if(route === actualRoute) return styles.selected
  return styles.notSelected;
}

function HeaderComponent() {
  const [actualRoute, setActualRoute ] = useState('/');



  return <div className={styles.HeaderComponent} data-testid="HeaderComponent">  
    {routes.map(route => <Link to={route.route} className={getStyle(route.route, actualRoute)} onClick={() => setActualRoute(route.route)}>{route.linkName}</Link>)}
  </div>
}

export default HeaderComponent;
