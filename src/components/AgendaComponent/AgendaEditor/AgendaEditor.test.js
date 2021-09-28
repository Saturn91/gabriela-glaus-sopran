import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AgendaEditor from './AgendaEditor';

describe('<AgendaEditor />', () => {
  test('it should mount', () => {
    render(<AgendaEditor />);
    
    const agendaEditor = screen.getByTestId('AgendaEditor');

    expect(agendaEditor).toBeInTheDocument();
  });
});