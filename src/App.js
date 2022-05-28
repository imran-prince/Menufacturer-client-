
import { Route, Routes } from 'react-router-dom';
import './App.css';
 
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
import Purses from './Components/Purses';
import Allusers from './Components/Allusers'
import 'react-toastify/dist/ReactToastify.css';
import OrderPayment from './Components/OrderPayment';
import RequireAdmin from './Components/RequireAdmin';
import AddProduct from './Components/AddProduct';
import ManageAllProduct from './Components/ManageAllProduct';
import ManageAllOrder from './Components/ManageAllOrder';
import UpdateMyprofile from './Components/UpdateMyprofile';
import MyPortFolio from './Components/MyPortFolio';
function App() {
  return (
    <div  >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/portfolio' element={<MyPortFolio></MyPortFolio>}></Route>
        <Route path='/payment' element={<RequireAuth>
          <OrderPayment></OrderPayment>
        </RequireAuth>}></Route>
        <Route path='/purses/:_id' element={<RequireAuth>
          <Purses></Purses>
        </RequireAuth>}></Route>
        <Route path='/contact' element={ 
          <Contact></Contact>}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>


          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='myorders' element={<MyOrder></MyOrder>}></Route>
           
          <Route path='addproduct' element={<RequireAdmin>
            <AddProduct></AddProduct>
          </RequireAdmin>}></Route>
          <Route path='users' element={ 
            <RequireAdmin>
              <Allusers></Allusers>
            </RequireAdmin>
          }></Route>
          <Route path='manageproduct' element={<RequireAdmin>
            <ManageAllProduct></ManageAllProduct>
          </RequireAdmin>}></Route>
          <Route path='manageorder' element={<RequireAdmin>
            <ManageAllOrder></ManageAllOrder>
          </RequireAdmin>}></Route>




        </Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/updateprofile' element={<UpdateMyprofile></UpdateMyprofile>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
