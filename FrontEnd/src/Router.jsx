import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './layout/Nav/Nav';
import Footer from './layout/Footer/Footer';
import SignIn from './pages/SignIn/SignIn';
import User from './pages/User/User';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <div id="mainContainer">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            ),
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/signin',
                    element: <SignIn />,
                },
                {
                    path: '/user/:id',
                    element: <User />,
                },
                // ... autres routes
            ],
        },
    ]);

    return (
        <RouterProvider router={router}>
            <Outlet />
        </RouterProvider>
    );
};

export default Router;
