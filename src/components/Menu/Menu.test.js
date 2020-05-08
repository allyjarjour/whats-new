import React from 'react';
import Menu from './Menu';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Menu', () => {
    it('Should display the title of the page', () => {
        const { getByText } = render(<Menu />)
        expect(getByText(`What's New?`)).toBeInTheDocument()
    })
    it('Should display article themes', () => {
        const { getByText } = render(<Menu />)
        expect(getByText('Local')).toBeInTheDocument()
        expect(getByText('Entertainment')).toBeInTheDocument()
        expect(getByText('Health')).toBeInTheDocument()
        expect(getByText('Science')).toBeInTheDocument()
        expect(getByText('Technology')).toBeInTheDocument()
    })
    it('When a category button is clicked, it should fire the handleSelection function', () => {
        const handleSelection = jest.fn();
        const { getByLabelText } = render(<Menu handleSelection={handleSelection} />)
        fireEvent.click(getByLabelText('Entertainment'))
        expect(handleSelection).toHaveBeenCalled();
    })
  
})
