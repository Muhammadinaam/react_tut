import React from 'react';
import MainNav from './components/MainNav.js';
import { BrowserRouter, Route } from 'react-router-dom';
import CategoriesList from './pages/CategoriesList.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainNav />
        <div className="container pt-4">
          <Route path="/categories" component={CategoriesList} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
