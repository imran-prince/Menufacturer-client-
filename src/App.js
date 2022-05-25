
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import NotFound from './Components/NotFound';
import Registration from './Components/Registration';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';
import RequireAuth from './Components/RequireAuth'
import Blog from './Components/Blog';
import Dashboard from './Components/Dashboard';
 import MyOrder from './Components/MyOrder.js'
import AddReview from './Components/AddReview';
import MyProfile from './Components/MyProfile';
function App() {
  return (
    <div  >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<RequireAuth>
          <Contact></Contact>
        </RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
           
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='myorders'  element={<MyOrder></MyOrder>}></Route>
           

        </Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
