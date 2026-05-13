import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import Login from "./components/auth/login/Login"
import Dashboard from "./components/biz/dashboard/Dashboard";
import NotFound from "./components/routes/notFound/NotFound";
import { useState } from "react";
import Protected from "./components/routes/protected/Protected";
import Register from "./components/auth/register/Register";
const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleLogIn = () => {
    setIsSignedIn(true);
  }

  const handleLogout = () => {
    setIsSignedIn(false);
    localStorage.removeItem("book-champions-token")
  }


  return (
    <div className="d-flex flex-column align-items-center">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/library" replace />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login onLogin={handleLogIn} />} />
          <Route element={<Protected isSignedIn={isSignedIn} />}>
            <Route path="library/*" element={<Dashboard onLogout={handleLogout} />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
