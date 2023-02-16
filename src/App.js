import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './pages/ForgotPassword';
import AuctionNow from './pages/AuctionNow';
import ReviewItem from './pages/ReviewItem';
import EditItem from './pages/EditItem';
import ContactUs from './pages/ContactUs';


function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/profile" element={<PrivateRoute />} >
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} /> 
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/auction-now" element={<PrivateRoute />} >
          <Route path="/auction-now" element={<AuctionNow />} />
          <Route path="/auction-now/category/:categoryName" element={<AuctionNow />} />
        </Route>
        <Route path="/review-item/:itemId" element={<ReviewItem />} />
        <Route path="edit-item/:itemId" element={<EditItem/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
