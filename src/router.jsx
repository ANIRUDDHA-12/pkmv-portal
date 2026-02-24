import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import App from './App';
import Therapies from './pages/Therapies';
import StudentLife from './pages/StudentLife';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Academics from './pages/Academics';

const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/therapies', element: <Therapies /> },
    { path: '/student-life', element: <StudentLife /> },
    { path: '/about', element: <AboutUs /> },
    { path: '/contact', element: <ContactUs /> },
    { path: '/academics', element: <Academics /> },
]);

export default function Root() {
    return (
        <LanguageProvider>
            <RouterProvider router={router} />
        </LanguageProvider>
    );
}
