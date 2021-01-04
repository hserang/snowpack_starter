import * as React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./pages/Home', () => () => <div data-testid="mockHome">Home</div>);

describe('<App>', () => {
    it('renders Home mock', () => {
        render(<App />);
        expect(screen.getByTestId('mockHome')).toBeTruthy();
    });
});
