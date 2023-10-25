// React Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Component Imported
import ErrorPage from './pages/ErrorPage/ErrorPage';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import Root from './pages/Root/Root';
import SignUp from './pages/SignupPage/SignupPage';

//Create router
const router = createBrowserRouter([
  {
    path: '',
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },

  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },

  {
    path: '/signup',
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  //Render elements tree
  return <RouterProvider router={router} />;
}

export default App;
