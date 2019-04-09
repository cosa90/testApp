import {Component} from "react";
import React from "react";
import "./DragAndDropTable.css";

class DragAndDropTable extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            items: this.props.items,
            counter: 0
        };
        
        this.dragDrop = this.dragDrop.bind(this);
        this.dragStart = this.dragStart.bind(this);
        this.dragOver = this.dragOver.bind(this);
        this.createRows = this.createRows.bind(this);
    }
    
    dragDrop(ev){
        this.props.tester(ev);
        
        //ev.stopPropagation();
    }
    
    dragStart(ev){
        debugger
        ev.dataTransfer.effectAllowed = 'move';
        ev.dataTransfer.setData("id", ev.target.id);
    }
    
    dragOver(ev){
        ev.preventDefault()
    }
    
    createRows(){
        const items = this.state.items;
        const array = items.map((item) => {
            return (<tr key={item.id} id={item.id} draggable={true} onDragStart={this.dragStart}>
                <td>{item.company}</td>
                <td>{item.contact}</td>
                <td>{item.country}</td>
            </tr>);
        });
        return array;
    }
    
    render(){
        return (
            <div>
                <table onDrop={this.dragDrop} onDragOver={this.dragOver}>
                    <tbody>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    {this.createRows()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DragAndDropTable;