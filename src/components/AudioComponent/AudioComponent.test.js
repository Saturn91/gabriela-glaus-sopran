import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AudioComponent from './AudioComponent';

describe('<AudioComponent />', () => {
  test('it should mount', () => {
    render(<AudioComponent />);
    
    const audioComponent = screen.getByTestId('AudioComponent');

    expect(audioComponent).toBeInTheDocument();
  });
});