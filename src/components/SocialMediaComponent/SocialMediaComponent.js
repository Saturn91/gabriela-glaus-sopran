import React from 'react';
import styles from './SocialMediaComponent.module.css';

function openLink(link) {
  window.open(link, "_self");
}

function SocialMediaComponent(props) {
  return <div className={styles.SocialMediaComponent} data-testid="SocialMediaComponent">
    {props.socialMedias.map(socialMedia => 
      <img src={socialMedia.icon} onClick={() => openLink(socialMedia.link)} alt='socialMediaLink' style={{pointerEvents: "all"}} className={styles.icon}/>)}
  </div>
}

export default SocialMediaComponent;
