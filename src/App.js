import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root/Root";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <HomePage />, // <== this is the new line
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
