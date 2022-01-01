import React, { lazy, Suspense } from 'react';
import { render } from "react-dom";
import { BrowserRouter, Route, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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

const Courses = lazy(() => import('./pages/Courses'));
const ClassCourse = lazy(() => import('./pages/ClassCourse'));

render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Cargando...</div>}>
        <BrowserRouter>
          <AnimatedRoutes>
            <Route path="/app" element={<App />}>
              <Route path="asignaturas" element={<Courses />} />
              <Route path="asignaturas/:classCourseId/*" element={<ClassCourse />} />
            </Route>
            <Route path="/" element={<Navigate replace to="/app" />} />
          </AnimatedRoutes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
