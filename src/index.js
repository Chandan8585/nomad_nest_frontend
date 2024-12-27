import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import { CategoryProvider } from './context/category-context';
import { DateProvider } from './context/date-context';
import { FilterProvider } from './context/filter-context';
import { AuthProvider } from './context/auth-context';
import { WishListProvider } from './context/wishlist-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
         <FilterProvider>
    <DateProvider>
    <CategoryProvider>
      <WishListProvider>
      <App />
      </WishListProvider>
  </CategoryProvider>
    </DateProvider>
    </FilterProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
