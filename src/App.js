import React, { Component } from 'react';
import { Button } from 'antd';
import Main from './components/main';
import { Link } from 'react-router-dom';
import './App.css';
const electron = window.electron;
const ipcRenderer = electron.ipcRenderer;
class App extends Component {
    showNativeDialog() {
        ipcRenderer.send('chooseFolder');
    }

    render() {
        return (
            <div className="App">
                <Button type="dashed">
                    <Link to="/home">Home Page</Link>
                </Button>

                <Main />
            </div>
        );
    }
}

export default App;
