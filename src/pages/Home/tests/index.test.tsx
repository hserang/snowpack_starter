import Home, { contentText, headerText } from '..';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('<Home />', () => {
    it('should render content only', () => {
        render(<Home />);

        expect(screen.getByText(contentText)).toBeTruthy();
        expect(screen.getByText(headerText)).toBeTruthy();
    });
});
