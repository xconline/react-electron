import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
class Main extends Component {
    render() {
        return (
            <div>
                <Route path="/home" component={Home} />
            </div>
        );
    }
}
export default Main;
