import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import FillSubscription from './pages/Dashboard/FillSubscription';
import Payment from './pages/Dashboard/Payment';
import Hotels from './pages/Dashboard/Hotel';
import Reservation from './pages/Dashboard/Reservation';
import Activities from './pages/Dashboard/Activities';
import Certificate from './pages/Dashboard/Certificate';

import { UserProvider } from './contexts/UserContext';

import useToken from './hooks/useToken';

export default function App() {
  return (
    <>
      <ToastContainer />
        <UserProvider>
          <Router>
            <Routes>
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />

              <Route
                path="/"
                element={
                  <ProtectedRouteGuard>
                    <Dashboard />
                  </ProtectedRouteGuard>
                }
              >
                <Route path="subscription" element={<FillSubscription />} />
                <Route path="payment" element={<Payment />} />
                <Route path="hotel" element={<Hotels />} />
                <Route path="hotel/reservation" element={<Reservation />} />
                <Route path="activities" element={<Activities />} />
                <Route path="certificate" element={<Certificate />} />
                <Route index path="*" element={<Navigate to="/dashboard/subscription" />} />
              </Route>
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
