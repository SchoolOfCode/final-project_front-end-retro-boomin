import React from 'react';

import Cards from '../ThemeFolder/Cards';

describe('Cards', () => {
    let expectedProps;

    beforeEach(() => {
        expectedProps = {
            name: 'New Bar',
            address: '123 Park Dr.',
            deals: [{}],
            imageUrl: 'https://daydrink.io'
        };
    });

    test('should render name, address, and image', () => {
        const {getByText, getByAltText} = render(<Cards {...expectedProps} />);
        const name = getByText(expectedProps.name);
        const address = getByText(expectedProps.address);
        const image = getByAltText(expectedProps.name);

        expect(name).toBeVisible();
        expect(address).toBeVisible();
        expect(image).toBeVisible();
    });

    test('badge with one deal', () => {
        const {getByText} = render(<Cards {...expectedProps} />);
        const deal = getByText('1 deal');

        expect(deal).toBeVisible();
    });

    test('badge with multiple deals', () => {
        expectedProps.deals = [{}, {}];

        const {getByText} = render(<Cards {...expectedProps} />);
        const deals = getByText('2 deals');

        expect(deals).toBeVisible();
    });
});