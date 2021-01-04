import React from 'react';
import './styles.css';

interface ContentAndHeaderProps {
    children: {
        header?: React.ReactChild;
        content: React.ReactChild;
    };
}

const ContentAndHeaderLayout: React.FunctionComponent<ContentAndHeaderProps> = props => {
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
