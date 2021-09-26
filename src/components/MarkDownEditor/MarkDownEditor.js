import React, { useState } from 'react';
import styles from './MarkDownEditor.module.css';
import { markDown, SaveMarkDownFile } from '../../services/firebase-markdown.service';
import { MarkDown } from '../../models/markdown-dto.model';

function MarkDownEditor(props) {
  const [markdownCode, setMarkdownCode] = useState(props.markDown.code);

  const onChangeMarkupText = (event) => {
    setMarkdownCode(event.target.value);
  }

  const saveChanges = () => {
    SaveMarkDownFile(new MarkDown(markdownCode, "", props.markDown.path));
  }

  return <div className={styles.MarkdownEditor}>
    <div className={styles.toolbar}>
      <a href='https://markdown-it.github.io/' target="_blank" rel="noreferrer">How to write markup code</a>
      <button onClick={saveChanges}>Save</button>
    </div>
    <textarea onChange={(event) => {onChangeMarkupText(event)}} value={markdownCode}></textarea>
    <div dangerouslySetInnerHTML={{ __html: markDown.render(markdownCode) }} className={styles.preview}></div>
  </div>
}


export default MarkDownEditor;
