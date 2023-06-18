import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Creator from "./pages/Creator";

import { UserProvider } from "./contexts/UserContext";

import useToken from "./hooks/useToken";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <ToastContainer />
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/creator/:name" element={<Creator />}/>
            <Route path="/home" element={
              <ProtectedRouteGuard>
                <Home />
              </ProtectedRouteGuard>
              }>
            </Route>
            <Route path="/*" element={<Navigate to="/sign-in" />}/>
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <>{children}</>;
}
