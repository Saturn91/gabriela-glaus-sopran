import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PressEntryLineComponent from './PressEntryLineComponent';

describe('<PressEntryLineComponent />', () => {
  test('it should mount', () => {
    render(<PressEntryLineComponent />);
    
    const pressEntryLineComponent = screen.getByTestId('PressEntryLineComponent');

    expect(pressEntryLineComponent).toBeInTheDocument();
  });
});