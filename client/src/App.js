import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import View from "./pages/View";
import Login from "./pages/Login";
import Register from "./pages/Register";






function App() {

  const [ user, setLoginUser ] = useState({})


  return (
    <Router>
    <div className="App">
      <ToastContainer position="top-center"/>
      <Routes>
        <Route path="/" element={ user && user._id ? <Home /> : <Login setLoginUser={setLoginUser}/> } />
        <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/addContact" element={<AddEdit/>} />
        <Route path="/update/:id" element={<AddEdit/>} />
        <Route path="/view/:id" element={<View/>} /> 
      </Routes>
    </div>
    </Router>
  );
}

export default App;
