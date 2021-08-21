import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LessonComponent from './LessonComponent';

describe('<LessonComponent />', () => {
  test('it should mount', () => {
    render(<LessonComponent />);
    
    const lessonComponent = screen.getByTestId('LessonComponent');

    expect(lessonComponent).toBeInTheDocument();
  });
});