import React from 'react';
import styles from './AdminLogin.module.css';
import LoggedInUserInfo from './LoggedInUserInfo/LoggedInUserInfo';
import BaseComponent from '../BaseComponent/BaseComponent';

function AdminLogin(props) {
  return <BaseComponent 
    hasBackGroundImage={false} 
    hasBackground={false}
    element = 
    {<div className={styles.AdminLogin} data-testid="AdminLogin">
      {props.user?.isAdmin ?<h1>Welcome Admin</h1>  : <h1>Please Log in if you are a Admin</h1>}
      <LoggedInUserInfo user={props.user}></LoggedInUserInfo>
    </div>}>
  </BaseComponent>
}

AdminLogin.propTypes = {};

AdminLogin.defaultProps = {};

export default AdminLogin;
