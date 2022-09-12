import React from "react";
import {Div} from './counter.styled'
class Counter extends React.Component{
    render() {
return(
    <Div>
        <span>0</span>
        <div>
            <button type="button"onClick={
                ()=>{
                    console.log("Клик увеличить")
                }
            }>Увеличить на 1</button>
            <button type="button">Уменьшить на 1</button>
        </div>
    </Div>
)
    }
}


export default Counter;