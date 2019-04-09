import {Component} from "react";
import React from "react";
import Dnd from "../DragAndDropTable/DragAndDropTable";

class MainView extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            items: [{
                id: 1,
                company: "Alfreds Futterkiste",
                contact: "Francisco Chang",
                country: "Germany",
                selected: true
            }, {
                id: 2,
                company: "Centro comercial Moctezuma",
                contact: "Francisco Chang",
                country: "Mexico",
                selected: false
            }],
        }
    }
    
    tester(){
        debugger
        var src = ev.dataTransfer.getData("id");
        //ev.target.appendChild(document.getElementById(src));
        //const id = ev.target.id;
    
        const exists = this.state.items.every((item) => {
            debugger
            if (item.id.toString() === src) {
                return false;
            }
            return true
        });
    
        if (exists) {
            let obj = {
                ...this.state,
                items: this.state.items.concat({
                    id: 3,
                    company: "C",
                    contact: "F",
                    country: "M",
                    selected: false
                })
            };
            debugger
            this.setState(obj);
        }
    }
    
    render(){
        return (
            <div>
                <h1>HELLO + {this.props.userName}</h1>
                
                <Dnd tester={this.tester} items={[this.state.items[0]]}/>
                
                <Dnd tester={this.tester} items={[this.state.items[1]]}/>
            </div>
        
        );
    }
}

export default MainView;