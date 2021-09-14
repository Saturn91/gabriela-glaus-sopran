import React from 'react';
import styles from './LessonComponent.module.css';
import BaseComponent from '../BaseComponent/BaseComponent';
import { getLessons } from './services/lesson.service';
import FlowTextContainerComponent from '../FlowTextContainerComponent/FlowTextContainerComponent';

function LessonComponent() {
  const lessons = getLessons();
  console.log(lessons[0].flowText)

  return <BaseComponent 
    element=
        {lessons.map(lesson => {
          return <div>
          <img src={lesson.image.url} alt={lesson.image.description} className={styles.titleImage}></img>
          <FlowTextContainerComponent flowText={lesson.flowText}></FlowTextContainerComponent>
          </div>
        })}
        
      
    ></BaseComponent>
}

export default LessonComponent;
