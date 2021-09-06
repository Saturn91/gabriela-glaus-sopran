import React, {useState} from 'react';
import styles from './HeaderComponent.module.css';
import { Link } from "react-router-dom";
import { RouteDto } from './route';
import HiddenHeaderComponent from './HiddenHeaderComponent/HiddenHeaderComponent';

export const routes = [
  new RouteDto('/', "Home"),
  new RouteDto('/vita', "Vita"),
  new RouteDto('/agenda', "Agenda"),
  new RouteDto('/fotos', "Fotos"),
  new RouteDto('/audio', "Audio"),
  new RouteDto('/press', "Pressestimmen"),
  new RouteDto('/repertoire', "Repertoire"),
  new RouteDto('/lessons', "Unterricht"),
  new RouteDto('/contact', "Kontakt")
]

export function getStyle(route, actualRoute) {
  if(route === actualRoute) return styles.selected
  return styles.notSelected;
}

function HeaderComponent() {
  const [actualRoute, setActualRoute ] = useState('/');

  return <div className={styles.HeaderComponent} data-testid="HeaderComponent">  
    <div className={styles.bigHeadder}>
      {routes.map(route => <Link key={route.route} to={route.route} className={getStyle(route.route, actualRoute)} onClick={() => setActualRoute(route.route)}>{route.linkName}</Link>)}
    </div>
    <div className={styles.smallHeader}>
      <HiddenHeaderComponent actualRoute={actualRoute} setActualRoute={setActualRoute}></HiddenHeaderComponent>
    </div>
  </div>
}

export default HeaderComponent;
