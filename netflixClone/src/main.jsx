import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { EventHandling } from './components/EventHandling.jsx'
import { EventProps } from './components/EventProps.jsx'
import { Propagation } from './components/Propagation.jsx'
import { ToogleSwitch } from './projects/ToogleSwitch/ToogleSwitch.jsx'
import { Todo } from './projects/Todo-app/Todo.jsx'
import { State } from './components/hooks/useState/State.jsx'
import { DerivedState } from './components/hooks/useState/DerivedState.jsx'
import { Index } from './components/hooks/useEffect/index.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    {/* <EventHandling/> */}
    {/* <EventProps/> */}
    {/* <Propagation/> */}
    {/* <State/> */}
    {/* <DerivedState/> */}
    {/* <ToogleSwitch/> */}
    {/* <Todo/> */}
    {/* <Index/> */}
  </StrictMode>
)