import {Component} from "react";
import React from "react";
import Dnd from "../DragAndDropTable/DragAndDropTable";

class MainView extends Component {

    constructor(props) {
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
        };

        this.tester = this.tester.bind(this);
        this.selectedUsers = this.selectedUsers.bind(this);
        this.unselectedUsers = this.unselectedUsers.bind(this);
    }

    tester(ev) {
        debugger
        const src = JSON.parse(ev.dataTransfer.getData("obj")).id;
        //ev.target.appendChild(document.getElementById(src));
        //const id = ev.target.id;

        const nextArray = [...this.state.items];
        const exists = nextArray.map((item) => {
            if (item.id.toString() === src) {
                item.selected = !item.selected;
            }
            return item;
        });

        if (true) {
            let obj = {
                ...this.state,
                items: exists
            };
            debugger
            this.setState(obj);
        }
    }

    selectedUsers() {
        const selected = this.state.items.filter((item) => {
            if (item.selected) {
                return item;
            }
        });

        return selected;
    }

    unselectedUsers() {
        const selected = this.state.items.filter((item) => {
            if (!item.selected) {
                return item;
            }
        });
        debugger
        return selected;
    }

    render() {
        return (
            <div style={{width:"100%", margin:"0 auto"}} >
                <h1>HELLO + {this.props.userName}</h1>
                <div style={{display:"inline", width:"100%"}}>
                    <div style={{width:"45%", float:'left'}}>
                        <Dnd tester={this.tester} items={this.selectedUsers()} pos="left"/>
                    </div>
                    <div style={{width:"50%", marginLeft:"50%"}}>
                        <Dnd tester={this.tester} items={this.unselectedUsers()} pos="right"/>
                    </div>
                </div>

            </div>
        );
    }
}

export default MainView;