import React from 'react';
import { getCurrentProjects, getPastProjects } from '../../services/event.service';
import AgendaProjectCard from '../AgendaProjectCard/AgendaProjectCard';
import { displayStates } from '../ProjectView/ProjectView';

function ProjectListComponent(props) {
  let actualView;

  let projects = getCurrentProjects();

  switch(props.displayState) {
    case displayStates.ACTUAL:
      actualView = <div> {projects.map(project => <AgendaProjectCard project={project}></AgendaProjectCard>)} </div>
      break;
    case displayStates.PAST:
      projects = getPastProjects();
      actualView = <div> {projects.map(project => <AgendaProjectCard project={project}></AgendaProjectCard>)} </div>
      break;
    default:
      console.error('unexpected error, unknown display state: ' + props.displayState);
      actualView = <AgendaProjectCard project={projects[0]}></AgendaProjectCard>
      break;
  
  }

  return actualView;
}

export default ProjectListComponent;
