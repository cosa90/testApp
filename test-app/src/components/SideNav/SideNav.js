import React from "react";
import {Component} from "react";
import "./SideNav.css";

class SideNav extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            width: 0,
            marginLeft: 0
        };
        
        this.closeNav = this.closeNav.bind(this);
        this.openNav = this.openNav.bind(this);
    }
    
    openNav(){
        this.setState({
            width: 250,
            marginLeft: 250
        });
    }
    
    closeNav(){
        this.setState({
            width: 0,
            marginLeft: 0
        });
    }
    
    render(){
        let sidenav = {
            height: "100%",
            width: this.state.width,
            position: "fixed",
            zIndex: 1,
            top: 0,
            left: 0,
            backgroundColor: "#111",
            overflowX: "hidden",
            transition: "0.5s",
            paddingTop: "60px"
        };
        
        let href = {
            padding: "8px 8px 8px 32px",
            textDecoration: "none",
            fontSize: "25px",
            color: "#818181",
            display: "block",
            transition: "0.3s"
        };
        
        let closeBtn = {
            ...href,
            position: "absolute",
            top: 0,
            right: "25px",
            fontSize: "36px",
            marginLeft: "50px"
        };
        
        let main = {
            transition: "margin-left .5s",
            padding: "16px",
            marginLeft: this.state.marginLeft + "px"
        };
        return (
            <div style={{
                width: '100%',
                height: '100%'
            }}>
                <div id="mySidenav" style={sidenav}>
                    <a href="javascript:void(0)" style={closeBtn} onClick={this.closeNav}>&times;</a>
                    <a href="#" style={href}>About</a>
                    <a href="#" style={href}>Services</a>
                    <a href="#" style={href}>Clients</a>
                    <a href="#" style={href}>Contact</a>
                </div>
                
                <div id="main" style={main}>
                    <h2> Sidenav Push Example </h2>
                    <p>Click on the element below to open the side navigation menu, and push this content to the right.</p>
                    <span style={{
                        fontSize: "30px",
                        cursor: "pointer"
                    }} onClick={this.openNav}> &#9776; open </span>
                </div>
            </div>
        )
    }
}

export default SideNav;