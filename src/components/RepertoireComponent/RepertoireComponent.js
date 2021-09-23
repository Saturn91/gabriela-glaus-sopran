import React from 'react';
import RepertoireCategoryComponent from './RepertoireCategoryComponent/RepertoireCategoryComponent';
import { GetRepetoire } from './services/repertoire.service';
import BaseComponent from '../BaseComponent/BaseComponent';

function RepertoireComponent(props) {
  const repertoireCategories = GetRepetoire();
  return <BaseComponent 
  user = {props.user}
    element={repertoireCategories.map(
      repertoireCategory => <RepertoireCategoryComponent repertoireCategorie={repertoireCategory} key={"RepertoireCategory_"+repertoireCategory.title}></RepertoireCategoryComponent>)}>
  </BaseComponent>
}

export default RepertoireComponent;
