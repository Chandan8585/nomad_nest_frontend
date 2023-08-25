import {Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import SingleHotel from './pages/singleHotel/SingleHotel';
import SearchResults from './pages/searchResults/SearchResults';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/hotels/:name/:address/:id/reserve' element={<SingleHotel/>} />
        <Route path='/hotels/:address' element={<SearchResults/>} />
      </Routes>
    </div>
  );
}

export default App;
