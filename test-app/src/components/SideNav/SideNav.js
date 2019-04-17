import React from "react";
import {Component} from "react";
import "./SideNav.css";
import MainView from "../Main View/MainView";
import logoOpen from "../../Images/MainView/cartOpen.png";
import logoClose from "../../Images/MainView/cartClose.png";

class SideNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navigationStatus: 0, //dtermans if navigation is opened or closed 0 for close 1 for open
            width: 0,
            marginLeft: 0
        };

        this.navigationControl = this.navigationControl.bind(this);
        this.setImg = this.setImg.bind(this);
    }

    setImg() {
        if(this.state.navigationStatus){
            return '/src/Images/MainView/cart(+).png';
        }
        return '/src/Images/MainView/cart(-).png';
    }

    navigationControl() {
        if (this.state.navigationStatus) {
            this.setState({
                navigationStatus: 0,
                width: 0,
                marginLeft: 0
            });
        } else {
            this.setState({
                navigationStatus: 1,
                width: 250,
                marginLeft: 250
            });
        }
    }


    render() {
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
                    <a href="javascript:void(0)" style={closeBtn} onClick={this.navigationControl}>&times;</a>
                    <a href="#" style={href}>About</a>
                    <a href="#" style={href}>Services</a>
                    <a href="#" style={href}>Clients</a>
                    <a href="#" style={href}>Contact</a>
                </div>

                <div id="main" style={main}>
                    <h2> Sidenav Push Example </h2>
                    <p>Click on the element below to open the side navigation menu, and push this content to the
                        right.</p>
                    <span style={{
                        fontSize: "30px",
                        cursor: "pointer"
                    }} onClick={this.navigationControl}> <img style={{width:'25px',height:'25px'}} src={!!this.state.navigationStatus ? logoClose : logoOpen }/> {!!this.state.navigationStatus ? ('close'):('open')} </span>
                    <MainView userName="PERA"/>
                </div>

            </div>
        )
    }
}

export default SideNav;