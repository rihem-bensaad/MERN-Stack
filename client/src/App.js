import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";


function App() {
  return (
    <Router>
    <div className="App">
      <ToastContainer position="top-center"/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/addContact" element={<AddEdit/>} />
        <Route path="/update/:id" element={<AddEdit/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
