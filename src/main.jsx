import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from './layouts/Root.jsx';
import Home from './pages/Home.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Login from './pages/Login.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import EstateDetails from './pages/EstateDetails.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from './routes/PrivateRoute.jsx';
import UpdateProfile from './pages/UpdateProfile.jsx';
import Blog from './pages/Blog.jsx';
import AboutUs from './pages/AboutUs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <RegisterPage />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/details/:id',
        element: <PrivateRoute>
          <EstateDetails />
        </PrivateRoute>,
        loader: () => fetch('/estate.json')
      },
      {
        path: '/blogs',
        element: <PrivateRoute>
          <Blog />
        </PrivateRoute>
      },
      {
        path: '/update',
        element: <PrivateRoute>
          <UpdateProfile />
        </PrivateRoute>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
