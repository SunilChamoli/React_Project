import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import FormAction from './FormAction';
import Navbar from './Navbar';
import Home2 from './home2'; // Import the Home2 component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> {/* <Routes> component acts as the parent for <Route> components */}
          <Route path="/form" element={<FormAction />} />
          <Route path="/" element={<Home />} />
          <Route path="/home2" element={<Home2 />} /> {/* Add a route for Home2 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
