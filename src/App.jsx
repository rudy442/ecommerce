import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayout from "./layouts/SharedLayout.jsx";
import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        // element: <Accueille />,
        // errorElement: <SingleError />,
        // loader: homeLoader,
      },

      {
        path: "ordi bureau",
        // element: <Ordibureau />,
      },

      {
        path: "Ordi portable",
        // element: <Ordiportable />,
      },

      {
        path: "piece détachées",
        // element: <Piecedétachées />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
