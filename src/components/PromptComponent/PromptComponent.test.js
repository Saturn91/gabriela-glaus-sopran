import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PromptComponent from './PromptComponent';

describe('<PromptComponent />', () => {
  test('it should mount', () => {
    render(<PromptComponent />);
    
    const promptComponent = screen.getByTestId('PromptComponent');

    expect(promptComponent).toBeInTheDocument();
  });
});