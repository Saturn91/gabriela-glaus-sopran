import React, {useEffect, useState} from 'react';
import styles from './AgendaComponent.module.css';
import { getCurrentEvents, getPastEvents, getProjectsFiltered, getProjectsFromDB } from '../../services/event.service';
import AgendaProjectCard from './AgendaProjectCard/AgendaProjectCard';
import AgendaEventCardDetailed from './AgendaEventCardDetailed/AgendaEventCardDetailed';
import BaseComponent from '../BaseComponent/BaseComponent';

const categoryTypes = {
  CONCERTS: 'concerts',
  PROJECTS: 'projects'
}

const subCategoryTypes = {
  ACTUAL: 'actual',
  PAST: 'past'
}

function getActiveSelectionStyle(actualCategory, ownCategory) {
  return actualCategory === ownCategory ? styles.active : styles.inactive;
}

function getData(filter1, filter2, projects) {
  if(filter1 === categoryTypes.CONCERTS) {
    if(filter2 === subCategoryTypes.ACTUAL) return getCurrentEvents(projects);
    if(filter2 === subCategoryTypes.PAST) return getPastEvents(projects);
  }
  if(filter1 === categoryTypes.PROJECTS) {
    if(filter2 === subCategoryTypes.ACTUAL) return getProjectsFiltered(projects, "current");
    if(filter2 === subCategoryTypes.PAST) return getProjectsFiltered(projects, "past");
  }  
}

function displayCategory(category, subCategory, projects) {
  let data = getData(category, subCategory, projects);
  let display;

  if(category === categoryTypes.CONCERTS) {
    display = data.map(event => <AgendaEventCardDetailed event={event} key={event.toString()+event.date.toString()}></AgendaEventCardDetailed>);
  }

  if(category === categoryTypes.PROJECTS) {
    display = data.map(project => <AgendaProjectCard project={project} key={project.toString()+Math.random()}></AgendaProjectCard>);
  }

  return <div className={styles.listCentered}>
    <div>
      {display}
    </div>    
  </div>
}

function AgendaComponent(){
  const [projects, setProjects] = useState([]);

  const [category, setCategoryState] = useState(categoryTypes.CONCERTS);
  const [subCategory, setSubCategoryState] = useState(subCategoryTypes.ACTUAL);

  useEffect(() => {
    if(projects.length === 0) getProjectsFromDB().then((projects) => setProjects(projects));
  })

  return <BaseComponent element = 
    {<div>
      <div className={styles.options}>
          <div className={styles.buttonHolder}>
            <button className={getActiveSelectionStyle(category, categoryTypes.CONCERTS)} onClick={() => setCategoryState(categoryTypes.CONCERTS)}>Konzerte</button>
            <button className={getActiveSelectionStyle(category, categoryTypes.PROJECTS)} onClick={() => setCategoryState(categoryTypes.PROJECTS)}>Projekte</button>
          </div>
          <select id="subCategorySelector" onChange={() => setSubCategoryState(document.getElementById("subCategorySelector").value)} className={styles.selector}>
            <option value={subCategoryTypes.ACTUAL}>aktuelle</option>
            <option value={subCategoryTypes.PAST}>vergangene</option>
          </select>
        </div>
        <div>
          {displayCategory(category, subCategory, projects)}
        </div>
    </div>}    
  ></BaseComponent>
}

export default AgendaComponent;
