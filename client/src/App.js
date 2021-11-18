import React from "react";
import Footer from "./components/views/projects/Footer.jsx";
import Header from "./components/views/projects/Header.jsx";
import  Announce from "./components/views/viewannounce/ViewAnnounce";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; 


const App = () => {
  return (
    <>
      <Header />
      <Footer />

      <Router>
        <Routes>
        <Route path='/anuncio' element={Announce} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
