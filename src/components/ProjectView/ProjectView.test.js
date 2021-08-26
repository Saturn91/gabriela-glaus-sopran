import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProjectView from './ProjectView';

describe('<ProjectView />', () => {
  test('it should mount', () => {
    render(<ProjectView />);
    
    const projectView = screen.getByTestId('ProjectView');

    expect(projectView).toBeInTheDocument();
  });
});