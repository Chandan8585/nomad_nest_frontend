import {Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import SingleHotel from './pages/singleHotel/SingleHotel';
import SearchResults from './pages/searchResults/SearchResults';
import Filter from './components/filters/Filter';
import AuthModal from './components/AuthModal/AuthModal';
import WishList from './pages/wishlist/WishList';
import Payment from './pages/payment/Payment';
import OrderSummary from './pages/order-summary/OrderSummary';
import UserProfile from './pages/userProfile/UserProfile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { orange } from '@mui/material/colors';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        
        <Route path='/hotels/:name/:address/:id/reserve' element={<SingleHotel/>} />
        <Route path='/hotels/:address' element={<SearchResults/>} />
        <Route path='/hotels/filter' element= {<Filter/>} />
        <Route path='/hotels/auth' element= {<AuthModal/>} />
        <Route path='/hotels/wishlist' element= {<WishList/>} />
        <Route path='/confirm-booking/stay/:id' element= {<Payment/>} />
        <Route path='/hotels/order-summary/:id' element= {<OrderSummary/>} />
        <Route path='/user-profile' element={<UserProfile/>} />
      </Routes>
      <ToastContainer autoClose={3000} color={orange}/>
    </div>
  );
}

export default App;


// 