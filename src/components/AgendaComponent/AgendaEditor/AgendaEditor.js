import React from 'react';
import styles from './AgendaEditor.module.css';
import ProjectEditor from './ProjectEditor/ProjectEditor';
import { sortProjectsByDates } from '../../../services/event.service';
import mainStyle from '../../mainStyle.module.css';

function AgendaEditor(props){
  return <div className={styles.AgendaEditor} data-testid="AgendaEditor">
    <form className={styles.newProjectForm}>
      <input 
        type='text'
        className={styles.newProjectTitle}
        placeholder='new project title'
      ></input> 
      <button 
        className={[styles.addNewProjectBtn, mainStyle.green].join(' ')}
        type='button'
      >New</button>
    </form>    
    {sortProjectsByDates(props.projects).reverse().map(project => <ProjectEditor project={project} key={project.title + '_' + project.events[0].date}></ProjectEditor>)}
  </div>
}



export default AgendaEditor;
