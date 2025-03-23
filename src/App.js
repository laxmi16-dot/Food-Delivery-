import React from 'react';
import Navbar from './component/Navbar'; // Ensure the path matches your folder structure
import Home from './pages/Home';
import Login from './pages/Login';
import TopRestaurants from './pages/Restaurants'; // Renamed for clarity
import Ordernow from './pages/Ordernow'; // Import the OrderNow component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Restaurants" element={<TopRestaurants />} />
        <Route path="/Ordernow" element={<Ordernow />} /> {/* Added route for OrderNow */}
      </Routes>
    </Router>
  );
};

export default App;
