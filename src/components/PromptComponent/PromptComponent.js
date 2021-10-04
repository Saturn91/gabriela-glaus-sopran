import React from 'react';
import styles from './PromptComponent.module.css';
import { hidePrompt } from './services/prompt.service';

function PromptComponent() {
  return <div id='promptContainer' className={styles.PromptComponent} data-testid="PromptComponent">
    <div className={styles.PromptBody}>
      <div className={styles.Header}>
        <h1 id='promptContainert-title'>Warning Prompt</h1>
      </div>
      <p id='promptContainert-msg'></p>
      <div className={styles.buttonHolder}>
        <button id='promptContainert-btn1' onClick={() => hidePrompt()}>Close</button>
        <button id='promptContainert-btn2' onClick={() => hidePrompt()} style={{display: 'none'}}>ok</button>
        <button id='promptContainert-btn3' onClick={() => hidePrompt()} style={{display: 'none'}}>Cancel</button>
      </div>
    </div>    
  </div>;
}

export default PromptComponent;
