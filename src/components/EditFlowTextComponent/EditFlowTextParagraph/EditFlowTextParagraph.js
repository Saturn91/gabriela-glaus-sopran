import { useState } from 'react';
import { FlowTextType } from '../../../models/flowtext/flowtextparagraph.model';
import { SetFlowTextOnFirebase } from '../../../services/firebase-flowtext-service';
import styles from './EditFlowTextParagraph.module.css';

function EditFlowTextParagraph(props) {
  const UpdateParagraphOnDatabase = (flowTextParagraph, flowTextType, text) => {
    flowTextParagraph.type = flowTextType;
    flowTextParagraph.text = text;
    flowTextParagraph.value = text;
    SetFlowTextOnFirebase(flowTextParagraph);
  }

  const [flowTextType, setFlowTextType] = useState(props.flowTextParagraph.type);
  const [paragraphText, setParagraphText] = useState(props.flowTextParagraph.text);

  const thisId = "paragraph_"+ props.flowTextParagraph.databaseUrl + props.flowTextParagraph.databaseId;
  return <div className={styles.EditFlowTextParagraph} data-testid="EditFlowTextParagraph">
    <label>Paragrah type: </label><select id={thisId+"_select"} onChange={() => setFlowTextType(parseInt(document.getElementById(thisId+"_select").value))} className={styles.selector} value={flowTextType}>
      <option value={FlowTextType.TITLE}>Title</option>
      <option value={FlowTextType.PARAGRAPH}>Paragraph</option>
      <option value={FlowTextType.LINK}>Link</option>
    </select>
    <button onClick={() => {UpdateParagraphOnDatabase(props.flowTextParagraph, flowTextType, paragraphText)}}>save</button>
    <textarea id={thisId+"_text"} value={paragraphText} onChange={() => setParagraphText(document.getElementById(thisId+"_text").value)}/>
  </div>
}

export default EditFlowTextParagraph;
