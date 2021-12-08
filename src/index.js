import React, { lazy, Suspense } from 'react';
import { render } from "react-dom";
import { Outlet, BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Asignaturas = lazy(() => import('./pages/Asignaturas'));

render(
  <React.StrictMode>
    <Suspense fallback={<div>Cargando...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/app" element={<App />}>
            <Route path="asignaturas" element={<Asignaturas />} />
          </Route>
          <Route path="/" element={<Navigate replace to="/app" />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
