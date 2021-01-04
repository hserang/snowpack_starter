import ContentAndHeader from '..';
import React from 'react';
import { render, screen } from '@testing-library/react';

const MockContent: React.FunctionComponent = () => (
    <div data-testid="mockContent">hello</div>
);

const MockHeader: React.FunctionComponent = () => (
    <div data-testid="mockHeader">header</div>
);

describe('<ContentAndHeader />', () => {
    it('should render content only', () => {
        render(
            <ContentAndHeader>
                {{
                    content: <MockContent />
                }}
            </ContentAndHeader>
        );

        expect(screen.getByTestId('mockContent')).toBeTruthy();
        expect(screen.queryByTestId('mockHeader')).toBeNull();
    });

    it('should render content and header', () => {
        render(
            <ContentAndHeader>
                {{
                    content: <MockContent />,
                    header: <MockHeader />
                }}
            </ContentAndHeader>
        );

        expect(screen.getByTestId('mockContent')).toBeTruthy();
        expect(screen.getByTestId('mockHeader')).toBeTruthy();
    });
});
