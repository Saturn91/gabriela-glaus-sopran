import React, {useState} from 'react';
import styles from './AgendaComponent.module.css';
import mainStyles from '../mainStyle.module.css';
import { getCurrentEvents, getCurrentProjects, getPastEvents, getPastProjects } from '../../services/event.service';
import { getVitaImage } from '../../services/image.service';
import AgendaProjectCard from '../AgendaProjectCard/AgendaProjectCard';
import AgendaEventCardDetailed from '../AgendaEventCardDetailed/AgendaEventCardDetailed';

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

function getData(filter1, filter2) {
  if(filter1 === categoryTypes.CONCERTS) {
    if(filter2 === subCategoryTypes.ACTUAL) return getCurrentEvents();
    if(filter2 === subCategoryTypes.PAST) return getPastEvents();
  }
  if(filter1 === categoryTypes.PROJECTS) {
    if(filter2 === subCategoryTypes.ACTUAL) return getCurrentProjects();
    if(filter2 === subCategoryTypes.PAST) return getPastProjects();
  }  
}

function displayCategory(category, subCategory) {
  let data = getData(category, subCategory);
  let display;

  if(category === categoryTypes.CONCERTS) {
    display = data.map(event => <AgendaEventCardDetailed event={event}></AgendaEventCardDetailed>);
  }

  if(category === categoryTypes.PROJECTS) {
    display = data.map(project => <AgendaProjectCard project={project}></AgendaProjectCard>);
  }

  return <div className={styles.listCentered}>
    <div>
      {display}
    </div>    
  </div>
}

function AgendaComponent(){
  const [category, setCategoryState] = useState(categoryTypes.CONCERTS);
  const [subCategory, setSubCategoryState] = useState(subCategoryTypes.ACTUAL);

  

  return <div className={mainStyles.componentMainStyle} data-testid="AgendaComponent">
    <div className={[mainStyles.mainDivHorizontalCenteredChildren]}>
      <div className={[mainStyles.mainCenteredInlayDiv, styles.AgendaComponent].join(' ')}>
        <div className={styles.options}>
          <div className={styles.buttonHolder}>
            <button className={getActiveSelectionStyle(category, categoryTypes.CONCERTS)} onClick={() => setCategoryState(categoryTypes.CONCERTS)}>Konzerte</button>
            <button className={getActiveSelectionStyle(category, categoryTypes.PROJECTS)} onClick={() => setCategoryState(categoryTypes.PROJECTS)}>Projekte</button>
          </div>
          <select className={styles.selector}>
            <option onClick={() => setSubCategoryState(subCategoryTypes.ACTUAL)}>aktuelle</option>
            <option onClick={() => setSubCategoryState(subCategoryTypes.PAST)}>vergangene</option>
          </select>
        </div>
        <div>
          {displayCategory(category, subCategory)}
        </div>    
      </div>    
    </div>      
  </div>
}

export default AgendaComponent;
