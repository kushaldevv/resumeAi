import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider, LightMode } from '@chakra-ui/react';
import { AuthProvider } from './AuthProvider';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import Auth from './components/Auth';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ProtectedRoute screen="login">
                {' '}
                <Home />{' '}
            </ProtectedRoute>
        ),
    },
    {
        path: '/login',
        element: (
            <ProtectedRoute screen="login">
                {' '}
                <Home />{' '}
            </ProtectedRoute>
        ),
    },
    {
        path: '/signup',
        element: (
            <ProtectedRoute screen="signup">
                {' '}
                <Home />{' '}
            </ProtectedRoute>
        ),
    },
    {
        path: '/forgot',
        element: (
            <ProtectedRoute screen="forgotpassword">
                {' '}
                <Home />{' '}
            </ProtectedRoute>
        ),
    },
    {
        path: '/reset',
        element: (
            <ProtectedRoute screen="login">
                {' '}
                <Auth screen="resetpassword" />{' '}
            </ProtectedRoute>
        ),
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <ChakraProvider>
            <LightMode>
                <AuthProvider>
                    <RouterProvider router={router} />
                </AuthProvider>
            </LightMode>
        </ChakraProvider>
    </React.StrictMode>
);
