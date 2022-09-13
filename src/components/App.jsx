// import { PageTitle } from "components/PageTitle/PageTitle"
// import { EventBoard } from "./EventBoard/EventBoard"
import {Counter} from './Counter/Counter'
import { Dropdown } from './Dropdown/Dropdown'

// import upcomingEvents from '../upcoming-events.json'
export const App = () => {
    return <div>
<Dropdown/>
       {/* <PageTitle text="24TH CORE WORLDS COALITION CONFERENCE"/>
       <EventBoard events={upcomingEvents}/> */}
       <Counter initialValue={123}/>
       </div>
}