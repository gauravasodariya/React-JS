import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import { Home } from './Home.jsx'
import { About } from './React router/About.jsx'
import { Contact } from './React router/Contact.jsx'

export default function App(){
  return(
    <BrowserRouter> 
    <nav>
        <Link to='/'>Home</Link> | {" "}
        <Link to='/about'>About</Link> | {" "}
        <Link to='/contact'>Contact</Link>
    </nav>
    
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
  )}