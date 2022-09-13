import React from "react";
import { PageTitle } from "components/PageTitle/PageTitle"
import { EventBoard } from "./EventBoard/EventBoard"
import { Dropdown } from "./Dropdown/Dropdown";
import { Counter } from "./Counter/Counter";

import upcomingEvents from '../upcoming-events.json'
import { ColorPicker } from "./ColorPicker/ColorPicker";

const colorPickerOptions =[
    
        {label:'red',color:'#f44336'},
        {label:'green',color:'#4caf50'},
        {label:'blue',color:'#2196f3'},
        {label:'grey',color:'#607d8b'},
        {label:'pink',color:'#e91e63'},
        {label:'indigo',color:'#3f51b5'},
    
]


export const App = () => {
  return (
    <div>
      
      <PageTitle text="24TH CORE WORLDS COALITION CONFERENCE"/>
       <EventBoard events={upcomingEvents}/>
      <Counter initialValue={0} />
      <Dropdown />
   
      <ColorPicker options={colorPickerOptions}/>
    </div>
   
  );
};
