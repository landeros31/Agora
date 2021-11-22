import React from "react";
<<<<<<< HEAD
import Cardproject from "./components/views/projects/projectsvalidate/cardprojects/Cardproject";



//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Feedback from "./components/views/projects/projectsvalidate/feedbackprojects/FeedbackProjects";

  

function App() {
  return (
      <>

   
    <Feedback/>

 
       
       
    </>
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/body/auth/Login";
import Register from "./pages/register/Register";
import ActivationEmail from './pages/activation-email/ActivationEmail'
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import ResetPassword from "./pages/resetPassword/ResetPassword";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} exact />
        <Route path="/register" element={<Register />} exact />
        <Route path="/user/activate/reset_password/:activation_token" element={<ResetPassword />} exact />
        <Route
          path="/user/activate/:activation_token"
          element={<ActivationEmail />}
          exact
        />
        <Route path="/forgot_password" element={<ForgotPassword />} exact />
      </Routes>
    </Router>
>>>>>>> 85a2f9f34423f77b44863afe0a4164097c521470
  );
}

export default App;
