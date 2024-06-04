import logo from './logo.svg';
import './App.css';
// import Header from "./Mycomponent/Header";
// import Footer from './Mycomponent/footer';
import React from "react";
// import Login from "./Mycomponent/Login";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
// import Switch from "react-router-dom";
// import Contact from './Mycomponent/contact';
import Main from './Mycomponent/Main';
import Mainlogin from './Mycomponent/Mainlogin';
import CreateAccount from './Mycomponent/CreateAccount';
import Motorcycles from './Mycomponent/Motorcycles';
import Brand from './Mycomponent/Brand';
import Model from './Mycomponent/Model';
import Location from './Mycomponent/Location';
import Addminlogin from './Mycomponent/Addminlogin';
import Book from './Mycomponent/Book';
import Users from './Mycomponent/Users';
import Bookingpanel from './Mycomponent/Bookingpanel'
import Map from './Mycomponent/Map';
// import Sendmail from "./src/backend/Sendmail.js";
// import Navbar from "./component/navbar";

function App() {
  return (
    <>
    {/* <Navbar/>  */}
    <Router>
      <Routes>
    <Route path="login" element={<Mainlogin/>} />
      <Route path="/" element={<Main/>}/>
      <Route path="createaccount" element={<CreateAccount/>}/>
      <Route path="motorcycles" element={<Motorcycles/>}/>
      <Route path="bike" element={<Model/>}/>
      <Route path="brand" element={<Brand/>}/>
      <Route path="locate" element={<Location/>}/>
      <Route path='addminlogin' element={<Addminlogin/>}/>
      <Route path='book' element={<Book/>}/>
      <Route path='users' element={<Users/>}/>
      <Route path="bookingpanel" element={<Bookingpanel/>}/>
      <Route path="map" element={<Map/>}/>
      {/* <Route path="send-email" element={<Sendmail/>}/> */}
      {/* <Route path='navbar' element={<Navbar/>}/> */}
     </Routes>
      </Router>
      </>
  );
}

export default App;
