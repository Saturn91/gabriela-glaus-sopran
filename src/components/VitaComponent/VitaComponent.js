import styles from './VitaComponent.module.css';
import BaseComponent from '../BaseComponent/BaseComponent';
import { getVita } from '../../services/vita.service';
import { useEffect, useState } from 'react';
import MarkDownEditor from '../MarkDownEditor/MarkDownEditor';
import { MarkDown } from '../../models/markdown-dto.model';

const loadingCode = `
  <h1>Gabriela Glaus - Sopran</h1>
  <p>...</p>
`;

function VitaComponent(props) {
  const [vitaMarkDown, setVitaMarkDown] = useState(new MarkDown('',loadingCode,''));
  useEffect(() => {    
    getVita().then((markdown) => setVitaMarkDown(markdown));
  }, []);

  return <BaseComponent 
    user = {props.user}
    element={<div className={styles.textbox} dangerouslySetInnerHTML={{ __html: vitaMarkDown.render }}></div>}
    editElements={<MarkDownEditor markDown = {vitaMarkDown}></MarkDownEditor>}>
  </BaseComponent>
}

export default VitaComponent;
