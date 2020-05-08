import React from 'react';
import NewsArticle from './NewsArticle';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('NewsArticle', () => {
    it('Should display article information', () => {
        const { getByText, getByAltText } = render(<NewsArticle url={'www.floridaman.com'}
        headline={'Man tries to burn down house with jar of Ragu'} 
        description={'Neighbors called police on man with gasoline, Ragu, and torch'}
        img={'picofman.jpg'} 
        />)
        expect(getByText(`Read full article here`)).toBeInTheDocument()
        expect(getByText(`Man tries to burn down house with jar of Ragu`)).toBeInTheDocument()
        expect(getByText(`Neighbors called police on man with gasoline, Ragu, and torch`)).toBeInTheDocument()
        expect(getByAltText(`Neighbors called police on man with gasoline, Ragu, and torch`)).toBeInTheDocument()
    })
    it('Should render a link to the full article', () => {
        const { getByText } = render(<NewsArticle url={'www.floridaman.com'}
        headline={'Man tries to burn down house with jar of Ragu'} 
        description={'Neighbors called police on man with gasoline, Ragu, and torch'}
        img={'picofman.jpg'} 
        />)
        expect(getByText(`Read full article here`)).toHaveAttribute('href', 'www.floridaman.com')
    })
})

