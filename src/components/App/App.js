import React from 'react';
import Tabs from '../Tabs';
import SearchBar from '../SearchBar';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
                <Tabs />
            </div>
        )
    };
}

export default App;