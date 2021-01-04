import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import ContentAndHeader from '../../layouts/ContentAndHeader';
import './styles.css';

const Header: React.FunctionComponent = () => {
    return <div>Header component</div>;
};

const Content: React.FunctionComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setCount(count + 1), 1000);
        return () => clearTimeout(timer);
    }, [count, setCount]);

    return (
        <>
            <img src={logo} className="App-logo" alt="logo" />
            <p>I can haz content</p>
            <p>
                Page has been open for <code>{count}</code> seconds.
            </p>
        </>
    );
};

const HomePage: React.FunctionComponent = () => {
    return (
        <ContentAndHeader>
            {{
                content: <Content />,
                header: <Header />
            }}
        </ContentAndHeader>
    );
};

export default HomePage;
