import React from 'react';
import HomePage from './pages/Home';

// keep this simple, a place to boot the app
// pass in configs, etc
// this should call the router here instead of homepage in a prod app
const App: React.FunctionComponent = () => {
    return (
        <div className="App" data-testid="appWrapper">
            <HomePage />
        </div>
    );
};

export default App;
