import React from "react";
import {
    FormControl,
    InputLabel,
    Input,
    Button,
} from "@material-ui/core";
import './MaterialLogin.css'
import MainView from "../Main View/MainView";

class MaterialLogin extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            auth: false,
            userName: ''
        };
        
        this.authenticate = this.authenticate.bind(this);
        
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        
    }
    
    authenticate(){
        var condition = this.state.email === 'pera' && this.state.password === 'mika';
        this.setState({
            auth: condition,
            userName: 'Milojko'
        });
    };
    
    handleEmailChange(e){
        this.setState({email: e.target.value});
    };
    
    handlePasswordChange(e){
        this.setState({password: e.target.value});
    };
    
    render(){
        if (this.state.auth) {
            return (
                <MainView userName={this.state.userName}/>
            );
        }
        else {
            return (
                <div className="main">
                    <form className="loginForm">
                        <h1 className="loginTitle">Login Form</h1>
                        
                        <FormControl margin="normal" fullWidth>
                            <InputLabel htmlFor="name">Email</InputLabel>
                            <Input id="name" type="text" value={this.state.email} onChange={this.handleEmailChange}/>
                        </FormControl>
                        
                        <FormControl margin="normal" fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                        </FormControl>
                        
                        <Button variant="contained" color="primary" size="medium" onClick={this.authenticate}>
                            Login
                        </Button>
                    </form>
                </div>
            );
        }
    }
}

export default MaterialLogin;
