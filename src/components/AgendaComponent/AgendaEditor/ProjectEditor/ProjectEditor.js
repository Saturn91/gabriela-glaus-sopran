import React, { useState } from 'react';
import EventsEditor from './EventsEditor/EventsEditor';
import styles from './ProjectEditor.module.css';
import mainStyle from '../../../mainStyle.module.css';

function ProjectEditor(props) {
  const [showDetails, setShowDetails] = useState(false);
  const [title, setTitle] = useState(props.project.title);
  const [infoLink, setInfoLink] = useState(props.project.info);
  const [description, setDescription] = useState(props.project.description);
  return <div className={styles.ProjectEditor} data-testid="ProjectEditor">
    
    {showDetails ? <div className={[styles.open, styles.Container].join(' ')}>
      <h1>Project Details:</h1>
      <form>
        <div className={styles.lineProperty}>
          <label>Title:</label><input type='text' value={title} onChange={(event) => {setTitle(event.target.value)}}></input>
        </div>
        <div className={styles.lineProperty}>
          <label>info link:</label><input type='text' value={infoLink} onChange={(event) => {setInfoLink(event.target.value)}}></input>
        </div> 
        <div className={styles.lineProperty}>
          <label>Description:</label><textarea type='text' value={description} onChange={(event) => {setDescription(event.target.value)}}></textarea>
        </div>   
        <EventsEditor events={props.project.events}></EventsEditor>     
        <div className={styles.buttonHolder}> 
          <button type='button'>Save Changes</button>
          <button className={mainStyle.red} type='button'>Delete Project</button>
          <button type='button' onClick={() => {setShowDetails(false)}}>Close</button>
        </div>        
      </form>
      
      
    </div>:<div className={[styles.closed, styles.Container].join(' ')} onClick={() => {setShowDetails(true)}}><h1>{props.project.title} -{'>'} click to edit</h1></div>}
  </div>
}

export default ProjectEditor;
