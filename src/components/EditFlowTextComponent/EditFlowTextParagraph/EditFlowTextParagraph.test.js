import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EditFlowTextParagraph from './EditFlowTextParagraph';

describe('<EditFlowTextParagraph />', () => {
  test('it should mount', () => {
    render(<EditFlowTextParagraph />);
    
    const editFlowTextParagraph = screen.getByTestId('EditFlowTextParagraph');

    expect(editFlowTextParagraph).toBeInTheDocument();
  });
});