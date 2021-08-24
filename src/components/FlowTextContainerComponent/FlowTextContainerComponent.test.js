import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlowTextContainerComponent from './FlowTextContainerComponent';

describe('<FlowTextContainerComponent />', () => {
  test('it should mount', () => {
    render(<FlowTextContainerComponent />);
    
    const flowTextContainerComponent = screen.getByTestId('FlowTextContainerComponent');

    expect(flowTextContainerComponent).toBeInTheDocument();
  });
});