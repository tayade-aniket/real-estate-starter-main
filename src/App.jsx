import React from 'react';

// importing Routes, Route
import { Routes, Route } from 'react-router-dom';

// importing components
import Header from './components/Header';
import Footer from './components/Footer';

// importing pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';

const App = () => {
  return <div className='max-w-[1440px] mx-auto bg-white'>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/property/:id' element={<PropertyDetails />} />
    </Routes>
    <Footer />
  </div>;
};

export default App;
