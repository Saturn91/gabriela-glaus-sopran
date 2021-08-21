import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PressVoiceComponent from './PressVoiceComponent';

describe('<PressVoiceComponent />', () => {
  test('it should mount', () => {
    render(<PressVoiceComponent />);
    
    const pressVoiceComponent = screen.getByTestId('PressVoiceComponent');

    expect(pressVoiceComponent).toBeInTheDocument();
  });
});