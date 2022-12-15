import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { InitOutlet } from './shared/outlets/init';
import { AuthOutlet } from './shared/outlets/auth';
import { PrivateOutlet } from './shared/outlets/private';

import { Login } from './features/login/Login';
import { HomePage } from './features/homePage/HomePage';
import { Board } from './features/board/Board';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<InitOutlet />}>
          <Route element={<AuthOutlet />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PrivateOutlet />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/board" element={<Board />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
