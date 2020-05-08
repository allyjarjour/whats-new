import React from 'react';
import SearchForm from './SearchForm';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe('SearchForm', () => {
    describe('Search Input', () => {
        it('Should display a search input with placeholder text if there is nothing typed', () => {
            const { getByPlaceholderText } = render(<SearchForm searchInput="Spider-Man"/>)
            expect(getByPlaceholderText(`search through articles...`)).toBeInTheDocument()
        })
        it('Should update search input on change', () => {
            const { getByPlaceholderText } = render(<SearchForm searchInput="Spider-Man"/>)
            const searchInput = getByPlaceholderText(`search through articles...`)
            fireEvent.change(searchInput, {target: {value: 'puppies'}})
            expect(searchInput.value).toBe('puppies')
        })
    })
    describe('Search and Reset Buttons', () => {
        it('Should display the search button if there is no search input submitted', () => {
            const { getByText } = render(<SearchForm searchInput="Spider-Man" />)
            expect(getByText('Search')).toBeInTheDocument()
        })
        it('When the search button is clicked, it should trigger the handleSearch function', () => {
            const handleSearch = jest.fn();
            const { getByText } = render(<SearchForm searchInput="Spider-Man" handleSearch={handleSearch} />)
            fireEvent.click(getByText('Search'))
            expect(handleSearch).toHaveBeenCalled()
        })
        it('Should display the reset button if there is search input submitted', () => {
            const { getByText, getByPlaceholderText } = render(<SearchForm searchInput="Spider-Man" />)
            const searchInput = getByPlaceholderText('search through articles...')            
            fireEvent.change(searchInput, {target: {value: 'cats'}})
            expect(getByText('Reset')).toBeInTheDocument() 
        })
        it('When the reset button is clicked, it should trigger the handleReset funtion', () => {
            const handleReset = jest.fn();
            const { getByText } = render(<SearchForm searchInput="Spider-Man" handleReset={handleReset} />)
            fireEvent.click(getByText('Reset'))
            expect(handleReset).toHaveBeenCalled()
        })
    })
  
})