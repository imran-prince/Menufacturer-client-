 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div  >
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/contact' element={<Contact></Contact>}></Route>
     </Routes>
    </div>
  );
}

export default App;
