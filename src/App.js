import {Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import SingleHotel from './pages/singleHotel/SingleHotel';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/hotels/:name/:address/:id/reserve' element={<SingleHotel/>} />
      </Routes>
    </div>
  );
}

export default App;
