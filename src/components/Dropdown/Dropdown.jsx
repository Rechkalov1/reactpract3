import React, { Component } from "react";
import { Drop,DropdownMenu } from "./Drop.styled";
export class Dropdown extends Component {
  state ={
    visible: false,
  }
  toggle =()=>{
    this.setState(prevState =>({
        visible : !prevState.visible,
    }))
  }
 
    render() {
    return (
      <Drop>
        <button type="button" className="Dropdown__toggle" onClick={this.toggle}>
         {this.state.visible ? "Скрыть" : "Показать"}
        </button>
        
        {this.state.visible &&( <DropdownMenu >Выпадающее меню</DropdownMenu>
        )}
       
      </Drop>
    );
  }
}
