import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import Cards from '../ThemeFolder/Cards';

describe('Cards', () => {
    let expectedProps;

    beforeEach(() => {
        expectedProps = {
            name: 'Buffalo Chicken Wings',
            image: 'https://craveaway.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdghgcknlo%2Fimage%2Fupload%2Fv1660230707%2Fpeter-pham-v5yVy3IhSRU-unsplash_baf7uw.jpg&w=1920&q=75'
        };
    });

    test('should render name and image', () => {
        const {getByText, getByAltText} = render(<Cards {...expectedProps} />);
        const name = getByText(expectedProps.name);
        const image = getByAltText(expectedProps.name);

        expect(name).toBeVisible();
        expect(address).toBeVisible();
        expect(image).toBeVisible();
    });
});