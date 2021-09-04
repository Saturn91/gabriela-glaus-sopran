import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CostumAudioPlaySliderComponent from './CostumAudioPlaySliderComponent';

describe('<CostumAudioPlaySliderComponent />', () => {
  test('it should mount', () => {
    render(<CostumAudioPlaySliderComponent />);
    
    const costumAudioPlaySliderComponent = screen.getByTestId('CostumAudioPlaySliderComponent');

    expect(costumAudioPlaySliderComponent).toBeInTheDocument();
  });
});