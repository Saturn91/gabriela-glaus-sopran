import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RepertoireComponent from './RepertoireComponent';

describe('<RepertoireComponent />', () => {
  test('it should mount', () => {
    render(<RepertoireComponent />);
    
    const repertoireComponent = screen.getByTestId('RepertoireComponent');

    expect(repertoireComponent).toBeInTheDocument();
  });
});