import React from 'react';
import styles from './ContactComponent.module.css';
import mainStyles from '../mainStyle.module.css';
import { getVitaImage } from '../../services/image.service';

function ContactComponent(){  

  return <div className={mainStyles.componentMainStyle} data-testid="ContactComponent">
    <div className={[mainStyles.mainDivHorizontalCenteredChildren]}>
      {getVitaImage([mainStyles.backgroundImage, mainStyles.hideOnPhones].join(' '))}
      <div className={[mainStyles.mainCenteredInlayDiv, styles.ContactComponent].join(' ')}>
      <form className={styles.emailForm}>
        <input type="Email" placeholder="maximilian.muster@hotmail.com"></input>
        <input type="Text" placeholder="Dein Betreff"></input>
        <textarea placeholder="Deine Nachricht" rows="10"></textarea>
        <div className={styles.buttonHolder}>
          <button className={styles.left}>Submit</button>
          <button className={styles.right}>Cancel</button>
        </div>        
      </form>  
      </div>    
    </div>      
  </div>
}

export default ContactComponent;
