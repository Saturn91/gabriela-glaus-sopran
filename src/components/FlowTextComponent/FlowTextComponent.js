import React from 'react';
import styles from './FlowTextComponent.module.css';

const componentStyle = {
  p: {
    margin: '20px',
    fontSize: '1.2rem'
  },
  h1: {
    margin: '20px',
    marginTop: '40px',
    marginBottom: '60px',
  },
};

function FlowTextComponent(props) {
  return props.flowText.isTitle ? <h1 style={componentStyle.h1}>{props.flowText.text}</h1> : <p style={componentStyle.p}>{props.flowText.text}</p>;
}

export default FlowTextComponent;
