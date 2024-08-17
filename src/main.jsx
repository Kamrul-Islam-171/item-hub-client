import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayouts from './MainLayouts/MainLayouts.jsx';
import Home from './pages/Home.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Login from './pages/Login.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Registration from './pages/Registration.jsx';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorPage from './pages/ErrorPage.jsx';
import About from './pages/About.jsx';
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }, {
        path : '/about',
        element : <About></About>
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Registration></Registration>
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>

      <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster></Toaster>
      </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>,
)
