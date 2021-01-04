import React from 'react';
import type { LayoutProps } from 'types';
import './styles.css';

const ContentAndHeaderLayout: React.FunctionComponent<LayoutProps> = props => {
    const {
        children: { content, header }
    } = props;

    return (
        <div className="bodyWrapper">
            {header && <div className="header">{header}</div>}
            {content}
        </div>
    );
};

export default ContentAndHeaderLayout;
