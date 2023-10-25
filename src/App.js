import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Page/Root/Root";
import HomePage from "./Page/HomePage/HomePage";

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
