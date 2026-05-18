import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import Login from "./components/auth/login/Login"
import Dashboard from "./components/biz/dashboard/Dashboard";
import NotFound from "./components/routes/notFound/NotFound";
import Protected from "./components/routes/protected/Protected";
import Register from "./components/auth/register/Register";
const App = () => {

  return (
    <div className="d-flex flex-column align-items-center">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/library" replace />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route element={<Protected />}>
            <Route path="library/*" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
