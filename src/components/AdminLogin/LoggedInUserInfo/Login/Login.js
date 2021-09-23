import React, { } from 'react';
import { LoginWithGooglePopUp } from './Login.service';
import loginIcon from '../icons/log-in.ico';
import styles from "./Login.module.css";

function Login() {
  return <div className={styles.Login}> 
    <div onClick={() => {
      LoginWithGooglePopUp()
        .then(() => console.log('succesfull login'))
        .catch(() => console.log('error during login!'));
    }}>
    <img src={loginIcon} alt=''></img>
    </div>  
  </div>
}

export default Login;
