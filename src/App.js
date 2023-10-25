import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/Error/ErrorPage';
import LoginPage from './pages/Login/LoginPage';
import HomePage from './pages/Home/HomePage';
import Root from './pages/Root/Root';

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
]);

function App() {
  //Render elements tree
  return <RouterProvider router={router} />;
}

export default App;
