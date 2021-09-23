import React from 'react';
import styles from './AdminEdit.module.css';
import editIcon from './icon/adminEdit.png';

function AdminEdit(props) {
  const openEditMode = () => {
    if(props.user.isAdmin && props.editMode) props.editMode();
  }

  return <div className={styles.AdminEdit} data-testid="AdminEdit" onClick={openEditMode}>
    {props.user?.isAdmin ? <img src={editIcon} alt=""></img>: ""}
  </div>
}

export default AdminEdit;
