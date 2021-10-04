import PromptComponent from '../PromptComponent/PromptComponent';
import styles from './EditPopup.module.css';

function EditPopup(props){
  return <div className={styles.EditPopup} data-testid="EditPopup">
    {props.children}
    <PromptComponent></PromptComponent>
  </div>
}

export default EditPopup;
