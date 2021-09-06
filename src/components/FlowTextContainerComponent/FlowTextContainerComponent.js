import React from 'react';
import FlowTextComponent from './FlowTextComponent/FlowTextComponent';

function FlowTextContainerComponent(props) {
    return <div>
      {props.flowTexts.map(flowText => (
        <FlowTextComponent flowText={flowText}></FlowTextComponent>
      ))}
    </div>
}

export default FlowTextContainerComponent;
