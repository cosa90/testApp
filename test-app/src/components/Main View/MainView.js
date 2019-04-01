import {Component} from "react";
import React from "react";

class MainView extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div>
                <h1>HELLO + {this.props.userName}</h1>
            </div>
        );
    }
}

export default MainView;