import React, { lazy, Suspense } from 'react';
import { render } from "react-dom";
import { BrowserRouter, Route, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AsignaturasProvider from './providers/AsignaturasProvider';
import { AnimatedRoutes } from './components/Transitions/RouteTransition';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

const Asignaturas = lazy(() => import('./pages/Asignaturas'));
const Clase = lazy(() => import('./pages/Clase'));

render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AsignaturasProvider>
        <Suspense fallback={<div>Cargando...</div>}>
          <BrowserRouter>
            <AnimatedRoutes>
              <Route path="/app" element={<App />}>
                <Route path="asignaturas" element={<Asignaturas />} />
                <Route path="asignaturas/:asignaturaId/:cursoId" element={<Clase />} />
              </Route>
              <Route path="/" element={<Navigate replace to="/app" />} />
            </AnimatedRoutes>
          </BrowserRouter>
        </Suspense>
      </AsignaturasProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
