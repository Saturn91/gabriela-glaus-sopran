import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayAudioComponent from './PlayAudioComponent';

describe('<PlayAudioComponent/>', () => {
  test('it should mount', () => {
    render(<PlayAudioComponent />);
    
    const audioComponentPlayAudioComponent = screen.getByTestId('PlayAudioComponent');

    expect(audioComponentPlayAudioComponent).toBeInTheDocument();
  });
});