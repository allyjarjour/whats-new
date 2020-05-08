import React from 'react';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';



describe('App', () => {
  it('A selection of articles can be shown on page for any given theme', () => {
    const { getByText } = render(<App />)
    fireEvent.click(getByText('Entertainment'))
    expect(getByText('Spider-Man Will Remain in the Marvel Cinematic Universe')).toBeInTheDocument(); 
  })
  it('A selection of articles can be filtered by searching title key words', () => {
    const { getAllByText, getByText, getByPlaceholderText } = render(<App />)
    fireEvent.change(getByPlaceholderText('search through articles...'), {target: {value: 'giant'}})
    fireEvent.click(getByText('Search'))
    expect(getAllByText('Read full article here')).toHaveLength(1); 
  });
})