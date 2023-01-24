import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from '../services/axios';

// Pages
import Home from '../pages/pageHome/pageHome';
import About from '../pages/pageAbout/pageAbout';
import Profile from '../pages/pageProfile/pageProfile';
import Login from '../pages/pageLogin/pageLogin';
import Register from '../pages/pageRegister/pageRegister';
import Page404 from '../pages/page404/page404';
import Services from '../pages/pageServices/pageServices';

import PrivateRoute from './PrivateRoute';
import UserEdit from '../pages/pageUserEdit/pageUserEdit';
import PageUser from '../pages/pageUser/pageUser';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />
      {/* About */}
      <Route path="/about/" element={<About />} />
      {/* Register */}
      <Route path="/register" element={<Register />} />
      {/* Login */}
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        {/* Profile */}
        <Route path="/user/" element={<Profile />}>
          <Route path="" element={<PageUser />} />
          {/* Edit Users */}
          <Route path="edit/" element={<UserEdit />} />
          {/* Services */}
          <Route path="services/" element={<Services />}>
            <Route path="create" />
            <Route path=":id/">
              <Route path="edit" />
              <Route path="delete" />
            </Route>
          </Route>
        </Route>
      </Route>
      {/* Page 404 */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
