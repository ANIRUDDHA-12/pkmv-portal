import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Therapies from './pages/Therapies';
import StudentLife from './pages/StudentLife';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/therapies',
        element: <Therapies />,
    },
    {
        path: '/student-life',
        element: <StudentLife />,
    },
]);

export default function Root() {
    return <RouterProvider router={router} />;
}
