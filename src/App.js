
import React, { useState, useEffect, useRef } from 'react';
import { Loader } from './Components/Baccarat/Loader';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Baccarat from "./Components/Baccarat";
import './App.css'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const timer = useRef()

  useEffect(() => {
    // Simulating an async operation
    if (timer.ref) clearTimeout(timer.ref)

    timer.ref = setTimeout(() => {
      setIsLoading(false);
    }, 5200);
  }, []);

  return (
    <div className='app'>
      {/* <Router>
        <Routes>
          <Route path='/game' element={<Baccarat />} />
        </Routes>
      </Router> */}
      {isLoading ? <Loader /> : <Baccarat />}

    </div>
  );
};

export default App;
