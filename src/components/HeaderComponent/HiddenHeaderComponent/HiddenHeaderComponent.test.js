import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HiddenHeaderComponent from './HiddenHeaderComponent';

describe('<HiddenHeaderComponent />', () => {
  test('it should mount', () => {
    render(<HiddenHeaderComponent />);
    
    const hiddenHeaderComponent = screen.getByTestId('HiddenHeaderComponent');

    expect(hiddenHeaderComponent).toBeInTheDocument();
  });
});