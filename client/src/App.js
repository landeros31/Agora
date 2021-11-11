import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/body/auth/Login";
import Register from "./pages/register/Register";
import ActivationEmail from './pages/activation-email/ActivationEmail'
import Login from "./pages/login/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} exact />
        <Route path="/register" element={<Register />} exact />
        <Route
          path="/user/activate/:activation_token"
          element={<ActivationEmail />}
          exact
        />
      </Routes>
    </Router>
  );
}

export default App;
