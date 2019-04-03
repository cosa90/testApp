import {Component} from "react";
import React from "react";

class MainView extends Component {
    
    render(){
        return (
            <div>
                <h1>HELLO + {this.props.userName}</h1>
            </div>
        );
    }
}

export default MainView;