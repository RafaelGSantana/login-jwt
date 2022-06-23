import { useContext } from 'react';
import { Route, Routes as MyRoutes, Navigate } from 'react-router-dom';

import AuthContext from '../contexts/Auth/AuthContext';

import { SignIn } from '../pages/SignIn';
import { Register } from '../pages/Register';
import { PrivatePage } from '../pages/PrivatePage';

const Routes = () => {
   const {  signed } = useContext(AuthContext);
   return (
      <MyRoutes>
         {/* Public Routes */}
      <Route path="/" element={signed ? <Navigate to="/private" /> : <SignIn />} />
      <Route path="/register" element={signed ? <Navigate to="/private" /> : <Register />} />

         {/* Private Routes */}
         <Route path="/private" element={signed ? <PrivatePage /> : <Navigate to="/" />} />

         {/* Unknown Page */}
      <Route path='*' element={<h1>Page not found.</h1>} />
      </MyRoutes>
   );
}

export default Routes;