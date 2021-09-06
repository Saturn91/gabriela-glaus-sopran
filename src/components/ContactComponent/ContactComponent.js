import React from 'react';
import styles from './ContactComponent.module.css';
import mainStyles from '../mainStyle.module.css';
import { getVitaImage } from '../../services/image.service';
import { sendEmail } from '../../services/email.service';
import SocialMediaComponent from '../SocialMediaComponent/SocialMediaComponent';
import { getSocialMedias } from '../../services/socialmedia.service';

const formId = 'contactForm';

function onFormSubmit(onSubmit) {
  onSubmit.preventDefault();
  sendEmail(onSubmit.target[0].value, onSubmit.target[1].value, onSubmit.target[2].value);
  clearForm();
}

function clearForm() {
  document.getElementById(formId).reset();
}

function ContactComponent(){  
  return <div className={mainStyles.componentMainStyle} data-testid="ContactComponent">
    <div className={[mainStyles.mainDivHorizontalCenteredChildren]}>
      {getVitaImage([mainStyles.backgroundImage, mainStyles.hideOnPhones].join(' '))}
      <div className={[mainStyles.mainCenteredInlayDiv, styles.ContactComponent].join(' ')}>
      <form className={styles.emailForm} onSubmit={(onSumbit) => onFormSubmit(onSumbit)} id={formId}>
        <input type="Email" placeholder="maximilian.muster@hotmail.com" name='email' required></input>
        <input type="Text" placeholder="Dein Betreff" name='subject' required></input>
        <textarea placeholder="Deine Nachricht" rows="10" name='message' required></textarea>
        <div className={styles.buttonHolder}>
          <button className={styles.left} type='submit'>Submit</button>
          <button className={styles.right} type='button' onClick={() => clearForm()}>Cancel</button>
        </div>        
      </form> 
      <SocialMediaComponent socialMedias={getSocialMedias()} ></SocialMediaComponent> 
      </div>    
    </div>      
  </div>
}

export default ContactComponent;
