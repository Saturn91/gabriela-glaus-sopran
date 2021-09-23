import React from 'react';
import { LogOutFromGoogle } from '../Login/Login.service';
import styles from './Logout.module.css';
import logoutIcon from '../icons/log-out.ico';

function Logout() {
  return <div className={styles.Logout}>
    <div onClick={LogOutFromGoogle}>
      <img src={logoutIcon} alt=''></img>
    </div>
    
  </div>
}

export default Logout;
