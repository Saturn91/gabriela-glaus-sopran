import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EditFlowTextComponent from './EditFlowTextComponent';

describe('<EditFlowTextComponent />', () => {
  test('it should mount', () => {
    render(<EditFlowTextComponent />);
    
    const editFlowTextComponent = screen.getByTestId('EditFlowTextComponent');

    expect(editFlowTextComponent).toBeInTheDocument();
  });
});