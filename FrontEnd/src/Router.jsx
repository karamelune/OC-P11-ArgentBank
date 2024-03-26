import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <div id="mainContainer">
                    {/* <Header /> */}
                    <Outlet />
                    {/* <Footer /> */}
                </div>
            ),
            errorElement: (
                <div id="mainContainer">
                    {/* <Header /> */}
                    {/* <ErrorPage /> */}
                    {/* <Footer /> */}
                </div>
            ),
            children: [
                {
                    path: '/',
                    element: <Home />,
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
