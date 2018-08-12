import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
    render() {
        return (
            <div className="home">
                <Link to="/">return</Link>
                this is home page
            </div>
        );
    }
}

export default Home;
