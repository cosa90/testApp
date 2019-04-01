import React, {Component} from 'react';
import SignIn from './components/login/SignIn';
import {BrowserRouter, Route} from 'react-router-dom';
import MainView from "./components/Main View/MainView";

class App extends Component {
    render(){
        return (
            <SignIn/>
        );
    }
}

export default App;
