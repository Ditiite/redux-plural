import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
    render() {
        return(
            <div className="jumbotron">
                <h1>Plural Sight Administration</h1>    
                <p>React, Redux and React Router in ES6 for ultra-responsive web page.</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;