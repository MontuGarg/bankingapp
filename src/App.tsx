import React from 'react';
import {HashRouter as Router} from "react-router-dom"
import './App.css';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
     
     <Router>
       <AllRoutes/>
     </Router>
    </div>
  );
}

export default App;
