import { useState } from 'react';
import { FlowTextType } from '../../../models/flowtext/flowtextparagraph.model';
import styles from './EditFlowTextParagraph.module.css';

function EditFlowTextParagraph(props) {
  const [flowTextType, setFlowTextType] = useState(props.flowTextParagraph.type);
  const thisId = "paragraphType_"+ props.flowTextParagraph.databaseUrl;
  return <div className={styles.EditFlowTextParagraph} data-testid="EditFlowTextParagraph">
    <label>Paragrah type: </label><select id={thisId} onChange={() => setFlowTextType(document.getElementById(thisId).value)} className={styles.selector} value={flowTextType}>
      <option value={FlowTextType.TITLE}>Title</option>
      <option value={FlowTextType.PARAGRAPH}>Paragraph</option>
      <option value={FlowTextType.LINK}>Link</option>
    </select>
    <button>save</button>
    <textarea value={props.flowTextParagraph.text}/>
  </div>
}

export default EditFlowTextParagraph;
