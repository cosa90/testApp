import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import MainView from '../Main View/MainView';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            autenticated: false,
            userName: ''
        };
        
        this.authenticate = this.authenticate.bind(this);
        
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        
    }
    
    authenticate(){
        var condition = this.state.email === 'pera' && this.state.password === 'mika';
        this.setState({
            autenticated: condition,
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
        if (this.state.autenticated) {
            return (
                <MainView userName={this.state.userName}/>
            );
        }
        else
            return (
                <main className=''>
                    <CssBaseline/>
                    <Paper className=''>
                        <Avatar className=''>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className=''>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus value={this.state.email} onChange={this.handleEmailChange}/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input name="password" type="password" id="password" autoComplete="current-password" value={this.state.password} onChange={this.handlePasswordChange}/>
                            </FormControl>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="Remember me"
                            />
                            <Button
                                onClick={this.authenticate}
                                //type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className=''
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            );
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default SignIn;
