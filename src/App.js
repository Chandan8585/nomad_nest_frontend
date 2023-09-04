import {Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import SingleHotel from './pages/singleHotel/SingleHotel';
import SearchResults from './pages/searchResults/SearchResults';
import Filter from './components/filters/Filter';
import AuthModal from './components/AuthModal/AuthModal';
import WishList from './pages/wishlist/WishList';

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
        
      </Routes>
    </div>
  );
}

export default App;
