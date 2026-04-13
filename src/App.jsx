import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./components/login/Login"
import Dashboard from "./components/dashboard/Dashboard";
import NotFound from "./components/routes/notFound/NotFound";
import { useState } from "react";
import Protected from "./components/routes/protected/Protected";
const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleLogIn = () => {
    setIsSignedIn(true);
  }
  return (
    <div className="d-flex flex-column align-items-center">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login onLogin={handleLogIn} />} />
          <Route path="library" element={
            <Protected isSignedIn={isSignedIn}>
              <Dashboard />
            </Protected>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
