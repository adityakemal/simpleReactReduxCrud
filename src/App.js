import React, {Component} from 'react';
import axios from 'axios' 
import Home from './components/Home.js'
import DeletePost from './components/DeletePost.js';
// import ReduxDemo from './ReduxDemo.js'
// StoreContext = React.createContext()
// import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
class App extends Component {
    render() {
        return (
            <div>
                <Home />
                <DeletePost />
            </div>

        )

    }
}

export default App;
