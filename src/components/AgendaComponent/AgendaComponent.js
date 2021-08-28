import React, {useState} from 'react';
import styles from './AgendaComponent.module.css';
import mainStyles from '../mainStyle.module.css';

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

function AgendaComponent(){
  const [category, setCategoryState] = useState(categoryTypes.CONCERTS);
  const [subCategory, setSubCategoryState] = useState(subCategoryTypes.ACTUAL);

  return <div className={mainStyles.componentMainStyle} data-testid="AgendaComponent">
    <div className={[mainStyles.mainDivHorizontalCenteredChildren]}>
      <div className={[mainStyles.mainCenteredInlayDiv, styles.AgendaComponent].join(' ')}>
        <div className={styles.options}>
          <div>
            <button className={getActiveSelectionStyle(category, categoryTypes.CONCERTS)} onClick={() => setCategoryState(categoryTypes.CONCERTS)}>Konzerte</button>
            <button className={getActiveSelectionStyle(category, categoryTypes.PROJECTS)} onClick={() => setCategoryState(categoryTypes.PROJECTS)}>Projekte</button>
          </div>
          <select className={styles.selector}>
            <option onClick={() => setSubCategoryState(subCategoryTypes.ACTUAL)}>aktuelle</option>
            <option onClick={() => setSubCategoryState(subCategoryTypes.PAST)}>vergangene</option>
          </select>
        </div>
        <div>
        {category}: {subCategory}
        </div>    
      </div>    
    </div>      
  </div>
}

export default AgendaComponent;
