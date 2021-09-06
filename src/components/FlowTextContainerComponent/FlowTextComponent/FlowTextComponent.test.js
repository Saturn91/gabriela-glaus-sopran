import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlowTextComponent from './FlowTextComponent';

describe('<FlowTextComponent />', () => {
  test('it should mount', () => {
    render(<FlowTextComponent />);
    
    const flowTextComponent = screen.getByTestId('FlowTextComponent');

    expect(flowTextComponent).toBeInTheDocument();
  });
});