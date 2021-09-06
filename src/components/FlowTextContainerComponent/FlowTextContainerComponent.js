import React from 'react';
import FlowTextComponent from './FlowTextComponent/FlowTextComponent';

function FlowTextContainerComponent(props) {
    return <div>
      {props.flowText.flowTextParagraphs.map(flowTextParagraph => (
        <FlowTextComponent flowTextParagraph={flowTextParagraph} key={flowTextParagraph.text}></FlowTextComponent>
      ))}
    </div>
}

export default FlowTextContainerComponent;
