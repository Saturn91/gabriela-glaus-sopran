import React from 'react';
import styles from './LessonComponent.module.css';
import BaseComponent from '../BaseComponent/BaseComponent';
import { getLessons } from './services/lesson.service';
import FlowTextContainerComponent from '../FlowTextContainerComponent/FlowTextContainerComponent';

function LessonComponent(props) {
  const lessons = getLessons();
  return <BaseComponent 
    user = {props.user}
    element=
        {lessons.map(lesson => {
          return <div key={"titel: " + lesson.flowText.flowTextParagraphs[0].text} className={styles.LessonComponent}>
          <div className={styles.imgHolder}>
            <img src={lesson.image.url} alt={lesson.image.description} className={styles.titleImage}></img>
          </div>          
          <FlowTextContainerComponent flowText={lesson.flowText}></FlowTextContainerComponent>
          </div>
        })}
        
      
    ></BaseComponent>
}

export default LessonComponent;
