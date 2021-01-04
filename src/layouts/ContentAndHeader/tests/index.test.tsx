import ContentAndHeader from '..';
import React from 'react';
import { render, screen } from '@testing-library/react';

const MockContent: React.FunctionComponent = () => (
    <div data-testid="mockContent">hello</div>
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

        screen.debug();
    });
});
