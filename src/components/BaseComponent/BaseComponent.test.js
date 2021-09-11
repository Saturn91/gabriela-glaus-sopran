import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BaseComponent from './BaseComponent';

describe('<BaseComponent />', () => {
  test('it should mount', () => {
    render(<BaseComponent />);
    
    const baseComponent = screen.getByTestId('BaseComponent');

    expect(baseComponent).toBeInTheDocument();
  });
});