import Login from './Login/Login';
import Logout from './Logout/Logout';
import styles from './LoggedInUserInfo.module.css';

function LoggedInUserInfo(props) {
  return <div className={styles.LoggedInUserInfo}>
    <div className={styles.userInfoContainer}>
      {props.user?.photoURL != null ? <img src={props.user.photoURL} className={styles.userIcon} alt=''></img> : ''}
      <div>
        <h1>{props.user === null ? 'anonymus' : props.user?.displayName}</h1>
        <p>{props.user === null ? '' : props.user?.email}</p>
      </div>
    </div>    
    {props.user === null ? <Login></Login>: <Logout></Logout>}
  </div>
}


export default LoggedInUserInfo;
