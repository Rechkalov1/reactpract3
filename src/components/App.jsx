import { PageTitle } from "components/PageTitle/PageTitle"
import { EventBoard } from "./EventBoard/EventBoard"
import {Counter} from './Counter/Counter'
import upcomingEvents from '../upcoming-events.json'
export const App = () => {
    return <div>
       <PageTitle text="24TH CORE WORLDS COALITION CONFERENCE"/>
       <EventBoard events={upcomingEvents}/>
       <Counter/>
       </div>
}