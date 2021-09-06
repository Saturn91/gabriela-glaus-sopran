import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SocialMediaComponent from './SocialMediaComponent';

describe('<SocialMediaComponent />', () => {
  test('it should mount', () => {
    render(<SocialMediaComponent />);
    
    const socialMediaComponent = screen.getByTestId('SocialMediaComponent');

    expect(socialMediaComponent).toBeInTheDocument();
  });
});