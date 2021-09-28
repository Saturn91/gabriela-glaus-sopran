import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProjectEditor from './ProjectEditor';

describe('<ProjectEditor />', () => {
  test('it should mount', () => {
    render(<ProjectEditor />);
    
    const projectEditor = screen.getByTestId('ProjectEditor');

    expect(projectEditor).toBeInTheDocument();
  });
});