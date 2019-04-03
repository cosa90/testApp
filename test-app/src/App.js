import React, {Component} from 'react';
import SignIn from './components/login/SignIn';
import {BrowserRouter, Route} from 'react-router-dom';
import MainView from "./components/Main View/MainView";
import MaterialLogin from "./components/materialUiLogin/MaterialLogin"

class App extends Component {
    render(){
        return (
            <MaterialLogin/>
        );
    }
}

export default App;
