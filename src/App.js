import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser, loading } = useContext(AuthContext);

  const PrivateRoute = ({ children }) => {
    if (loading) {
      return <div>loading ...</div>;
    }

    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
