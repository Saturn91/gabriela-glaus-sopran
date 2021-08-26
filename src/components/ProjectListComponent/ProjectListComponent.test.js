import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProjectListComponent from './ProjectListComponent';

describe('<ProjectListComponent />', () => {
  test('it should mount', () => {
    render(<ProjectListComponent />);
    
    const projectListComponent = screen.getByTestId('ProjectListComponent');

    expect(projectListComponent).toBeInTheDocument();
  });
});