import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import UserRoute from './routes/UserRoute';
import Home from './pages/Home/Home';
import Header from './layout/Nav/Nav';
import Footer from './layout/Footer/Footer';
import SignIn from './pages/SignIn/SignIn';
import Error from './pages/Error/Error';

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
            errorElement: (
                <div id="mainContainer">
                    <Header />
                    <Error />
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
                    element: <UserRoute />,
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
