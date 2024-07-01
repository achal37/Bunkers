import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Adminhome from "./pages/admin/Adminhome";
import UserHome from "./pages/user/UserHome";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Adminhome />} />
        <Route path="/user" element={<UserHome />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
